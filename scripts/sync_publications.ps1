param(
  [string]$Message = "Update publications",
  [string]$Proxy = "http://127.0.0.1:10808"
)

$ErrorActionPreference = "Stop"
$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $RepoRoot

function Invoke-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$Args)
  git -c "http.proxy=$Proxy" -c "https.proxy=$Proxy" @Args
}

Write-Host "Pulling latest changes from GitHub..."
Invoke-Git pull --ff-only origin main

Write-Host "Building publications page from content/publications..."
python scripts\build_publications.py

$changes = git status --short
if (-not $changes) {
  Write-Host "No publication changes to sync."
  exit 0
}

Write-Host "Changed files:"
$changes

git add content\publications _pages\includes\pub.md scripts\build_publications.py scripts\sync_publications.ps1 docs\publications-workflow.md
git commit -m $Message

Write-Host "Pushing changes to GitHub..."
Invoke-Git push origin main

Write-Host "Done."
