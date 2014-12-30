import jenkins.util.*;
import jenkins.model.*;
// http://stackoverflow.com/questions/6259202/how-do-i-print-a-groovy-stack-trace
import org.codehaus.groovy.runtime.StackTraceUtils
import groovy.json.JsonSlurper;


def print_err = System.err.&println

def script =  'basic_build_step.groovy'
println "Started script ${script}."

try {
  
def thr = Thread.currentThread() 
def currentBuild = thr?.executable 
def workspace = currentBuild.getModuleRoot().absolutize().toString() 
// 
def environment = currentBuild.getEnvironment()["CHEF_REGION"]

// check if environment
def environment_debug = currentBuild.getEnvironment()["DEBUG"]
def parameter_debug = DEBUG 
  println "Checking the parameters" 
  if (!!environment_debug) {

    println "Running in DEBUG mode(1)." 
  } else {
        println "Environment DEBUG si not set." 
  }
  if (!!parameter_debug) {

    println "Running in DEBUG mode(2)." 
  } else {
        println "Scriptlet parameter DEBUG si not set." 
  }
} catch (MissingPropertyException e) {

  print_err "No such property: currentBuild (ignored)"
  
  }  catch(e) {
  print_err "Exception " +e.toString() 
  
  //  TODO
  //printSanitizedStackTrace()

}
println "Complete script ${script}."
