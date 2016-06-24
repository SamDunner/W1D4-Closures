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
//loadedDie();  // 4
//loadedDie();  // 6





//Countdown:

var countdownGenerator = function(x) {

  var count = x;

    return function() {
      if (count > 0) {
        return ("T-minus " + count + "...")
      } else if (count === 0) {
        return ("Blast off!")
      } else if (count < 0) {
        return ("Rockets already gone, bub!")
      }
    }
};

var countdown1 = countdownGenerator(-4);
console.log(countdown1(1));
/*
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
*/





