// iterating through array and uppercasing all the values
// const beatles = ["paul", "john", "ringo", "george"];
// beatles.forEach((beatle) => {
//   console.log(beatle.toUpperCase());
// })
// console.log(typeof beatles);

// little square value function that adds the value to an array
const numBox = [];
const square = (x) => {
  let num = x * x;
    if (num >= 25) {
      numBox.push(num);
  }
}
square(69);
square(42);
console.log(numBox);
