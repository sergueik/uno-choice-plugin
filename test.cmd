@echo OFF
REM 
SETLOCAL 
REM this is for packaging
REM  currently hpi:hpi does not put the javasript file into the jar 
REM call mvn.bat -Dmaven.test.skip=true -DskipTests=true clean compile hpi:run

PATH=%PATH%;C:\TOOLS\phantomjs
pushd  %~dp0
pushd src\test\js\lib
set TEST_SCRIPT_PATH=%CD:\=/%
popd
popd
echo phantomjs.exe runner.js file:///%TEST_SCRIPT_PATH%/tests-local.html
call phantomjs.exe runner.js file:///%TEST_SCRIPT_PATH%/tests-local.html
ENDLOCAL
goto :EOF


