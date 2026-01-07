#!/usr/bin/env python3
"""
Build script for Polytronix website.
Combines partials (header/footer) with page content to generate final HTML files.

Usage: python build.py

This script reads HTML templates from the templates/ directory, 
inserts shared header and footer partials, and outputs the final 
HTML files to the root directory.
"""

import os
import re
import shutil

PARTIALS_DIR = 'partials'
TEMPLATES_DIR = 'templates'
OUTPUT_DIR = '.'

STATIC_DIRS = ['css', 'assets']
STATIC_FILES = ['_redirects', '_headers', 'sitemap.xml', 'robots.txt']

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def get_partials():
    """Load all partials from the partials directory."""
    partials = {}
    for filename in os.listdir(PARTIALS_DIR):
        if filename.endswith('.html'):
            name = filename.replace('.html', '')
            partials[name] = read_file(os.path.join(PARTIALS_DIR, filename))
    return partials

def find_templates():
    """Find all HTML templates in the templates directory."""
    templates = []
    for root, dirs, files in os.walk(TEMPLATES_DIR):
        for f in files:
            if f.endswith('.html'):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, TEMPLATES_DIR)
                templates.append(rel_path)
    return templates

def process_template(template_content, partials):
    """Replace partial placeholders with actual content."""
    result = template_content
    result = result.replace('{{HEADER}}', partials.get('header', ''))
    result = result.replace('{{FOOTER}}', partials.get('footer', ''))
    return result

def build():
    """Build all pages from templates."""
    print("Building Polytronix website...")
    
    partials = get_partials()
    print(f"Loaded partials: {list(partials.keys())}")
    
    templates = find_templates()
    print(f"Found {len(templates)} templates")
    
    for template_path in templates:
        template_full = os.path.join(TEMPLATES_DIR, template_path)
        output_full = os.path.join(OUTPUT_DIR, template_path)
        
        template_content = read_file(template_full)
        final_content = process_template(template_content, partials)
        
        write_file(output_full, final_content)
        print(f"  Built: {template_path}")
    
    print(f"\nBuild complete! {len(templates)} pages generated.")

if __name__ == '__main__':
    build()
