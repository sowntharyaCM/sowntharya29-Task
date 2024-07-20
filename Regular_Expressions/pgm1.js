function is_valid_variable(variable) {
    // Regular expression to match valid JavaScript variable names
    const regex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    
    return regex.test(variable);
  }
  
  // Test cases
  console.log(is_valid_variable('first_name'));    // true
  console.log(is_valid_variable('first-name'));    // false
  console.log(is_valid_variable('1first_name'));   // false
  console.log(is_valid_variable('firstname'));     // true
  console.log(is_valid_variable('_variable'));     // true
  console.log(is_valid_variable('$variable'));     // true
  console.log(is_valid_variable(''));              // false
  console.log(is_valid_variable('123'));           // false
  