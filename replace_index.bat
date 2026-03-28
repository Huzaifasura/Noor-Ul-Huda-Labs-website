@echo off
REM Backup original file
copy /Y "index.html" "index_backup.html"

REM Replace with new SEO-optimized version
copy /Y "index_new.html" "index.html"

REM Delete temporary file
del "index_new.html"

echo File replacement complete!
echo Original backed up as index_backup.html
pause
