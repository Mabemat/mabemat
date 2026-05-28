#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour diviser le fichier Corrections.tex en fichiers séparés par séance
et générer des PDFs individuels.
"""

import re
import os
import subprocess
import sys
from pathlib import Path

def extract_preamble(latex_content):
    """Extrait le préambule du document LaTeX (jusqu'à \\begin{document})"""
    match = re.search(r'(.*?)\\begin\{document\}', latex_content, re.DOTALL)
    if match:
        return match.group(1) + '\\begin{document}\n\n'
    return ""

def extract_sessions_and_devoirs(latex_content):
    """Extrait séparément les séances classiques et les devoirs"""
    sessions = []
    devoirs = []
    
    # Pattern pour les séances classiques
    session_pattern = r'(\\newpage\s+)?\\begin\{seance\}\{\}\s*%(\d+)(.*?)\\end\{seance\}'
    session_matches = re.findall(session_pattern, latex_content, re.DOTALL)
    
    for match in session_matches:
        session_num = match[1]
        session_content = f"\\begin{{seance}}{{}} %{session_num}{match[2]}\\end{{seance}}"
        
        sessions.append({
            'number': session_num,
            'type': 'seance',
            'content': session_content
        })
    
    # Pattern pour les devoirs (dans les blocs ifthenelse)
    devoir_pattern = r'\\begin\{seanceD\}\{\}\s*%(\d+)(.*?)\\end\{seanceD\}'
    devoir_matches = re.findall(devoir_pattern, latex_content, re.DOTALL)
    
    for match in devoir_matches:
        devoir_num = match[0]
        devoir_content = f"\\begin{{seanceD}}{{}} %{devoir_num}{match[1]}\\end{{seanceD}}"
        
        devoirs.append({
            'number': devoir_num,
            'type': 'devoir',
            'content': devoir_content
        })
    
    return sessions, devoirs

def create_session_file(preamble, item, output_dir):
    """Crée un fichier LaTeX pour une séance ou un devoir"""
    
    if item['type'] == 'seance':
        filename = f"seance_{item['number']}.tex"
        header_title = f"Corrections Automatismes - Séance {item['number']} - Classe de seconde"
    else:  # devoir
        filename = f"devoir_{item['number']}.tex"
        header_title = f"Corrections Devoirs - Séance {item['number']} - Classe de seconde"
    
    filepath = output_dir / filename
    
    # Modifier le préambule pour cet item spécifique
    item_preamble = preamble.replace(
        "\\fancyhead[L]{\\textcolor{Couleur8}{\\textbf{Corrections Automatismes - Classe de seconde}}}",
        f"\\fancyhead[L]{{\\textcolor{{Couleur8}}{{\\textbf{{{header_title}}}}}}}"
    )
    
    # Pour les devoirs, forcer la version professeur
    if item['type'] == 'devoir':
        item_preamble = item_preamble.replace(
            "\\newboolean{prof}\\setboolean{prof}{false}",
            "\\newboolean{prof}\\setboolean{prof}{true}"
        )
        item_preamble = item_preamble.replace(
            "%\\newboolean{prof}\\setboolean{prof}{true}",
            "\\newboolean{prof}\\setboolean{prof}{true}"
        )
    
    # Réinitialiser les compteurs pour avoir la numérotation correcte
    counter_reset = ""
    if item['type'] == 'seance':
        counter_reset = f"\\setcounter{{seancenum}}{{{item['number']}}}\n"
    else:
        counter_reset = f"\\setcounter{{seancenumD}}{{{item['number']}}}\n"
    
    # Contenu complet du fichier
    full_content = (
        item_preamble +
        counter_reset +
        "\\newpage\n" +
        item['content'] +
        '\n\n\\end{document}'
    )
    
    # Écrire le fichier
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(full_content)
    
    return filepath

def compile_latex_to_pdf(tex_file):
    """Compile un fichier LaTeX en PDF"""
    try:
        # Changer vers le répertoire du fichier pour la compilation
        work_dir = tex_file.parent
        tex_filename = tex_file.name
        
        print(f"Compilation de {tex_filename}...")
        
        # Compiler avec pdflatex
        result = subprocess.run(
            ['pdflatex', '-interaction=nonstopmode', tex_filename],
            cwd=work_dir,
            capture_output=True,
            text=True
        )
        
        if result.returncode == 0:
            print(f"✓ {tex_filename} compilé avec succès")
            
            # Nettoyer les fichiers auxiliaires
            aux_extensions = ['.aux', '.log', '.out', '.toc', '.nav', '.snm']
            for ext in aux_extensions:
                aux_file = work_dir / (tex_file.stem + ext)
                if aux_file.exists():
                    aux_file.unlink()
            
            return True
        else:
            print(f"✗ Erreur lors de la compilation de {tex_filename}")
            print("Sortie d'erreur:", result.stderr)
            return False
            
    except FileNotFoundError:
        print("Erreur: pdflatex n'est pas installé ou pas dans le PATH")
        return False
    except Exception as e:
        print(f"Erreur inattendue lors de la compilation: {e}")
        return False

def main():
    # Fichier source
    source_file = Path("Corrections.tex")
    
    if not source_file.exists():
        print(f"Erreur: Le fichier {source_file} n'existe pas")
        sys.exit(1)
    
    # Répertoire de sortie
    output_dir = Path("seances_separees")
    output_dir.mkdir(exist_ok=True)
    
    print(f"Lecture du fichier {source_file}...")
    
    # Lire le fichier source
    with open(source_file, 'r', encoding='utf-8') as f:
        latex_content = f.read()
    
    # Extraire le préambule
    preamble = extract_preamble(latex_content)
    if not preamble:
        print("Erreur: Impossible d'extraire le préambule")
        sys.exit(1)
    
    # Extraire les séances et devoirs séparément
    sessions, devoirs = extract_sessions_and_devoirs(latex_content)
    
    if not sessions and not devoirs:
        print("Erreur: Aucune séance ou devoir trouvé")
        sys.exit(1)
    
    print(f"Trouvé {len(sessions)} séance(s) classique(s)")
    print(f"Trouvé {len(devoirs)} devoir(s)")
    
    # Traiter toutes les séances et devoirs
    all_items = sessions + devoirs
    compiled_count = 0
    
    for item in all_items:
        item_type = "séance" if item['type'] == 'seance' else "devoir"
        print(f"\nTraitement du {item_type} {item['number']}...")
        
        # Créer le fichier LaTeX
        tex_file = create_session_file(preamble, item, output_dir)
        print(f"Fichier créé: {tex_file}")
        
        # Compiler en PDF
        if compile_latex_to_pdf(tex_file):
            compiled_count += 1
    
    print(f"\n=== Résumé ===")
    print(f"Séances classiques: {len(sessions)}")
    print(f"Devoirs: {len(devoirs)}")
    print(f"Total d'items traités: {len(all_items)}")
    print(f"PDFs générés avec succès: {compiled_count}")
    print(f"Fichiers disponibles dans le dossier: {output_dir}")
    
    # Lister les fichiers générés par catégorie
    seance_pdfs = sorted(list(output_dir.glob("seance_*.pdf")))
    devoir_pdfs = sorted(list(output_dir.glob("devoir_*.pdf")))
    
    if seance_pdfs:
        print(f"\nFichiers PDF séances générés:")
        for pdf_file in seance_pdfs:
            print(f"  - {pdf_file.name}")
    
    if devoir_pdfs:
        print(f"\nFichiers PDF devoirs générés:")
        for pdf_file in devoir_pdfs:
            print(f"  - {pdf_file.name}")

if __name__ == "__main__":
    main()
