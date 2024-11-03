const operations = ["+", "-", "/", "*"];

//const index = operations.indexOf('/')
//const shrinkedOperations =  [ ... operations ]
//shrinkedOperations.splice(index,1);

// const shrinkedOperations = [];
// for (el of operations) {
//     if (el !== '/')
//         shrinkedOperations.push(el)
// }

handleUserNumbersInputs();
let response = prompt("Do you want to continue? Enter y/n");
while (response === "y") {
  handleUserNumbersInputs();
  response = prompt("Do you want to continue? Enter y/n");
}
alert("Goodbye");

function handleUserNumbersInputs() {
  const num1 = validateNumber(1);
  const num2 = validateNumber(2);

  const operation =
    num2 === 0
      ? validateOperation(operations.filter((el) => el !== "/"))
      : validateOperation(operations);
  // let operation
  // if (num2 === 0) {
  //     operation = validateOperation(operations.filter(el=>el !== '/'))
  // } else {
  //     operation = validateOperation(operations)
  // }
  const result = eval(`${num1} ${operation} ${num2}`);
  alert(`Result: ${result}`);
}

function validateNumber(counter) {
  let num = +prompt(`Enter number ${counter}`);
  let isNumInt = Number.isInteger(num);
  while (!isNumInt) {
    num = +prompt("Variable should be number, please try again");
    isNumInt = Number.isInteger(num);
  }
  return num;
}

function validateOperation(opsArray) {
  let op = prompt(`Enter math operarion from the list: ${opsArray.join(", ")}`);
  let isValidOperation = opsArray.includes(op);
  while (!isValidOperation) {
    op = prompt("Invalid operation, try again");
    isValidOperation = opsArray.includes(op);
  }
  return op;
}
