/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a=0, b=0) {
    let sum = a + b;
    return sum
  }
  console.log('The sum of 3 and 7 is', add(3, 7))
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(number) {
    let even = number % 2 === 0
    return even
  }
  console.log('Is 3 even?', isEven(3))
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    let greeting = `Hello, ${name}!`
    return greeting
  }
  console.log('Hello, John!')
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    let isAdult = age >= 18
    return isAdult
  }
  console.log('Is John an adult?', isAnAdult(18))
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    let yearsLeft = 18 - age
    return yearsLeft
  }
  console.log('YearsLeft:', yearsToAdulthood(17))
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age = 0, name = '') {
    let isAdult = age >= 18
    let yearsLeft = 18 - age
      if (isAdult) {
        return `Hello, ${name}!`
      }
      else {
        return `Come back in ${yearsLeft} years ${name}!`
      }
  }
  console.log(admit(13, 'John'))
  