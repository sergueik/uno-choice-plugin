// http://stackoverflow.com/questions/6259202/how-do-i-print-a-groovy-stack-trace
import org.codehaus.groovy.runtime.StackTraceUtils


def print_err = System.err.&println

def script =  'basic_choice_parameter_script.groovy'
print_err "Started script ${script}"


try {
def debug = null
if (binding.variables.get('DEBUG') != null) {
  debug =  binding.variables.get('DEBUG')
}
if (!!debug) {

print_err "Running in DEBUG mode." 
}
  
  
  if (binding.variables.get('LetterSet') != null) {
    print_err "Received 'LetterSet' parameter in the following value: ${binding.variables.get('LetterSet')}" 
} else {
    print_err "Received no 'LetterSet' parameter." 
}


  if (binding.variables.get('RadioButtonInput') != null) {
    print_err "Received 'RadioButtonInput' parameter in the following value: '${binding.variables.get('RadioButtonInput')}'" 
} else {
    print_err "Received no 'RadioButtonInput' parameter." 
}

if (binding.variables.get('Gender') != null) {
  gender = binding.variables.get('Gender')
  if (gender == 'Male')
    return ['Waiter', 'Actor', 'Usher']
  else
    return ['Waitress', 'Actress', 'Usherette']
} else {
  return []
}
} catch(e) {
  print_err "Exception" 
  printSanitizedStackTrace()
}
