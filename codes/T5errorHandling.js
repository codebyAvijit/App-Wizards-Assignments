//task5 error handling

//error related to data type

function isNan(a, b) {
  try {
    if (b === "a") {
      throw new Error(
        "Substraction of two different dataTypes is not possible"
      );
    }
    return a - b;
  } catch (err) {
    console.error(err);
  }
}

// console.log(isNan(10, "a"));

//reference err

function defineValue(a, b) {
  try {
    ans = a + b; //ans is not defined
    throw new Error("ans is not defined");
  } catch (err) {
    console.log(err);
  }
}
let val3 = 10;
let val4 = 1;
console.log(defineValue(val3, val4));


//error related to syntax

function add(a, b) {
  try {
    let ans =
      a + //synatx err
    //   throw new Error("Syntax Err detected");
  } catch (err) {
    console.log(err);
  }
}
let val1 = 10;
let val2 = 1;
// console.log(add(val1, val2));