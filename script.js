// problem: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
var a = 10;
document.write ("Result:<br>The value of is:" + a + "</br>.............................<br>");

++a;
document.write ("<br>The value of ++a is: " + a + "</br>Now the value of a is: 11<br>");

a++;
document.write ("<br>The value of a++ is: " + a + "<br>Now the value of a is: 12<br>");

--a;
document.write ("<br>The value of --a is: " + a + "</br>Now the value of a is: 11<br>");

a--;
document.write ("<br>The value of a-- is: " + a + "<br>Now the value of a is: 10");

// problem:  What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// 1) --a;
// 2) --a - --b; 
// 3) --a - --b + ++b;
// 4) --a - --b + ++b + b--;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

console.log("a: " + a);
console.log("b: " + b);
console.log("result: " + result);

// prblem:  Write a program that takes input a name from user & greet the user.
var enterName = prompt("Enter your name");

alert("Hello " + enterName);




