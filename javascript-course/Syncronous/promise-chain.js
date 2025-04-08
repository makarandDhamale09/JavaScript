function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1");
      resolve("Success");
    }, 4000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching data1...");

//Using .then to fetch the promise one after another similar thing was done using the callback
//but this code is much more easier to read.
//This is called as promise chaining

// asyncFun1().then((res) => {
//   console.log("Fetching data2...");
//   asyncFun2().then((res) => {});
// });

//this ca nalso be written in a better way
asyncFun1()
  .then((res) => {
    return asyncFun2();
  })
  .then((res) => {
    console.log(res);
  });
