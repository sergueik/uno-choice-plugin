@echo OFF
REM Using wget.exe from http://users.ugent.be/~bpuype/wget/
REM TODO Remove files like *.hpi.1
set BASE_URL=http://updates.jenkins-ci.org/latest
set PATH=%PATH%;c:\Users\sergueik\Downloads\

set TITLE=Windows Slaves Plugin
set HPI=windows-slaves.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Token Macro Plugin
set HPI=token-macro.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Scriptler Plugin
set HPI=scriptler.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=SCM API Plugin
set HPI=scm-api.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Run Condition Plugin
set HPI=run-condition.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%
		

set TITLE=Parameterized Trigger plugin
set HPI=parameterized-trigger.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Hudson Groovy builder
set HPI=groovy.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=conditional-buildstep
set HPI=conditional-buildstep.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Dynamic Extended Choice Parameter Plug-In
set HPI=dynamic_extended_choice_parameter.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Environment Injector Plugin
set HPI=envinject.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Git server plugin
set HPI=git-server.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%



set TITLE=Git Client plugin
set HPI=git-client.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%



set TITLE=Git plugin
set HPI=git.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=JUnit Plugin
set HPI=junit.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Extended Choice Parameter Plug-In
set HPI=extended-choice-parameter.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Matrix Project Plugin
set HPI=matrix-project.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Matrix Authorization Strategy Plugin
set HPI=matrix-auth.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=External Monitor Job Type Plugin
set HPI=external-monitor-job.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=SSH Credentials Plugin
set HPI=ssh-credentials.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=SSH Slaves plugin
set HPI=ssh-slaves.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Role-based Authorization Strategy
set HPI=role-strategy.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Credentials Plugin
set HPI=credentials.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=JQuery
set HPI=jquery.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Node and Label parameter plugin
set HPI=nodelabelparameter.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Mask Passwords Plugin
set HPI=mask-passwords.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Promoted Builds ^(Simple^)
set HPI=promoted-builds-simple.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Hudson PowerShell plugin
set HPI=powershell.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Build User Vars Plugin
set HPI=build-user-vars-plugin.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

set TITLE=Copy Artifact Plugin
set HPI=copyartifact.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%


set TITLE=Monitoring external jobs
set HPI=external-monitor-job.hpi
call wget-1.10.2.exe --no-check-certificate %BASE_URL%/%HPI%

goto :EOF


Uno-Choice Plug-in

