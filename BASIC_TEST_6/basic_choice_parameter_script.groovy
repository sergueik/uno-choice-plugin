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

  def input = 0
  if (binding.variables.get('RadioButtonInput') != null) {
    input = binding.variables.get('RadioButtonInput')
    print_err "Received 'RadioButtonInput' parameter in the following value: '${input}'" 

} else {
    print_err "Received no 'RadioButtonInput' parameter." 
}

if (binding.variables.get('Gender') != null) {
  gender = binding.variables.get('Gender')
  def last_value = ''
  if (gender == 'Male') {
    last_value = "Usher ${input}"
    print_err "last_value = '${last_value}'"
    return ['Waiter', 'Actor', last_value.toString() ]
  }
  else {
    last_value = "Girlfriend ${input}"
    print_err "last_value = '${last_value}'"
    return ['Waitress', 'Actress', last_value.toString()]
} 
} else {
  return []
}
} catch(e) {
  print_err "Exception" 
  printSanitizedStackTrace()
}
