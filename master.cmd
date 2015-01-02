@echo OFF
pushd %~dp0
set GIT_HOME=C:\Progra~1\GIT
set JENKINS_HOME=%CD:\=/%
set MASTER_HOST=127.0.0.1
set MASTER_PORT=8080
set JAVA_HOME=c:\java\jdk1.6.0_45
set GROOVY_HOME=c:\java\groovy-2.3.2
PATH=%JAVA_HOME%\bin;%PATH%;%GROOVY_HOME%\bin
java.exe -jar %JENKINS_HOME%/jenkins.war
goto :EOF