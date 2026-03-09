# Run this script AFTER installing Git (https://git-scm.com/download/win)
# In PowerShell: right-click push-to-github.ps1 -> Run with PowerShell
# Or in a terminal: cd c:\HR; .\push-to-github.ps1

Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed or not in PATH. Install from https://git-scm.com/download/win then run this script again."
    exit 1
}

$remote = "https://github.com/Mantushiukas/praxis-recruitment.git"

Write-Host "Initializing git..."
git init

Write-Host "Adding files..."
git add .

Write-Host "Committing..."
git commit -m "Initial commit"

Write-Host "Setting branch to main..."
git branch -M main

Write-Host "Adding remote origin..."
git remote add origin $remote 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote set-url origin $remote
}

Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done. Your project is at https://github.com/Mantushiukas/praxis-recruitment"
