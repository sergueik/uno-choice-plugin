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

goto :EOF

Ant Plugin
This plugin adds Apache Ant support to Jenkins.
1.2			
	

	
Credentials Plugin
This plugin allows you to store credentials in Jenkins.
1.18			
	
CVS Plugin
Integrates Jenkins with CVS version control system using a modified version of the Netbeans cvsclient.
2.11			
	
	
Javadoc Plugin
This plugin adds Javadoc support to Jenkins.
1.1			
	
LDAP Plugin
Security realm based on LDAP authentication.
1.6			
	
Mailer
This plugin allows you to configure email notifications. This is a break-out of the original core based email component.
1.11			
			
Maven Project Plugin
Jenkins plugin for building Maven 2/3 jobs via a special project type.
2.7.1			
	
OWASP Markup Formatter Plugin
Uses the OWASP Java HTML Sanitizer to allow safe-seeming HTML markup to be entered in project descriptions and the like.
1.1			
	
PAM Authentication Plugin
Adds Unix Pluggable Authentication Module (PAM) support to Jenkins.
1.1			

	
	
Subversion Plugin
This plugin adds the Subversion support (via SVNKit) to Jenkins.
1.54			
	

	
Translation Assistance Plugin
This plugin adds an additional dialog box in every page, which enables people to contribute localizations for the messages they are seeing in the current page.
1.10			
	
Uno-Choice Plug-in
This plug-in provides additional parameter types for jobs, that allow you to cascade changes and render images or other HTML elements instead of the traditional parameter.
0.24-SNAPSHOT (private-01/20/2015 19:37-sergueik)			


