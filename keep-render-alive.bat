@echo off
setlocal enabledelayedexpansion

REM Set the URLs
set "URL=https://yjwz.onrender.com"
set "BACKUP_URL=https://yjwz.onrender.com/api/download-records"
set "BACKUP_FILE=records.js"

REM Set access interval (14 minutes = 840 seconds)
set "INTERVAL=840"

echo Starting to keep Render app alive and backup records...
echo Visiting %URL% every %INTERVAL% seconds (14 minutes)
echo Backing up records from %BACKUP_URL% to %BACKUP_FILE% every %INTERVAL% seconds
echo Press Ctrl+C to stop the script

:loop
REM Visit the URL to keep Render app alive
curl -s %URL% > nul
if !errorlevel! equ 0 (
    echo [KEEP-ALIVE SUCCESS] %date% %time%
) else (
    echo [KEEP-ALIVE FAILURE] %date% %time%
)

REM Backup records.js
curl -s -o "%BACKUP_FILE%" "%BACKUP_URL%"
if !errorlevel! equ 0 (
    echo [BACKUP SUCCESS] %date% %time% - Records backed up to %BACKUP_FILE%
) else (
    echo [BACKUP FAILURE] %date% %time% - Failed to backup records
)

REM Wait for the specified interval
timeout /t %INTERVAL% /nobreak > nul

goto loop