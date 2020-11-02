function basicOp(operation, value1, value2){
  let result

  // if(operation === '+'){
  //   result = value1 + value2
  // } else if(operation === '-') {
  //   result = value1 - value2
  // } else if(operation === '*') {
  //   result = value1 * value2
  // } else {
  //   result = value1 / value2
  // }
  // return result

  switch(operation){
    case '+' : return value1 + value2
    case '-' : return value1 - value2
    case '*' : return value1 * value2
    case '/' : return value1 / value2
  }
}