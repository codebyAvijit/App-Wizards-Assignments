//TASK 1 CODE TO REPLACE ALL THE VOWELS IN A STRING

function replaceVowels(str) {
  let arr = str.split("");
  //   console.log(arr);
  let temp = [];
  if (str.length <= 0) {
    return "Please Enter a Valid String";
  } else if (str == " ") {
    return temp.join("");
  } else {
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i];
      if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
      ) {
        char = "*";
        temp.push(char);
      } else {
        temp.push(char);
      }
    }
    return temp.join("");
  }
}
let s = "Hello World!!";
console.log(replaceVowels(s));
