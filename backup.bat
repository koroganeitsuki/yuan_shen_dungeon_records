@echo off
setlocal enabledelayedexpansion

REM Script: backup-records-with-timestamp.bat
REM Purpose: Backup records.js from Render API with timestamp and keep Render app alive
REM Author: Generated on %date% %time%

REM Configuration Section
set "RENDER_URL=https://yjwz.onrender.com"
set "BACKUP_API_URL=https://yjwz.onrender.com/api/download-records"
set "BASE_FILENAME=records.js"
set "BACKUP_INTERVAL=840"  REM 14 minutes = 840 seconds
set "BACKUP_DIRECTORY=."   REM Current directory, change if needed

REM Initialize script
cls
echo ================================================
echo     Records Backup with Timestamp Script
 echo ================================================
echo Keeping Render app alive at: %RENDER_URL%
echo Backing up records from: %BACKUP_API_URL%
echo Backup interval: %BACKUP_INTERVAL% seconds (14 minutes)
echo Backup directory: %BACKUP_DIRECTORY%
echo Timestamp format: YYYY-MM-DD_HH-MM-SS

echo. 
echo Press Ctrl+C to stop the script

echo ================================================
echo.

:backup_loop
    REM Step 1: Keep Render app alive
    echo [INFO] %date% %time% - Checking Render app status...
    curl -s "%RENDER_URL%" > nul
    if !errorlevel! equ 0 (
        echo [SUCCESS] %date% %time% - Render app is alive
    ) else (
        echo [WARNING] %date% %time% - Failed to reach Render app
    )

    REM Step 2: Generate timestamp for backup filename
    REM Get date components (format depends on system locale: YYYY-MM-DD assumed)
    set "CURRENT_DATE=%date:~0,4%-%date:~5,2%-%date:~8,2%"
    
    REM Get time components (format: HH:MM:SS.CC)
    set "HOUR=%time:~0,2%"
    set "MINUTE=%time:~3,2%"
    set "SECOND=%time:~6,2%"
    
    REM Fix leading space issue for single-digit hours (0-9)
    if "%HOUR:~0,1%" equ " " (
        set "HOUR=0%HOUR:~1,1%"
    )
    
    REM Create formatted timestamp
    set "TIMESTAMP=%CURRENT_DATE%_%HOUR%-%MINUTE%-%SECOND%"
    
    REM Create full backup filename with timestamp
    set "BACKUP_FILENAME=%BASE_FILENAME%_%TIMESTAMP%.bak"
    set "FULL_BACKUP_PATH=%BACKUP_DIRECTORY%\%BACKUP_FILENAME%"

    REM Step 3: Perform backup with timestamp
    echo [INFO] %date% %time% - Starting backup to %BACKUP_FILENAME%...
    curl -s -o "%FULL_BACKUP_PATH%" "%BACKUP_API_URL%"
    
    if !errorlevel! equ 0 (
        echo [INFO] %date% %time% - Download completed: %BACKUP_FILENAME%
        
        REM Step 4: Compare file sizes to check if records have changed
        set "DOWNLOADED_SIZE=0"
        set "CURRENT_SIZE=0"
        
        REM Get size of downloaded file
        for %%I in ("%FULL_BACKUP_PATH%") do set "DOWNLOADED_SIZE=%%~zI"
        
        REM Get size of current records.js file if it exists
        if exist "%BACKUP_DIRECTORY%\%BASE_FILENAME%" (
            for %%I in ("%BACKUP_DIRECTORY%\%BASE_FILENAME%") do set "CURRENT_SIZE=%%~zI"
        )
        
        REM Only save and update if sizes are different
        if "!DOWNLOADED_SIZE!" neq "!CURRENT_SIZE!" (
            echo [SUCCESS] %date% %time% - Records have changed! Backup saved: %BACKUP_FILENAME%
            
            REM Step 5: Update the main records.js file
            copy /Y "%FULL_BACKUP_PATH%" "%BACKUP_DIRECTORY%\%BASE_FILENAME%" > nul
            if !errorlevel! equ 0 (
                echo [SUCCESS] %date% %time% - Updated main %BASE_FILENAME% file
            ) else (
                echo [WARNING] %date% %time% - Failed to update main %BASE_FILENAME% file
            )
            
        ) else (
            echo [INFO] %date% %time% - Records have not changed. Backup skipped.
            
            REM Delete the downloaded file since it's identical to current one
            del /Q "%FULL_BACKUP_PATH%" > nul
        )
        
    ) else (
        echo [ERROR] %date% %time% - Backup failed! Check network connection or API status
    )

    REM Step 5: Wait for next backup cycle
    echo [INFO] %date% %time% - Waiting %BACKUP_INTERVAL% seconds for next backup...
    echo.
    timeout /t %BACKUP_INTERVAL% /nobreak > nul

    goto backup_loop

:cleanup
    endlocal
    exit /b 0