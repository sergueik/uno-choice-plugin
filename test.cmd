@echo OFF
REM 

call mvn.bat -Dmaven.test.skip=true -DskipTests=true clean compile hpi:run

goto :EOF


