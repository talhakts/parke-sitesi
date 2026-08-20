$files = Get-ChildItem -Path "C:\Users\talhakts\Desktop\antigravity\parke-sitesi\src" -Recurse -Include *.tsx, *.ts

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content
    
    # Global replacements for 20 to 40
    $content = $content -replace "20 yılı aşkın", "40 yılı aşkın"
    $content = $content -replace "20 Yıllık", "40 Yıllık"
    $content = $content -replace "20\+", "40+"
    $content = $content -replace "20 yıl", "40 yıl"
    $content = $content -replace "20 yılı", "40 yılı"
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated "
    }
}
