// document.write("<h1>Chapter 1</h2><br>");

// document.write("<p>1. Write a script to greet your website visitor using JS alert box.</p><br>");
// alert("Welcome to my website");

// document.write("<p>2. Write a script to display following message on your web page:</p><br>");
// alert("Error! Please enter a valid password.");

// document.write("<p>3. Write a script to display following message on your web page: (Hint : Use line break)</p><br>");
// alert("Welcome to JS Land...\nHappy Coding!");

// document.write("<p>4. Write a script to display following messages in sequence:</p><br>");
// alert("Welcome to JS Land");
// alert("Happy Coding!");

// document.write("<p>5. Generate the following message through browser’s developer console:</p><br>");
// console.log("Hello... I can run JS through my web browser's console");

// document.write("<h1>Chapter 2</h2><br>");

// document.write("<p>1. Declare a variable called username.</p><br>");
// var username;

// document.write("<p>2. Declare a variable called myName & assign to it a string that represents your Full Name.</p><br>");
// var myName = "Faizan Ali Bugti";

// document.write("<p>3. Write script to: <br> a) Declare a JS variable, titled message. <br> b) Assign “Hello World” to variable message <br> c) Display the message in alert box.</p><br>");
// var message;
// message = "Hello World";
// alert(message);

// document.write("<p>4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.</p><br>");
// var name = "John Doe";
// var age = "15 years old";
// var course = "Certified  Mobile Application Developer"

// alert(name);
// alert(age);
// alert(course);

// document.write("<p>5. Write a script to display the following alert using one JS variable:</p><br>");
// var message = "PIZZA";
// alert(message + "\n" + message.slice(0, 4) + "\n" + message.slice(0, 3) + "\n" + message.slice(0, 2) + "\n" + message.slice(0, 1));

// document.write("<p>6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)</p><br>");
// var email = "faizanalibugti@outlook.com"
// alert("My email address is " + email);

// document.write("<p>7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:</p><br>");
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// document.write("<p>8. Write a script to display this in browser through JS</p><br>");
// var html = "Yah! I can write HTML content through JavaScript";
// document.write(html + "<br>");

// document.write("<p>9. Store following string in a variable and show in alert and browser through JS</p><br>");
// var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(string);

// document.write("<h1>Chapter 3</h2><br>");

// document.write("<p>1. Declare a variable called age & assign to it your age. Show your age in an alert box.</p><br>");
// var age = 23;
// alert("I am " + age + " years old");

// document.write("<p>2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.</p><br>");

// var n = localStorage.getItem('on_load_counter');
// if (n === null) {
//     n = 0;
// }
// n++;
// localStorage.setItem("on_load_counter", n);
// nums = n.toString().split('').map(Number);
// for (var i of nums) {
//     alert("You have visited this site " + n + " times")
// }

// document.write("<p>3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:</p><br>");
// var birthYear = 1996;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of the declared variable is number" + "<br>");

// document.write("<p>4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: <br> a. Visitor’s name <br> b. Product title <br> c. Quantity i.e. how many products a visitor wants to order <br> Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store </p>")

// var visitorname = "John Doe";
// var product = "T-shirt";
// var quantity = 5;
// document.write("<br>" + visitorname + " ordered " + quantity + " " + product + "(s) on XYZ Clothing store <br>");

// document.write("<h1>Chapter 4</h2><br>");

// document.write("<p>1. Declare 3 variables in one statement.</p><br>");
// var column = 0, row = 0, index = 0;

// document.write("<p>2. Declare 5 legal & 5 illegal variable names. </p><br>");
// // var name, $name, _name, $age, age;
// // var 1name, 3, alert, 4age;

// document.write("<p>3. Display this in your browser <br> a)  A heading stating “Rules for naming JS variables” <br> b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable <br> c) Variables must begin with a ______, ______ or _____.For example $name, _name or name <br> d) Variable names are case _________ <br> e) Variable names should not be JS _________ </p > <br>");
// document.write("<h1>Rules for naming JS variables<br></h1><p>Variable names can only contain numbes, $ and _. For example : $my_1stVariable <br> Variables must begin with a letter, $ or _. For example:  $name, _name or name<br>Variable names are case sensitive <br> Variable names should not be JS keywords<br></p>")

// document.write("<h1>Chapter 5</h2><br>");

// document.write("<p>1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.</p><br>");
// document.write("<h1>Addition</h1>")
// alert("Addition");
// var x = Number(prompt("Input value of x: "));
// var y = Number(prompt("Input value of y: "));
// var ans = x + y;
// document.write("Sum of " + x + " and " + y + " is " + ans);
// document.write("<h1>Subtraction</h1>")
// alert("Subtraction");
// var x = Number(prompt("Input value of x: "));
// var y = Number(prompt("Input value of y: "));
// var ans = x - y;
// document.write("Subtraction of " + x + " and " + y + " is " + ans);
// document.write("<h1>Multiplication</h1>")
// alert("Multiplication");
// var x = Number(prompt("Input value of x: "));
// var y = Number(prompt("Input value of y: "));
// var ans = x * y;
// document.write("Product of " + x + " and " + y + " is " + ans);
// document.write("<h1>Modulus</h1>")
// alert("Modulus");
// var x = Number(prompt("Input value of x: "));
// var y = Number(prompt("Input value of y: "));
// var ans = x % y;
// document.write("Modulus of " + x + " and " + y + " is " + ans);

// document.write("<p>3. Do the following using JS Mathematic Expressions <br> a.Declare a variable. <br> b.Show the value of variable in your browser like “Value after variable declaration is: ??”.<br>c. Initialize the variable with some number.<br>d. Show the value of variable in your browser like “Initial value: 5”.<br>e. Increment the variable.<br>f. Show the value of variable in your browser like “Value after increment is: 6”.<br>g. Add 7 to the variable.<br>h. Show the value of variable in your browser like “Value after addition is: 13”.<br>i. Decrement the variable.<br>j. Show the value of variable in your browser like “Value after decrement is: 12”.<br>k. Show the remainder after dividing the variable’s value by 3.<br>l. Output : “The remainder is : 0”.</p><br>");
// var a;
// document.write("Value after declaration is " + a + "<br>");
// a = 5;
// document.write("Initial value: " + a + "<br>");
// a = ++a;
// document.write("Value after increment is: " + a + "<br>");
// a = a + 7;
// document.write("Value after addition is: " + a + "<br>");
// a = --a;
// document.write("Value after decrement is: " + a + "<br>");
// a = a / 3;
// document.write("The remainder is: " + a + "<br>");

// document.write("<p>4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:</p><br>");
// document.write("<h1>Movie Tickets</h1><br>")
// var ticketPrice = 600;
// var cost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a moive is: " + cost + " PKR" + "<br>");

// document.write("<p>5. Write a script to display multiplication table of any number in your browser</p><br>");
// document.write("<h1>Multiplication Table</h1><br>")
// var display;
// for (i = 1; i <= 10; i++) {
//     var multiplier = 4;
//     var result = i * 4;
//     display = multiplier + " * " + i + " = " + result + "<br>";
//     document.write(display);
// }

// document.write("<p>6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. <br>a.  Store a Celsius temperature into a variable. <br>b. Convert it to Fahrenheit & output “NNoC is NNoF”. <br>c. Now store a Fahrenheit temperature into a variable. <br>d. Convert it to Celsius & output “NNoF is NNoC”.</p><br>");
// document.write("<h1>Temperature Conversion</h1>")
// var celsiusTemp = 25;
// farhenheit = (celsiusTemp - 9 / 5) + 32;
// document.write(celsiusTemp + "◦C is " + farhenheit + "◦F" + "<br>");
// var farhenheit = 70;
// celsiusTemp = (frameElement - 32) * 5 / 9;
// document.write(farhenheit + "◦F is " + celsiusTemp + "◦C" + "<br>");

// document.write("<p>7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables<br>a. Price of item 1 <br>b. Price of item 2 <br>c. Ordered quantity of item 1 <br>d. Ordered Quantity of item 2 <br>e. Shipping charges <br>Compute the total cost & show the receipt in your browser.</p><br>");
// document.write("<h1>Shopping Cart</h1>")
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 100;
// var total = (priceItem1 * quantity1) + (priceItem2 * quantity2);
// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is" + quantity1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of item 2 is" + quantity2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br>");
// document.write("Total cost of your order is " + total + "<br>");

// document.write("<p>8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser</p><br>");
// document.write("<h1>Marks Sheet</h1>")
// var totalMarks = 980;
// var marksObtained = 804;
// percentage = (marksObtained / totalMarks) * 100;
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "<br>");

// document.write("<p>9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)</p><br>");
// var dollars = 10;
// var riyals = 25;
// pkr = (dollars * 104.80) + (riyals * 28);
// document.write("Total cureency in PKR: " + pkr + "<br>");

// document.write("<p>10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression</p><br>");
// var x = 10;
// ans = ((x + 5) * 10) / 2;
// document.write("Result of arithmetic operation is: " + ans + "<br>");

// document.write("<p>11. The Age Calculator: Forgot how old someone is? Calculate it! <br>a. Store the current year in a variable. b. Store their birth year in a variable. <br>c. Calculate their 2 possible ages based on the stored values. <br>Output them to the screen like so: “They are either NN or NN years old”.</p><br>");
// document.write("<h1>Age Calculator</h1>")
// var currentYear = 2020;
// var birthYear = 1996;
// age = currentYear - birthYear;
// document.write("<br>" + "Current year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>")
// document.write("Your age is : " + age + "<br>");

// document.write("<p>12. The Geometrizer: Calculate properties of a circle. <br>a. Store a radius into a variable. <br>b. Calculate the circumference based on the radius, and output “The circumference is NN”. <br>(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) </p><br>");
// document.write("<h1>The Geometrizer</h1>")
// var radius = 20;
// const pi = 3.142;
// circumference = 2 * pi * radius;
// document.write("The circumference is : " + circumference + "<br>");
// area = pi * radius * radius;
// document.write("The area is: " + area + "<br>");

// document.write("<p>13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. <br>Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.</p><br>");
// document.write("<h1>The Lifetime Supply Calculator</h1>")
// var favoriteSnack = "Chocolates";
// var currentAge = 23;
// var maximumAge = 70;
// var amountDay = 3;
// total = (maximumAge - currentAge) * (3 * 365);
// document.write("Favourite snack : " + favoriteSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Maximum age: " + maximumAge + "<br>");
// document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe age of " + maximumAge + "<br>");

// document.write("<h1>Chapters 6 - 9</h2><br>");

// document.write("<p>1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:</p><br>");
// var a = 10;
// document.write("Result: <br> The value of a is : " + a + "<br>");
// document.write("----------------------------------------------------------------------- <br>")
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a++ is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>")


// document.write("<p>2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; <br> Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;</p><br>");
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("Result is: " + result + "<br><br>");

// document.write("<p>3. Write a program that takes input a name from user & greet the user. </p><br>");
// var name = prompt("Enter your name: ");
// alert("Greetings " + name);

// document.write("<p>4. Question 4 is missing </p><br>");


// document.write("<p>5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.</p><br>");
// var display;
// var multiplier = Number(prompt("Enter a number: "));
// if (multiplier == 0) {
//     multiplier = 5;
//     for (i = 1; i <= 10; i++) {
//         var result = i * multiplier;
//         display = multiplier + " * " + i + " = " + result + "<br>";
//         document.write(display);
//     }
// } else {
//     for (i = 1; i <= 10; i++) {
//         var result = i * multiplier;
//         display = multiplier + " * " + i + " = " + result + "<br>";
//         document.write(display);
//     }
// }

// document.write("<p>6. Take <br>a) Take three subjects name from user and store them in 3 different variables. <br>b) Total marks for each subject is 100, store it in another variable. <br>c) Take obtained marks for first subject from user and stored it in different variable.<br>d) Take obtained marks for remaining 2 subjects from user and store them in variables. <br>e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)</p><br>");
// var subject1 = prompt("Enter Subject 1: ");
// var subject2 = prompt("Enter Subject 2: ");
// var subject3 = prompt("Enter Subject 3: ");

// var totalMarks = 100;

// var obtained1 = prompt("Obtained Marks in " + subject1);

// var obtained2 = prompt("Obtained Marks in " + subject2);
// var obtained3 = prompt("Obtained Marks in " + subject3);

// var percentage1 = (obtained1 / totalMarks) * 100;
// var percentage2 = (obtained2 / totalMarks) * 100;
// var percentage3 = (obtained3 / totalMarks) * 100;

// document.write("<table>< br ><tr><td><b>Subject</b> </td><td><b>Total Marks</b> </td><td><b>Obtained Marks</b> </td><td><b>Percentage</b> </td></tr><tr><td><script>document.write(subject1)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained1)</script></td><td><script>document.write(percentage1 = " % ")</script></td></tr><tr><td><script>document.write(subject2)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained2)</script></td><td><script>document.write(percentage2 + " % ")</script></td>/tr><tr><td><script>document.write(subject3)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained3)</script></td><td><script>document.write(percentage3 + " % ")</script></td></tr><tr><td></td><td><script>document.write(totalMarks*3)</script></td><td><script>document.write(obtained1 + obtained2 + obtained3)</script></td><td><script>document.write((percentage1 + percentage2 + percentage3) / 3 + " % ")</script></td></tr></table >")

// document.write("<p>7. Question is missing</p><br>");

// document.write("<h1>Chapters 9-11</h2><br>");

// document.write("<p>1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”</p><br>");
// var city = prompt("Enter your city: ");
// if (city == "Karachi") {
//     alert("Welcome to city of lights");
// }

// document.write("<p>2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.</p><br>");
// var gender = prompt("Enter your gender: ");
// if (gender == "Male") {
//     alert("Good Morning, Sir")
// }
// else if (gender == "Female") {
//     alert("Good Mornign, Ma'am")
// }

// document.write("<p>3. Write a program to take input color of road traffic signal from the user & show the message according to this table</p><br>");
// var signalColor = prompt("Emter the color of the traffic signal: ");
// if (signalColor == "Red") {
//     alert("Must stop");
// }
// else if (signalColor == "Yellow") {
//     alert("Ready to move");
// }
// else if (signalColor == "Green") {
//     alert("Move now")
// }

// document.write("<p>4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”</p><br>");
// var currentFuel = Number(prompt("Remaining fuel in liters"));
// if (currentFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// document.write("<p>5. Run this script, & check whether alert message would be displayed or not. Record the outputs.</p><br>");
// // a
// var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }

// // b
// var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }

// // c
// var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }

// // d
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }

// // e
// if (true) { alert("True"); } if (false) { alert("False"); }

// // f
// if ("car" < "cat") { alert("car is smaller than cat"); }

// document.write("<p>6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:</p><br>");
// document.write("<h1>Marks Sheet</h1>")
// var English = prompt("English Number")
// var Urdu = prompt("Urdu Number")
// var Mathematics = prompt("Mathematics Number")

// if (English <= 100 && Urdu <= 100 && Mathematics <= 100) {
//     var obtainedMarks = English + Urdu + Mathematics;
//     var totalMarks = 300;

//     let percentage = obtainedMarks / totalMarks * 100;

//     percentage = percentage.toFixed(2);


//     if (percentage >= 80) {
//         document.write(`<h2>Total Marks  ${totalMarks} `);
//         document.write(`<h2>Obtained Marks ${obtainedMarks} `);
//         document.write(`<h2>Percentage ${percentage} `);
//         document.write(`<h2>Grade  A-one `);
//         document.write(`<h2>Remarks Excellent `);
//     }

//     else if (percentage >= 70) {
//         document.write(`<h2>Total Marks  ${totalMarks} `);
//         document.write(`<h2>Obtained Marks ${obtainedMarks} `);
//         document.write(`<h2>Percentage ${percentage} `);
//         document.write(`<h2>Grade  A `);
//         document.write(`<h2>Remarks Good `);
//     }

//     else if (percentage >= 60) {
//         document.write(`<h2>Total Marks  ${totalMarks} `);
//         document.write(`<h2>Obtained Marks ${obtainedMarks} `);
//         document.write(`<h2>Percentage ${percentage} `);
//         document.write(`<h2>Grade  B `);
//         document.write(`<h2>Remarks You need to improve`);
//     }

//     else if (percentage < 60) {
//         document.write(`<h2>Total Marks  ${totalMarks} `);
//         document.write(`<h2>Obtained Marks ${obtainedMarks} `);
//         document.write(`<h2>Percentage ${percentage} `);
//         document.write(`<h2>Grade  Fail `);
//         document.write(`<h2>Remarks sorry `);
//     }

// }

// document.write("<p>Guess game:<br>Store a secret number (ranging from 1 to 10) in a variable.<br>Prompt user to guess the secret number.<br>a. If user guesses the same number, show “Bingo! Correctanswer”.<br>b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.</p><br>");
// var secretNumber = 7;
// var userSecretNumber = +prompt("Enter Your secret Number")
// if (secretNumber === userSecretNumber) {
//     alert('bongo')
// }
// else if (secretNumber++ === userSecretNumber) {
//     alert('Close enough to the correct answer.')
// }

// document.write("<p>8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the numberis divisible by 3</p><br>");
// var divisibleNumber = prompt("Enter Divisible Number")
// if (divisibleNumber % 3 === 0) {
//     alert("Number is Divisible by 3")
// }

// document.write("<p>9. Write a program that checks whether the given input is an even number or an odd number. </p><br>");
// var num = +prompt("Enter your Number i will tell you it is even or odd")
// if (num % 2 == 0) {
//     alert('Even Number');
// } else {
//     alert('Odd Number');
// }

// document.write("<p>10. Write a program that takes temperature as input andshows a message based on following criteria<br>a. T > 40 then “It is too hot outside.”<br>b. T > 30 then “The Weather today is Normal.”<br>c. T > 20 then “Today’s Weather is cool.”<br>d. T > 10 then “OMG! Today’s weather is so Cool.”</p><br>");
// var temperature = prompt("Enter Your Temperature");
// if (temperature > 40) {
//     alert("It is too hot outside")
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal.")
// }
// else if (temperature > 20) {
//     alert("Today’s Weather is cool.")
// }
// else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.")
// }

// document.write("<p>11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:<br>a. First number<br>b. Second number<br>c. Operation (+, -, *, /, %)<br>Compute & show the calculated result to user.</p><br>");
// var inputOne = parseInt(prompt("Enter First Number"))
// var inputtwo = parseInt(prompt("Enter Last Number"))
// var operation = prompt("+, -, *, /, %")

// if (operation === "+") {
//     alert(inputOne + inputtwo)
// }
// else if (operation === "-") {
//     alert(inputOne - inputtwo)
// }

// else if (operation === "*") {
//     alert(inputOne * inputtwo)
// }
// else if (operation === "/") {
//     alert(inputOne / inputtwo)
// }
// else if (operation === "%") {
//     alert(inputOne % inputtwo)
// }

// document.write("<h1>Chapters 12 - 13</h2><br>");

// document.write("<p>Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).</p><br>");
// var userNumber = parseInt(prompt("Select one Number in given Number 65, 90, 97, 122"))
// if (userNumber === 65) {
//     document.write("You select Capital Letter  'A' Alphabet")
// }
// else if (userNumber === 90) {
//     document.write("You select Capital letter 'Z' Alphabet")
// }
// else if (userNumber === 97) {
//     document.write("You select small Letter 'a' Alphabet")
// } else if (userNumber === 122) {
//     document.write("You select small letter 'z' Alphabets")
// }
// else {
//     document.write("Please select in given number")

// }

// document.write("<p>2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.</p><br>");
// if (25 > 21) {
//     document.write("larger number is 25 <br>");
// }
// if ('abc' === 'abc') {
//     document.write("both string are Same<br>");
// }
// else {
//     document.write("both string are different<br>")
// }

// document.write("<p>3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.</p><br>");
// var userInput = parseInt(prompt("Enter the positive, negative or zero number<br>"))
// if (userInput == 5) {
//     document.write("You Select Positive Number<br>")
// }

// else if (userInput == -5) {
//     document.write("You Select Negative Number<br>")
// }
// if (userInput === 0) {
//     document.write("You Select Zero Number<br>")
// }

// document.write("<p>4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise</p><br>");
// var vowelWord = prompt("Enter Your desire Letter")
// vowelWord = vowelWord.toLowerCase();
// if (vowelWord === 'a' || vowelWord === 'e' || vowelWord === 'i' || vowelWord === 'o' || vowelWord === 'u') {
//     alert("You selected Vowel Word")
// }
// else {
//     alert("Your selected Word is not Vowel Word")

// }

// document.write("<p>5. Write a program that<br>a. Store correct password in a JS variable.<br>b. Asks user to enter his/her password<br>c. Validate the two passwords:<br>i. Check if user has entered password. If not, then give message “ Please enter your password” <br>ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. </p><br>");
// var password = "Javascript";
// var userPassword = prompt("Enter Your Password");
// if (userPassword == null || userPassword == '') {
//     alert("please Enter Your Password")
// }
// else if (userPassword === password) {
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Your typed wrong Password")
// }

// document.write("<p>6. This if/else statement does not work. Try to fix it:<br>var greeting;<br>var hour = 13;<br>if (hour < 18) {<br>greeting = 'Good day'<br>else<br>greeting = 'Good evening';}</p><br>");
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// document.write("<p>Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements</p><br>");
// var times = 1900;
// if (times >= 0000 && times < 1200) {
//     document.write("<br /> Good Morning")
// }

// else if (times >= 1200 && times < 1700) {
//     document.write("<br /> Good AfterNoon")
// }

// else if (times >= 1700 && times < 2100) {
//     document.write("<br /> Good Evening")
// }

// else if (times >= 2100 && times < 2359) {
//     document.write("<br /> Good Night")
// }

// document.write("<h1>Chapters 14 - 16</h2><br>");

// document.write("<p>1. Declare an empty array using JS literal notation to store student names in future.</p><br>");
// var studentName = [];

// document.write("<p>2. Declare an empty array using JS object notation to store student names in future.</p><br>");
// var student = new Array();

// document.write("<p>3. Declare and initialize a strings array.</p><br>");
// var stringArray = ['faizan', 'ali', 'bugti', 'saylani']

// document.write("<p>4. Declare and initialize a numbers array.</p><br>");
// var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// document.write("<p>5. Declare and initialize a boolean array.</p><br>");
// var booleanArray = [true, false, false, true]

// document.write("<p>6. Declare and initialize a mixed array.</p><br>");
// var mixedArray = ['myname ', 'faizan', 'class', 1, 5, 0, 8, 9, true, false]

// document.write("<p>7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:</p><br>");
// var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
// document.write("<h1>Qualification</h1>")

// for (var i = 0; i < educationArray.length; i++) {
//     document.write(i + "  " + educationArray[i] + "<br>")
// }

// document.write("<p>8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:</p><br>");
// var studentName = ['hamza', 'salman', 'arsalan']
// var studentScore = [320, 230, 480];

// var percentagestudent1 = studentScore[0] * 100 / 500;
// var percentagestudent2 = studentScore[1] * 100 / 500;
// var percentagestudent3 = studentScore[2] * 100 / 500;
// var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

// for (let index = 0; index < studentName.length; index++) {
//     document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
// Percentage : ${percentagestudents[index]} %<br>`)
// }

// document.write("<p>9. Initialize an array with color names. Display the array elements in your browser.<br>a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. <br>b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.<br> c. Add two more color to the beginning of the array. Display the updated array in your browser. <br>d. Delete the first color in the array. Display the updated array in your browsere. <br>e. Delete the last color in the array. Display the updated array in your browser.<br>f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.<br>g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.</p><br>");

// var colorName = ['red', 'green', 'blue', 'white', 'orange'];
// for (let index = 0; index < colorName.length; index++) {
//     document.write(colorName[index] + "<br>")
// }

// var userColor = prompt("Enter your Favorite Color");

// if (userColor != '' && userColor != undefined) {
//     // colorName.splice(0, 0, userColor)
//     colorName.unshift(userColor)
//     document.write(colorName + "</br>");

// }

// var userColor2 = prompt("Enter your Second Favorite Color");

// if (userColor2 != '' && userColor2 != undefined) {
//     // colorName.splice(0, 0, userColor)
//     colorName.push(userColor2)
//     document.write(colorName + "</br>");

// }

// colorName.unshift("pink")
// colorName.unshift("skyblue")
// document.write("<h3>New Updated Array: " + colorName + "</h3><br />")

// colorName.shift()
// document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

// colorName.pop()
// document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")

// var userColorName = prompt("Enter your color name")
// var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
// colorName.splice(userColorposition, 0, userColorName)
// document.write("<h3>" + colorName + "</h3>")

// var userdeleteColor = prompt("Enter which index you want to delete color ")
// var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
// colorName.splice(userdeleteColor, userColorposition)
// document.write("<h3>" + colorName + "</h3><br>")

// document.write("<p>10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</p><br>");
// var sortArray = [120, 350, 220, 450, 100, 650, 300];
// document.write("Score of Students " + sortArray + "<br />")
// document.write(" Ordered Score of Students  " + sortArray.sort())

// document.write("<p>11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.</p><br>");
// var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
// var selectedcities = cities.slice(2, 5);
// document.write("<br>Cities List  " + cities + "<br />")
// document.write("Cities List " + selectedcities + "<br />")

// document.write("<p>12. Write a program to create a single string from the below mentioned array: (Use array’s join method)</p><br>");
// var arr = ['This', 'is', 'my', 'cat'];
// var stringArray = arr.join(" ")
// document.write(arr)
// document.write(stringArray)

// document.write("<p>13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)</p><br>");
// var fifoarray = [];
// fifoarray.push('keyboard')
// fifoarray.push('mouse')
// fifoarray.push('printer')
// fifoarray.push('monitor')
// document.write("<h3>DEVICES: <br /> " + fifoarray + " </h3>")

// var out1 = fifoarray.shift()
// var out2 = fifoarray.shift()
// var out3 = fifoarray.shift()
// var out4 = fifoarray.shift()
// document.write("<h3>Out: <br /> " + out1 + " </h3>")
// document.write("<h3>Out: <br /> " + out2 + " </h3>")
// document.write("<h3>Out: <br /> " + out3 + " </h3>")
// document.write("<h3>Out: <br /> " + out4 + " </h3>")

// document.write("<p>14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)</p><br>");
// var lifoArray = [];
// lifoArray.unshift('monitor')
// lifoArray.unshift('printer')
// lifoArray.unshift('mouse')
// lifoArray.unshift('keyboard')

// document.write("<h3>DEVICES: <br /> " + lifoArray + " </h3>")

// var out1 = lifoArray.pop()
// var out2 = lifoArray.pop()
// var out3 = lifoArray.pop()
// var out4 = lifoArray.pop()
// document.write("<h3>Out: <br /> " + out1 + " </h3>")
// document.write("<h3>Out: <br /> " + out2 + " </h3>")
// document.write("<h3>Out: <br /> " + out3 + " </h3>")
// document.write("<h3>Out: <br /> " + out4 + " </h3>")

// document.write("<p>15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:</p><br>");
// var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
// document.write(`<select><option>${mobilesCompanies[0]}</option><option>${mobilesCompanies[1]}</option><option>${mobilesCompanies[2]}</option><option>${mobilesCompanies[3]}</option><option>${mobilesCompanies[4]}</option><option>${mobilesCompanies[5]}</option></select>`)

// // Chapter 17-20
// //Task 1
// var multiArr = [[1, 2], [2, 3]];

// //Task 2
// var multiArr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];

// //Task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// //Task 4
// var num = +prompt("Enter table number");
// var times = +prompt('Enter length of table');

// for (i = 1; i <= times; i++) {
//     ans = num * i;
//     document.write(num + "times" + i + "=" + ans);
// }

// //Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index" + i + "is " + fruits[i]);
// }

// //Task 6 
// var arr = []
// for (var i = 1; i <= 15; i++) {
//     arr.push(i)
// }
// document.write("counting:" + arr);

// var arr1 = []
// for (var i = 10; i >= 0; i--) {
//     arr1.push(i)
// }
// document.write("Reverse counting:" + arr1);

// var arr2 = []
// for (var i = 0; i <= 20; i = i + 2) {
//     arr2.push(i)
// }
// document.write("Even counting:" + arr2);

// var arr3 = []
// for (var i = 1; i <= 20; i = i + 2) {
//     arr3.push(i)
// }
// document.write("Odd counting:" + arr3);

// var arr4 = []
// for (var i = 0; i <= 20000; i = i + 2000) {
//     arr4.push(i)
// }
// document.write("Series counting:" + arr2);

// //Task 7
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var name = prompt("Enter a word");

// for (var i = 0; i < A.lenght; i++) {
//     if (name === A[i]) {
//         document.write(name + "is available at index" + i + "in our bakery")
//     }
//     else {
//         document.write("sorry your item is not available")
//     }
// }

// //Task 8
// var array = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = array[0];

// for (i = 0; i < array.lenght; i++) {
//     if (array[i] > largest) {
//         var largest = array[i];
//     }
// }

// document.write(largest + "is the largest num in array");

// //Task 9
// var array = [3, 6, 2, 56, 32, 5, 89, 32];
// var smallest = array[0];

// for (i = 0; i < array.lenght; i++) {
//     if (array[i] < smallest) {
//         var smallest = array[i];
//     }
// }

// document.write(smallest + "is the smallest num in array");

// //Task 10
// var arr = []
// for (var i = 1; i <= 20; i++) {
//     ans = 5 * i;
//     arr.push(ans);
// }
// document.write(arr + "is the list of multiple of 5");

// // Chapter No.21 to 25

// // Task No. 1

// var firstName = prompt("Enter First Name!");
// var lastName = prompt("Enter Last Name!");
// var fullName = firstName + " " + lastName;
// document.write("<h1> Welcome " + fullName);


// // Task No.2

// var mobile = prompt("Enter your favorite mobile phone model!");

// document.write("<h1> My favorite phone is: " + mobile);
// document.write("<br>Length of string " + mobile.length);


// // Task No.3

// var word = "Pakistan";
// var searchedIndex = 0
// for (let i = 0; i <= word.length; i++) {
//     if (word[i] === searchWord) {
//         searchedIndex = i;
//         break;
//     }
// }
// document.write("<h1> String: " + word);
// document.write("<br> Index of 'n': " + searchedIndex);


// // Task No.4

// var str = "Hello world.";
// var searchedIndex = 0
// // var n = str.indexOf("e", 5);
// // document.write(n);
// var indexArr = [];
// var searchWord = 'l'
// for (let i = 0; i <= str.length; i++) {
//     if (str[i] === searchWord) {
//         indexArr.push(i);
//     }
// }
// document.write("<h1> String: " + str + "<br> Last index of 'l': " + indexArr[indexArr.length - 1]);


// // Task No.5

// var str = "Pakistan";
// var searchWord;
// // for(let i=0; i<str.length; i++){
// //     if (i ===3)
// //     {
// //         searchWord=str(i);
// //         // document.write(i);
// //         break;
// //     }
// // }
// document.write("<h1>String: " + str);
// document.write("<br> Character at index 3:" + str[3]);



// // Task No.6

// var str1 = "Hello ";
// var str2 = "world!";
// var str3 = " Have a nice day!";
// var res = str1.concat(str2, str3);
// var firstName = prompt("Enter First Name!");
// var lastName = prompt("Enter Last Name!");
// var fullName = firstName.concat(lastName);
// document.write("<h1> Welcome " + fullName);


// // Task No.7

// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("<h1> City: " + str + "<br> After replacement: " + res);


// // Task No.8

// var str = "Ali and Sami are best friends. They play cricket and football together.";
// var res = str.replace(/and/g, "&");
// document.write("<h1> Actual string: " + str + "<br> After replacement: " + res);


// // Task No.9

// var str = "472";
// var num = parseInt(str);
// document.write("<h1> Value: " + str + "<br> Type: string");
// document.write("<h1> <br> Value: " + num + "<br> Type: number");


// // Task No.10

// var str = prompt("Enter any text!");
// var res = str.toLocaleUpperCase();
// document.write("<h1> User input: " + str);
// document.write("<br>Upper case " + res);


// // Task No.11

// var str = prompt("Enter any text!");
// // var res = str.toLocaleUpperCase();
// // var res = str.toUpperCase();
// document.write("<h1> User input: " + str);

// str = str.toLowerCase();
// str = str.split(' ');

// for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

// }
// str.join(' ');

// // var strCase=str.replace(/,/g, " - ")
// // var res = str.replace(/,/g, "&");
// document.write("<br>Title case: " + str);
// // document.write("<br>Title case "+ res);


// // Task No.12

// var num = 35.36;
// // var str=num.toString();
// // var myTrunc = Math.trunc(num);
// var myTrunc = num.toFixed(4);

// document.write("<h1> Number: " + num);
// document.write("<br> Result: " + myTrunc);


// // Task No.13

// var userName = prompt("Enter Username!");
// var found = 0
// for (let i = 0; i <= userName.length; i++) {
//     if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!') {
//         // document.write("Please enter a valid username!");
//         found = 1;
//         break;
//     }
// }
// if (found)
//     document.write("Please enter a valid username!");
// else
//     document.write("Thank you! you entered a valid username");


// // Task No.14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var order = prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
// var found = 0, i = 0;

// for (i = 0; i < a.length; i++) {
//     if (a[i] === order) {
//         // document.write(order+" is available at index "+i +"in our bakery");
//         found = 1;
//         break
//     }

// }
// if (found) {
//     document.write(order + " is available at index " + (i + 1) + "in our bakery");
// }
// else {
//     document.write("We are sorry. " + order + " is not available in our bakery.")
// }


// // Task No.15

// var password = prompt("Enter valid passwordz");
// var found = 0, i = 0;

// for (i = 0; i < a.length; i++) {
//     if (a[i] === order) {
//         // document.write(order+" is available at index "+i +"in our bakery");
//         found = 1;
//         break
//     }

// }
// if (found) {
//     document.write(order + " is available at index " + (i + 1) + "in our bakery");
// }
// else {
//     document.write("We are sorry. " + order + " is not available in our bakery.")
// }



// // Task No.16

// var str = "University of Karachi";


// str = str.split('');

// for (let i = 0; i < str.length; i++) {
//     document.write(str[i] + "<br>");
// }


// // Task No.17

// var str = prompt("Enter any input?");
// document.write("<h1> User input: " + str);
// document.write("<br> Last character: " + str[str.length - 1])


// // Task No.18

// var str = "The quick brown fox jumps over the lazy dog.";
// var word = "the";
// var a = str.toLowerCase();
// var a = a.split(" ");

// // search for pattern in a 
// let count = 0;
// for (let i = 0; i <= a.length; i++) {

//     if (a[i] === word)
//         count++;
// }
// document.write("<h1> Text: " + str);
// document.write("<br> There are " + count + " occurrence(s) of word" + word)

// // Chapter No.26 to 30

// // Task No.1

// var n = prompt("Enter any positive integer?");
// document.write("<h1> number: " + n);
// document.write("<br> round off value: " + Math.round(n));
// document.write("<br> floor value: " + Math.floor(n));
// document.write("<br> ceil value: " + Math.ceil(n));


// // Task No.2

// var n = prompt("Enter any negative integer?");
// document.write("<h1> number: " + n);
// document.write("<br> round off value: " + Math.round(n));
// document.write("<br> floor value: " + Math.floor(n));
// document.write("<br> ceil value: " + Math.ceil(n));


// // Task No.3

// var n = prompt("Enter any number?");
// document.write("<h1> The absolute value of " + n + " is " + Math.abs(n));


// // Task No.4

// // var n=prompt("Enter any number?");
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("<h1> random dice value: " + numberOfStars);


// //Task No.5

// // var n=prompt("Enter any number?");
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if (numberOfStars === 1)
//     document.write("<h1>" + numberOfStars + "<br> random coin value: Tails");
// else
//     document.write("<h1>" + numberOfStars + "<br> random coin value: Heads");


// // Task No.6

// // var n=prompt("Enter any number?");
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("<h1> random number between 1 and 100: " + numberOfStars);


// // Task No.7

// var weight = prompt("Enter your weight in kilograms?");
// var parseWet = parseFloat(weight);
// document.write("<h1> The weight of user is " + parseWet + " kilograms");


// //Task No.08

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberSecret = Math.floor(improvedNum);

// var userInput = prompt("Enter your any number in between 1 to 10?");
// if (numberSecret === userInput)
//     document.write("<h1> Congratulations the user");
// else
//     document.write("<h1> Try again" + numberSecret);

// // Chapter No.31 to 34

// // Task No.1

// var rightNow = new Date();
// document.write("<h1>" + rightNow);


// // Task No.2

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var rightNow = new Date();
// var theMonth = rightNow.getMonth()
// document.write("<h1> Current month: " + monthName[theMonth]);


// // Task No.3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("<h1> Today is " + nameOfToday);


// // Task No.4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (theDay === 0 || theDay === 6)
//     document.write("<h1> its Fun Day ");
// else
//     document.write("<h1> Its working Day ");


// // Task No.5

// var now = new Date();
// var theDate = now.getDate();
// if (theDate < 15)
//     document.write("<h1> First fifteen days of the month.");
// else
//     document.write("<h1> Last days of the month ");


// // Task No.6

// var firstDate = new Date("Jan 1, 1970");
// var today = new Date();
// var msTday = today.getTime();
// var msFirstDate = firstDate.getTime();
// // var msDiff=msRamzanDate-msTday;
// var msDiff = msTday - msFirstDate;
// var mintDiff = msDiff / (1000 * 60);
// // dayDiff = Math.floor(dayDiff);

// document.write("<h2> Current Date: " + today);
// document.write("<br> Elapsed milliseconds since January 1, 1970: " + msDiff);
// document.write("<br> Elapsed minutes since January 1, 1970: " + mintDiff);


// // Task No.7

// var now = new Date();
// var theHours = now.getHours;
// if (theHours >= 12)
//     document.write("<h1> It's PM.");
// else
//     document.write("<h1> It's AM ");


// // Task No.8

// var laterDate = new Date("Dec 31, 2020");
// document.write("<h1> Later date: " + laterDate)


// // Task No.9

// var ramzanDate = new Date("June 18, 2015");
// var today = new Date();
// var msTday = today.getTime();
// var msRamzanDate = ramzanDate.getTime();
// // var msDiff=msRamzanDate-msTday;
// var msDiff = msTday - msRamzanDate
// var dayDiff = msDiff / (1000 * 60 * 60 * 24);
// dayDiff = Math.floor(dayDiff);
// document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

// // var dateDiff= today-laterDate;
// // document.write("<h1> Later date: " + laterDate)
// // document.write("<br> today date: " + today)
// // document.write("<br> Diff date: " + dateDiff)


// // Task No.10

// var referDate = new Date("Dec 05, 2015");
// var beginningDate = new Date("Jan 1, 2015");
// var msReferDate = referDate.getTime();
// var msBeginningDate = beginningDate.getTime();
// var msDiff = msReferDate - msBeginningDate;
// var secondDiff = msDiff / (1000 * 60);
// secondDiff = Math.floor(secondDiff);
// document.write("<h1> On reference date " + referDate);

// document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");


// // Task No.11

// var today = new Date();
// var oneHourAgo = new Date();
// oneHourAgo.setHours(today.getHours() - 1);
// document.write("<h1> Current date: " + today);
// document.write("<br> 1 hour ago, it was " + oneHourAgo);


// // Task No.12

// var today = new Date();
// var hundredYearsAgo = new Date();
// hundredYearsAgo.setFullYear(today.getFullYear() - 100);
// alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);


// // Task No.13

// var age = prompt("Enter your age");
// var birthYear = new Date();
// birthYear.setFullYear(birthYear.getFullYear() - age);

// document.write("<h1> Your age is " + age);
// document.write("<br> Your birth year is " + birthYear.getFullYear());


// // Task No.14

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var name = "ABC Customer";
// var currentDate = new Date();
// var month = currentDate.getMonth();
// var consumedUnit = 410;
// var pricePerUnit = 16;
// var surcharge = 350;
// var netAmount = consumedUnit * pricePerUnit;
// var grossAmount = netAmount + surcharge;

// document.write("<h1> K-Electric Bill </h1>");
// document.write("<h2> <br>  Customer Name: " + name);
// document.write("<br> Month: " + monthName[month]);
// document.write("<br> Number of units: " + consumedUnit);
// document.write("<br> Charges per unit: " + pricePerUnit);
// document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount);
// document.write("<br> Late payment surcharge: " + surcharge);
// document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount);

// //  CHAPTERS NO.35 TO 38

// // Task No.1
// function currentDateTime() {
//     var now = new Date();
//     document.write("<h1>" + now);
// }

// // Task No.2
// function greetings(firstName, lastName) {
//     var fullName = firstName + lastName;
//     document.write("<h1> Welcome " + fullName);
// }

// // Task No.3
// function addTwoNum() {
//     var a = +prompt("Enter first number?");
//     var b = +prompt("Enter 2nd number?");
//     var c = 0;
//     c = add(a, b);
//     document.write("<h1>Sum: " + c);
// }
// function add(num1, num2) {
//     return (num1 + num2);
// }

// // Task No.4
// function task354() {
//     var a = +prompt("Enter first number?");
//     var op = prompt("Enter operator for operatioin?");
//     var b = +prompt("Enter 2nd number?");
//     var c = 0;
//     c = calculator35(a, op, b);
//     document.write("<h1>Result: " + c);
// }
// function calculator35(num1, op, num2) {
//     switch (op) {
//         case "+":
//             return (num1 + num2);
//             break;
//         case "-":
//             return (num1 - num2);
//             break;
//         case "*":
//             return (num1 * num2);
//             break;
//         case "/":
//             return (num1 / num2);
//             break;
//         case "%":
//             return (num1 % num2);
//             break;
//         default:
//             return ("Invalid!")
//     }
// }

// // Task No.5
// function squares(num1) {
//     document.write("<h1> Squares= " + (num1 * num1));
// }

// // Task No.6
// function task356() {
//     var n = +prompt("Enter any number for factorial?");
//     document.write("<h1> Factorial of " + n + " is: " + factorial(n));
// }
// function factorial(num) {
//     var fact = 1;
//     for (let i = num; i >= 1; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }

// // Task No.7
// function countingPrint() {
//     var startNum = +prompt("Enter start number?");
//     var endNum = +prompt("Enter end limit?");
//     for (let i = startNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }

// // Task No.8
// function calculateHypotenuse() {
//     var base = +prompt("Enter base of triangle?");
//     var perpendicular = +prompt("Enter perpendicular?");
//     var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
//     document.write("<h1> Hypotenuse of a right angle triangle is: " + calculateSquar(hypotenuse));


//     function calculateSquar(num) {
//         return (num * num);
//     }
// }

// // Task No.9
// function areaOfTriangle(width, height) {
//     return (width * height);
// }
// function calculateAreaOfTriangle() {
//     var width = prompt("Enter width of Triangle?");
//     var height = prompt("Enter height of Triangle?");
//     document.write("<h1> Area of Triangle is: " + areaOfTriangle(width, height))
// }

// // Task No.10
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len / 2);
//     for (var i = 0; i < mid; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// function taskNo3510() {
//     var str = prompt("Enter any string for Palindrome check?");
//     if (palindrome(str)) {
//         document.write("<h1> The string " + str + " is palindrome.")
//     }
//     else
//         document.write("<h1> The string " + str + " is not palindrome.")
// }

// // Task No.11
// function task3511() {
//     stringTitalCase()
// }

// // Task No.12
// function findLongestWord(str) {

//     var strSplit = str.split(' ');

//     var longestWord = 0;
//     var longestIndex = 0;

//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//             longestIndex = i;
//         }
//     }
//     // return longestWord; 
//     return strSplit[longestIndex];
// }
// function task3512() {
//     var str = prompt("Enter any string for finding longest word?")
//     document.write("<h1> Longest word is: " + findLongestWord(str));
// }

// // Task No.13
// function wordCount(str, word) {

//     var a = str.toLowerCase();
//     var a = a.split("");

//     // search for pattern in a 
//     let count = 0;
//     for (let i = 0; i <= a.length; i++) {

//         if (a[i] === word)
//             count++;
//     }
//     return count;
// }
// function task3513() {
//     var str = prompt("Enter string?");
//     var word = prompt("Enter letter to check its occurrence?");

//     document.write("<h1> Occurrence of letter " + word + " is: " + wordCount(str, word));
// }

// // Task No.14
// function calCircumference(radi) {
//     const pi = 3.14;
//     return 2 * pi * radi;
// }
// function calArea(radi) {
//     const pi = 3.14;
//     return pi * radi * radi;
// }
// function task3514() {
//     var r = prompt("Enter radius of circle?");
//     document.write("<h1> The circumference is " + calCircumference(r));
//     document.write("<br> The area is " + calArea(r));
// }

// Chapter 38 to 42 Task 1
// function power(a,b){
//     return a**b
// }
// alert(power(3,2))

// Chapter 38 to 42 Task 2
// function leap(year){
//     if (year%4==0){
//         if(year%100!=0||year%400==0){
//             alert(year+' is a leap year')
//         }
//         else {
//             alert(year+' is not a leap year')
//         }
//     }
//     else {
//         alert(year+' is not a leap year')
//     }
// }
// var a=+prompt('Enter a year: ')
// leap(a)

// Chapter 38 to 42 Task 3
// function area(a,b,c){
//     S=calcS(a,b,c)
//     Area=S*(S-a)*(S-b)*(S-c)
//     return Area
// }
// function calcS(a,b,c){
//     return (a+b+c)/2
// }

// var areaT=area(40,40,40)
// alert(areaT)

// Chapter 38 to 42 Task 4
// function mainFun(sub1,sub2,sub3){
//     var avg=av(sub1,sub2,sub3)
//     var per=pe(sub1,sub2,sub3)
//     return [avg,per];
// }
// function av(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }
// function pe(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)/300)*100
// }
// var fstSub=parseInt(prompt("Enter marks for first subject"))
// var secSub=parseInt(prompt("Enter marks for second subject"))
// var thSub=parseInt(prompt("Enter marks for third subject"))
// var result=mainFun(fstSub,secSub,thSub)
// alert(result[0])
// alert(result[1]+'%')

// Chapter 38 to 42 Task 5
// function indOf(arr,element){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==element){
//             return i
//             break;
//         }
//     }
// }

// var arr1=['moiz','raza','hi','hello']
// var a=indOf(arr1,'hello')
// console.log(a)


// Chapter 38 to 42 Task 6
// function delVow(stg){

//     stg=stg.toLowerCase()
//     for(var i=0;i<stg.length;i++){
//         if(stg[i]==='a'||stg[i]==='e'||stg[i]==='i'||stg[i]==='o'||stg[i]==='u'){
//             stg=stg.replace(stg[i],'')
//         }
//     }
//     return stg
// }

// var a='My Name is Abdul Moiz'
// var res=delVow(a)
// alert(res)

// Chapter 38 to 42 Task 7
// function findVow(str){
//     var chars=str.toLowerCase().split('');
//     var count=0
//     for (var i=0;i<chars.length-1;i++){
//         var char=chars[i]
//         var next=chars[i+1]
//     if (isCorrect(char)===true&&isCorrect(next)===true){
//         count++;
//     }
//     }
//     return count;
// }
// function isCorrect(char) {
//     switch (char) {
//       case 'a':
//         return true;
//         break;
//       case 'e':
//         return true;
//         break;
//       case 'i':
//         return true;
//         break;
//       case 'o':
//         return true;
//         break;
//       case 'u':
//         return true;
//         break;
//       default:
//         return false;
//     }
//   }

// var text='Pleases read this application and give me gratuity'
// var c=findVow(text)
// alert(c)

// Chapter 38 to 42 Task 8
// function meter(km){
//     var m=km*1000
//     return m
// }
// function feet(km){
//     var f=km*3281
//     return f
// }
// function inch(km){
//     var i=km*39370.1
//     return i
// }
// function cent(km){
//     var c=km*100000
//     return c
// }
// var dis=parseInt(prompt('Distance in kilometer'))
// var m=meter(dis)
// var f=feet(dis)
// var i=inch(dis)
// var c=cent(dis)
// alert(m)
// alert(f)
// alert(i)
// alert(c)

// Chapter 38 to 42 Task 9
// function overtime(hours,salary){
//     if(hours>40){
//         ov=hours-40
//         salary=salary+(12*ov)
//         return salary
//     }
//     else{
//         return salary
//     }

// }
// var sal=overtime(50,12000)
// alert(sal)

// Chapter 38 to 42 Task 10
// function cashier(money){
//     var hun=parseInt(money/100)
//     var fif=parseInt((money%100)/50)
//     var ten=parseInt(((money%100)%50)/10)
//     var arr=[hun,fif,ten]
//     return arr
// }
// var amount=parseInt(prompt('Enter amount'))
// var rem=cashier(amount)
// alert(rem[0]+' hundreds '+rem[1]+' fifty '+ rem[2]+' tens.')

// Chapter 43 to 48 Task 1
//Done in html

// Chapter 43 to 48 Task 2
//Done in html

// Chapter 43 to 48 Task 3
// function del(num){
//     document.getElementById("Table").deleteRow(num+1);
// }

// Chapter 43 to 48 Task 4
// function swapimg(){
//     var img=document.getElementById('image')
//     img.src = 'data:image/jpeg;base64,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'
// }

// function retimg(){
//     var img=document.getElementById('image')
//     img.src = 'data:image/jpeg;base64,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'

// }

// Chapter 43 to 48 Task 5
// function Increase(){
//     var count=document.getElementById('count')
//     count.innerHTML = parseInt(count.innerHTML)+1
// }
// function Decrease(){
//     var count=document.getElementById('count')
//     count.innerHTML = parseInt(count.innerHTML)-1
// }
















// Chapters 52 - 57

// function showimage(a) {
//     var modalimg = document.getElementById('modalimg')
//     modalimg.src = a.src
// }

