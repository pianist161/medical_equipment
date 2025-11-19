#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для скачивания всех изображений продуктов с сайта
"""

import sys
import os
import urllib.request
import json
from pathlib import Path

if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

try:
    import requests
    from bs4 import BeautifulSoup
    HAS_LIBS = True
except ImportError:
    os.system(f"{sys.executable} -m pip install requests beautifulsoup4 --quiet")
    try:
        import requests
        from bs4 import BeautifulSoup
        HAS_LIBS = True
    except:
        HAS_LIBS = False

# Прямые ссылки на страницы продуктов из веб-поиска
PRODUCT_URLS = {
    1: "https://www.qxw18.com/cp/NTcnLlNgJj.html",  # 经颅磁刺激仪
    10: "https://www.qxw18.com/cp/XMSZmAcpXB.html",  # 中频电疗仪
}

# Базовый URL для поиска
BASE_URL = "https://c71541.qxw18.com/"

def download_image(url, filepath):
    """Скачивает изображение"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        return False

def extract_images_from_page(url):
    """Извлекает все изображения со страницы"""
    if not HAS_LIBS:
        return []
    
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=15)
        response.encoding = 'utf-8'
        soup = BeautifulSoup(response.text, 'html.parser')
        
        images = []
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src') or img.get('data-original')
            if src:
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    base = '/'.join(url.split('/')[:3])
                    src = base + src
                elif not src.startswith('http'):
                    continue
                
                # Пропускаем маленькие изображения и иконки
                if any(x in src.lower() for x in ['logo', 'icon', 'avatar', 'thumb', 'small', 'btn']):
                    continue
                
                images.append(src)
        
        return list(set(images))
    except:
        return []

def main():
    print("=" * 80)
    print("СКАЧИВАНИЕ ИЗОБРАЖЕНИЙ ПРОДУКТОВ")
    print("=" * 80)
    print()
    
    images_dir = Path("public/images/service")
    images_dir.mkdir(parents=True, exist_ok=True)
    
    services_file = Path("public/fakedata/services.json")
    if not services_file.exists():
        print(f"Файл {services_file} не найден!")
        return
    
    with open(services_file, 'r', encoding='utf-8') as f:
        services = json.load(f)
    
    downloaded = {}
    
    for service in services:
        service_id = service.get('id')
        service_title = service.get('title', '')
        
        print(f"📦 Товар {service_id}: {service_title}")
        
        # Пробуем прямую ссылку
        if service_id in PRODUCT_URLS:
            url = PRODUCT_URLS[service_id]
            print(f"   🔗 {url}")
            images = extract_images_from_page(url)
            if images:
                img_url = images[0]
                img_filename = f"service-{service_id}.webp"
                img_path = images_dir / img_filename
                
                if download_image(img_url, img_path):
                    print(f"   ✓ Скачано: {img_filename}")
                    downloaded[service_id] = f"/images/service/{img_filename}"
                else:
                    print(f"   ✗ Ошибка скачивания")
            else:
                print(f"   ⚠ Изображения не найдены")
        else:
            print(f"   ⚠ Нет прямой ссылки - нужно скачать вручную")
            print(f"   💡 См. инструкцию в IMAGE_DOWNLOAD_INSTRUCTIONS.md")
        
        print()
    
    print("=" * 80)
    print(f"Скачано: {len(downloaded)} из {len(services)}")
    if downloaded:
        print("\nСкачанные файлы:")
        for sid, path in downloaded.items():
            print(f"  service-{sid}.webp -> {path}")
    print("=" * 80)

if __name__ == "__main__":
    main()

