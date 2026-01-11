@echo off
setlocal enabledelayedexpansion

REM 配置部分
set "BACKUP_URL=https://yuan-shen-dungeon-records.deno.dev/api/download-records"
set "BASE_FILE=records.js"
set "DESTINATION=c:\Users\yy\Desktop\backup"

REM 创建备份目录（如果不存在）
mkdir "%DESTINATION%" 2>nul

REM 格式化当前时间为 YYYY-MM-DD_HH-MM-SS
set "CURRENT_DATE=%date:~0,4%-%date:~5,2%-%date:~8,2%"
set "CURRENT_TIME=%time:~0,2%-%time:~3,2%-%time:~6,2%"

REM 处理时间中的前导空格问题
set "CURRENT_TIME=!CURRENT_TIME: =0!"

REM 生成带时间戳的文件名
set "TIMESTAMPED_FILE=%BASE_FILE%_%CURRENT_DATE%_%CURRENT_TIME%.bak"

REM 下载文件到临时位置
curl -s -o "%TEMP%\%TIMESTAMPED_FILE%" "%BACKUP_URL%"

REM 检查下载是否成功
if %errorlevel% neq 0 (
    echo 下载失败，请检查网络连接或URL是否正确
    pause
    exit /b 1
)

REM 将文件移动到备份目录
move /y "%TEMP%\%TIMESTAMPED_FILE%" "%DESTINATION%\%TIMESTAMPED_FILE%" >nul

REM 检查移动是否成功
if %errorlevel% neq 0 (
    echo 备份文件移动失败
    pause
    exit /b 1
)

echo 备份成功：%DESTINATION%\%TIMESTAMPED_FILE%
pause
