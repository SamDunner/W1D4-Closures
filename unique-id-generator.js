/* example

var run = (function () {
  var count = 0;

  return function () {
    count += 1;
    console.log("This is the " + count + "th time I've been called")
  }
})();

run()

*/


//Unique ID Generator:

var id = (function() {
  var count = -1;

  return function () {
    count += 1;

    return count;
  }
})();

console.log(id()); // 0
id(); // 1
id(); // 2
id(); // 3


//Loaded Die:


// var normalDie = function() {
//   return Math.floor(1 + Math.random() * 6);
// }
var dieValues = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
var loadedDie = (function() {
  var index = dieValues[index];
    dieValues.forEach(function(index) {
      console.log(index);
  })
});
loadedDie();  // 5
loadedDie();  // 4
loadedDie();  // 6

