function fizz_buzz(numbers) {
    //your code here...
  var output = [];
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        if (num % 15 === 0) {
            output.push("fizzbuzz");
        } else if (num % 3 === 0) {
            output.push("fizz");
        } else if (num % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(num);
        }
    }
    return output.toString();
}

var numbers = [5, 5, 15];
var result = fizz_buzz(numbers);
console.log (result)

module.exports = fizz_buzz;