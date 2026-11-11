@echo off
title Smart Scholarship Engine
cd /d "%~dp0"
echo ============================================
echo       SMART SCHOLARSHIP ENGINE
echo ============================================
echo.
where py >nul 2>nul
if %errorlevel%==0 (
    set "PYTHON=py"
) else (
    where python >nul 2>nul
    if errorlevel 1 (
        echo ERROR: Python was not found.
        echo Install Python 3.10+ from https://www.python.org/downloads/
        echo During installation, enable "Add Python to PATH".
        pause
        exit /b 1
    )
    set "PYTHON=python"
)
echo Checking/installing PySide6...
%PYTHON% -m pip install -r requirements.txt
if errorlevel 1 (
    echo.
    echo ERROR: Could not install PySide6.
    echo Check your internet connection, then run this file again.
    pause
    exit /b 1
)
echo.
echo Starting Smart Scholarship Engine...
%PYTHON% smart_scholarship_engine.py
if errorlevel 1 (
    echo.
    echo The app stopped because of an error shown above.
    echo Take a screenshot of this window and send it to ChatGPT.
    pause
)
