import re
import os
import subprocess
import shutil
from pathlib import Path

class LatexChapterSplitter:
    def __init__(self, main_file_path, output_base_dir="Chapitres"):
        """
        Initialise le découpeur de chapitres LaTeX
        
        Args:
            main_file_path (str): Chemin vers le fichier LaTeX principal
            output_base_dir (str): Dossier de base où trouver les sous-dossiers
        """
        self.main_file_path = Path(main_file_path)
        self.output_base_dir = Path(output_base_dir)
        self.preamble = ""
        self.chapters = []
        
    def extract_preamble_and_chapters(self):
        """Extrait le préambule et découpe le contenu en chapitres"""
        with open(self.main_file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Extraire le préambule (tout avant le premier \section*)
        preamble_match = re.search(r'^(.*?)(?=\\section\*)', content, re.DOTALL)
        if preamble_match:
            self.preamble = preamble_match.group(1)
        
        # Le chapitre 1 commence à la page 4 (après page de garde, sommaire, etc.)
        starting_page = 4
        
        # Trouver tous les chapitres
        chapter_pattern = r'\\section\*\{Chapitre (\d+) - ([^}]+)\}'
        chapter_matches = list(re.finditer(chapter_pattern, content))
        
        current_page = starting_page
        
        for i, match in enumerate(chapter_matches):
            chapter_num = match.group(1)
            chapter_title = match.group(2)
            
            # Début du chapitre
            start_pos = match.start()
            
            # Fin du chapitre (début du suivant ou fin du document)
            if i + 1 < len(chapter_matches):
                end_pos = chapter_matches[i + 1].start()
            else:
                # Pour le dernier chapitre, chercher \end{document}
                end_match = re.search(r'\\end\{document\}', content[start_pos:])
                if end_match:
                    end_pos = start_pos + end_match.start()
                else:
                    end_pos = len(content)
            
            chapter_content = content[start_pos:end_pos].strip()
            
            # Compter les \newpage dans les chapitres précédents
            if i > 0:
                previous_content = content[chapter_matches[0].start():start_pos]
                newpage_in_previous = len(re.findall(r'\\newpage', previous_content))
                current_page = starting_page + newpage_in_previous
            
            self.chapters.append({
                'number': chapter_num,
                'title': chapter_title,
                'content': chapter_content,
                'start_page': current_page
            })
    
    def create_clean_preamble(self):
        """Crée un préambule nettoyé sans page de garde ni sommaire"""
        # Supprimer tout ce qui est entre \begin{document} et le premier \section*
        # Garder seulement \begin{document} et tout ce qui précède
        preamble_parts = self.preamble.split('\\begin{document}')
        if len(preamble_parts) >= 2:
            clean_preamble = preamble_parts[0] + '\\begin{document}\n'
        else:
            clean_preamble = self.preamble
        
        return clean_preamble
    
    def create_chapter_files(self):
        """Crée les fichiers LaTeX pour chaque chapitre"""
        # Vérifier que le dossier de base existe
        if not self.output_base_dir.exists():
            print(f"❌ Le dossier {self.output_base_dir} n'existe pas")
            return
        
        for chapter in self.chapters:
            # Chercher le dossier existant (format: Ch X - Titre, sans zéro devant)
            folder_pattern = f"Ch {chapter['number']} - *"
            matching_dirs = list(self.output_base_dir.glob(folder_pattern))
            
            if matching_dirs:
                # Utiliser le premier dossier trouvé
                chapter_dir = matching_dirs[0]
                print(f"📁 Dossier trouvé : {chapter_dir}")
            else:
                # Si aucun dossier trouvé, utiliser le nom nettoyé (sans zéro devant)
                folder_name = f"Ch {chapter['number']} - {self.clean_filename(chapter['title'])}"
                chapter_dir = self.output_base_dir / folder_name
                print(f"⚠️  Dossier non trouvé, création de : {chapter_dir}")
                chapter_dir.mkdir(exist_ok=True)
            
            # Nom du fichier LaTeX (format: Chapitre X - Titre.tex)
            filename = f"Chapitre {chapter['number']} - {chapter['title']}.tex"
            filepath = chapter_dir / filename
            
            # Créer le préambule nettoyé (sans page de garde ni sommaire)
            clean_preamble = self.create_clean_preamble()
            
            # Ajouter la commande pour définir le numéro de page de départ
            page_setup = f"\\setcounter{{page}}{{{chapter['start_page']}}}\n\n"
            
            # Créer le contenu complet du fichier
            full_content = clean_preamble + page_setup + chapter['content'] + "\n\\end{document}"
            
            # Écrire le fichier
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(full_content)
            
            print(f"✅ Chapitre {chapter['number']} créé : {filename} dans {chapter_dir.name} (page {chapter['start_page']})")
            
            # Copier les images si le dossier IMG existe
            self.copy_images(chapter_dir)
            
            # Compiler le fichier LaTeX
            self.compile_latex(filepath)
    
    def clean_filename(self, text):
        """Nettoie le texte pour créer un nom de fichier valide"""
        # Remplacer les caractères problématiques
        text = re.sub(r'[<>:"/\\|?*]', '_', text)
        text = re.sub(r'[àáâãäå]', 'a', text)
        text = re.sub(r'[èéêë]', 'e', text)
        text = re.sub(r'[ìíîï]', 'i', text)
        text = re.sub(r'[òóôõö]', 'o', text)
        text = re.sub(r'[ùúûü]', 'u', text)
        text = re.sub(r'[ç]', 'c', text)
        text = re.sub(r'[ñ]', 'n', text)
        text = re.sub(r'\s+', '_', text)
        return text.strip('_')
    
    def copy_images(self, chapter_dir):
        """Copie le dossier IMG s'il existe"""
        img_source = self.main_file_path.parent / "IMG"
        if img_source.exists() and img_source.is_dir():
            img_dest = chapter_dir / "IMG"
            if img_dest.exists():
                shutil.rmtree(img_dest)
            shutil.copytree(img_source, img_dest)
            print(f"   📁 Images copiées vers {img_dest}")
    
    def compile_latex(self, tex_file):
        """Compile le fichier LaTeX en PDF"""
        try:
            # Changer vers le répertoire du fichier pour la compilation
            work_dir = tex_file.parent
            filename = tex_file.name
            
            # Commande de compilation (pdflatex)
            cmd = ['pdflatex', '-interaction=nonstopmode', filename]
            
            # Exécuter la compilation
            result = subprocess.run(
                cmd,
                cwd=work_dir,
                capture_output=True,
                text=True,
                timeout=60
            )
            
            if result.returncode == 0:
                print(f"   ✅ PDF compilé avec succès")
                
                # Nettoyer les fichiers auxiliaires
                self.clean_aux_files(work_dir, tex_file.stem)
            else:
                print(f"   ❌ Erreur de compilation:")
                print(f"   {result.stderr}")
                
        except subprocess.TimeoutExpired:
            print(f"   ⏰ Timeout lors de la compilation")
        except FileNotFoundError:
            print(f"   ❌ pdflatex non trouvé. Assurez-vous qu'une distribution LaTeX est installée.")
        except Exception as e:
            print(f"   ❌ Erreur lors de la compilation: {e}")
    
    def clean_aux_files(self, work_dir, base_name):
        """Supprime les fichiers auxiliaires de LaTeX"""
        aux_extensions = ['.aux', '.log', '.fls', '.fdb_latexmk', '.synctex.gz', '.out', '.toc']
        
        for ext in aux_extensions:
            aux_file = work_dir / f"{base_name}{ext}"
            if aux_file.exists():
                aux_file.unlink()
    
    def process(self):
        """Lance le processus complet de découpage et compilation"""
        print(f"🚀 Début du traitement de {self.main_file_path}")
        print(f"📂 Dossier de sortie : {self.output_base_dir}")
        
        # Vérifier que le fichier source existe
        if not self.main_file_path.exists():
            print(f"❌ Erreur : Le fichier {self.main_file_path} n'existe pas")
            return
        
        # Extraire le contenu
        self.extract_preamble_and_chapters()
        print(f"📖 {len(self.chapters)} chapitres trouvés")
        
        # Créer les fichiers
        self.create_chapter_files()
        
        print("🎉 Traitement terminé!")
        print(f"📁 Tous les chapitres ont été créés dans le dossier {self.output_base_dir}")


def main():
    """Fonction principale"""
    # Configuration
    main_file = "Leçon prof.tex"  # Nom de votre fichier principal
    output_dir = "Chapitres"     # Dossier où se trouvent vos sous-dossiers existants
    
    # Créer et lancer le découpeur
    splitter = LatexChapterSplitter(main_file, output_dir)
    splitter.process()


if __name__ == "__main__":
    main()
