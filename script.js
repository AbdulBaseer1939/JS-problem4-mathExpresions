// Problem#1: Declare 3 variables in one statement. 
var firstVariable = 20, secondVariable = 50, thirdVariable = 50;
console.log("First Variable ", firstVariable, " \nSecond Variable ", secondVariable, " \nThird Variable ", thirdVariable );

// // Problem#2: Declare 5 legal & 5 illegal variable names.
// // 5 Legal Variable Names:
// myVariable = 10; //Starts with a letter, followed by letters and numbers.
// _privateVar = "John Doe"; //Starts with an underscore, followed by letters and numbers.
// myFirstVariable = 50;//Uses camelCase convention, common in many languages.
// MY_CONSTANT = true;//Uses uppercase letters and underscores, often for constants.
// counter123 = 100; //Starts with a letter, followed by letters and numbers.

// // 5 Illegal Variable Names:
// 1stVariable= 10; //Starts with a number, which is not allowed.
// my-variable= "John Doe";//Contains a hyphen, which is not allowed in most languages.
// class = "John Doe"; //This is a reserved keyword in many languages.
// my variable = 10;//Contains a space, which is not allowed.
// %discount = 10;//Starts with a special character, which is generally not allowed.

// problem#3: Display this in your browser a)  A heading stating “Rules for naming JS variables”, b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable, c) Variables must begin with a ______, ______ or _____. For example $name, _name or name, d) Variable names are case _________, e) Variable names should not be JS _________.

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>underscores</b> and <b>dollar signs</b>. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a <b>letter</b>, <b>underscore( _ )</b> or <b>dollar sign ($)</b>. For example: $name, _name or name</p>");
document.write("<p>Variable names are case <b>sensitive.</b></p>");
document.write("<p>Variable names should not be JS <b>keywords.</b></p>");





