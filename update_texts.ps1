$files = Get-ChildItem -Path "C:\Users\talhakts\Desktop\antigravity\parke-sitesi\src\components\sections\*.tsx", "C:\Users\talhakts\Desktop\antigravity\parke-sitesi\src\app\layout.tsx"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # Global replacements for 20 to 40
    $content = $content -replace "20 yılı aşkın", "40 yılı aşkın"
    $content = $content -replace "20 Yıllık", "40 Yıllık"
    $content = $content -replace "20\+", "40+"
    $content = $content -replace "20 yıl", "40 yıl"
    
    if ($file.Name -eq "ServiceAreas.tsx") {
        # Update google maps iframe
        $oldMaps = 'https://www.google.com/maps/embed\?pb=[^"]+Gebze[^"]+'
        $newMaps = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327429115!2d29.04071375!3d40.9825555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba8ad%3A0xd2d24ea0437a7ee2!2sAnadolu%20Yakas%C4%B1%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str'
        $content = $content -replace $oldMaps, $newMaps
    }
    
    if ($file.Name -eq "FAQ.tsx") {
        # Remove the specific FAQ
        $faqToRemove = '(?s)\s*\{\s*question:\s*"İstanbul Anadolu Yakası''nda hangi ilçelere parke döşeme hizmeti veriyorsunuz\?",\s*answer:\s*"[^"]+"\s*\},?'
        $content = $content -replace $faqToRemove, ""
    }
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated "
    }
}
