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

// problem: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var inputNumber = prompt("Enter a number");

if (inputNumber == "") {
    inputNumber = 5;
}

var multiplicationTable = "";

for (var i = 1; i <= 10; i++) {
  multiplicationTable += inputNumber + " x " + i + " = " + (inputNumber * i) + "<br>";
}

document.write("Multiplication Table of " + inputNumber + ":<br>" + multiplicationTable);

// Problem: 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.
// ! (Hint: user table) 

    var subject1 = prompt("Enter the name of first subject");
    var subject2 = prompt("Enter the name of second subject");
    var subject3 = prompt("Enter the name of third subject");

    var totalMarks = 100;
    var subject1Marks = prompt("Enter marks obtained in " + subject1);
    var subject2Marks = prompt("Enter marks obtained in " + subject2);
    var subject3Marks = prompt("Enter marks obtained in " + subject3);
    
    var totalObtainedMarks = parseInt(subject1Marks) + parseInt(subject2Marks) + parseInt(subject3Marks);
    var percentage = (totalObtainedMarks / totalMarks) * 100;
    
    document.write("<table border='1'>");
    document.write("<tr><th>Subject</th><th>Marks Obtained</th><th>Total Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + subject1Marks + "</td><td>" + totalMarks + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + subject2Marks + "</td><td>" + totalMarks + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + subject3Marks + "</td><td>" + totalMarks + "</td></tr>");
    document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
    document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage + "%</td></tr>");
    document.write("</table>");




