@echo off
setlocal enabledelayedexpansion

REM Set the URL to visit
set "URL=https://yjwz.onrender.com"

REM Set access interval (14 minutes = 840 seconds)
set "INTERVAL=840"

echo Starting to keep Render app alive...
echo Visiting %URL% every %INTERVAL% seconds (14 minutes)
echo Press Ctrl+C to stop the script

:loop
REM Visit the URL using curl, hide output
curl -s %URL% > nul

REM Check if curl executed successfully
if !errorlevel! equ 0 (
    echo [SUCCESS] %date% %time%
) else (
    echo [FAILURE] %date% %time%
)

REM Wait for the specified interval
timeout /t %INTERVAL% /nobreak > nul

goto loop