const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  
  function simpleCalculate(a, b, operation) {
    return operation(a, b);
  }
  
const selectedOperation = "multiply";
console.log(simpleCalculate(6, 3, operations[selectedOperation])); // 18
console.log(simpleCalculate(10, 5, operations["add"]));      // 15
console.log(simpleCalculate(10, 5, operations["subtract"])); // 5
console.log(simpleCalculate(10, 5, operations["divide"]));   // 2
  
