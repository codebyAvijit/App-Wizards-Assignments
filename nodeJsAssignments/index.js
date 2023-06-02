//TASK-2 CODE TO READ THE CONTENTS OF A FILE

const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
});
