@echo off
REM ═══════════════════════════════════════════════════════════
REM WEBSITE FOLDER CLEANUP SCRIPT
REM Yeh script sari extra documentation files delete kar dega
REM ═══════════════════════════════════════════════════════════

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  NOOR UL HUDA LABS - FOLDER CLEANUP                    ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo Yeh script sari extra documentation files delete kar dega.
echo Sirf website ki zaruri files rahein gi.
echo.
pause
echo.

REM Delete documentation files
echo Deleting documentation files...
del /F /Q "FINAL_SEO_SUMMARY.md" 2>nul
del /F /Q "PRIVACY_SEO_OPTIMIZATION_REPORT.md" 2>nul
del /F /Q "QUICK_DEPLOYMENT_GUIDE.txt" 2>nul
del /F /Q "SEO_CHECKLIST.md" 2>nul
del /F /Q "SEO_CHECKLIST.txt" 2>nul
del /F /Q "SEO_OPTIMIZATION_COMPLETE.md" 2>nul
del /F /Q "SEO_OPTIMIZATION_SUMMARY.txt" 2>nul
del /F /Q "VERIFICATION_REPORT.txt" 2>nul
del /F /Q "VISUAL_SUMMARY.txt" 2>nul
echo ✓ Documentation files deleted

REM Delete testing files
echo Deleting testing files...
del /F /Q "SEO_TESTING_TOOLS.html" 2>nul
del /F /Q "SEO_VALIDATION_DASHBOARD.html" 2>nul
echo ✓ Testing files deleted

REM Delete old/backup files
echo Deleting old/backup files...
del /F /Q "index_new.html" 2>nul
del /F /Q "download_optimized.html" 2>nul
del /F /Q "replace_index.bat" 2>nul
echo ✓ Backup files deleted

REM Delete old store badge images
echo Deleting old store badge images...
del /F /Q "amazon-store.png.png" 2>nul
del /F /Q "oppo-store.png.jpg" 2>nul
del /F /Q "vivo-store.png.webp" 2>nul
echo ✓ Old images deleted

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  CLEANUP COMPLETE!                                     ║
echo ╚════════════════════════════════════════════════════════╝
echo.
echo Ab apka folder clean hai!
echo Sirf 27 zaruri files hain.
echo.
echo Yeh script khud ko bhi delete kar dega...
del /F /Q "FILE_STRUCTURE_GUIDE.txt" 2>nul
echo.
pause

REM Self-delete this script
(goto) 2>nul & del "%~f0"
