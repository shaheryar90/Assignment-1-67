// Alert     Assignment 1
// 1. Write a script to greet your website visitor using JS alert box.
alert( "have a good day , welcome to my website" );
// 2. Write a script to display following message on your web page:
alert( "Error,please enter a valid message" );
//3. Write a script to display following message on your web page: (Hint : Use line break)
alert("\nWelcome to JS land..\n happing coding");
//4. Write a script to display following messages in sequence:
alert("welcome to JS Land...");
alert("Happy codding");
//5. Generate the following message through browser’s developer console:
alert("Hello... I can run JS through my web's browser console")
//6. Make use of alerts in your new/existing HTML & CSS project.
<script>alert("Hello world")</script>
//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//a. Head
<script src="app.js"></script>
b. Body (before your page’s HTML)
<script>alert("Hello")</script>
c. Body (inside your page’s HTML)
<script>alert("Hello world!!!!")</script>
d. Body (after your page’s HTML)
<script>alert("Hello world!!!!!")</script>
// Assignment 2 Variable of string
//1. Declare a variable called username.
var username="shaheryar";
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName;
myNmae="shaheryar";
Fullname=myName;

//3. Write script to
//a) Declare a JS variable, titled message.
var message;

//b) Assign “Hello World” to variable message
message="Hello world";

c) Display the message in alert box.
alert(message);
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var name="jhone doe";
alert(name)
var age="15 year old";
alert(age)
var course="Certified Mobile Application Development";
alert(course)
//5. Write a script to display the following alert using one JS variable:
var  eat="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(eat);
//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email="shaheryar724@gmail.com";
alert("my email is " +  email)
//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the book " + book);
//8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through javascript");
//9. Store following string in a variable and show in alert and browser through JS
document.write("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");
// Assignment 3 variable for numbers

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age=15;
alert("my ag is " + age);
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
for(var N=1; N>0; N++){
    alert("you have visited this site" + N + " times")

}
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var  birthYear;
birthYear=1996;
document.write("My birth year is " + birthYear +"<br>"+"data type of declare variable is number");
//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
name=prompt("visitor's name");
product=prompt("product title");
quantity=+prompt("product quantity");
document.write(name +  " ordered "+ quantity + product+ " on XYZ lothing stores ");
//Assignment 4  Legal &ilegal
//1. Declare 3 variables in one statement.
var a="hello",b=21,c="pakistan";
//2. Declare 5 legal & 5 illegal variable names.
// Illegl variable
var 1abc="ali";
var 3.45="pak fouj";
var abc iop="Raw";
var 1_45="pak fouj";
var 1$="billi";


//Legal variable
var _1abc="ali";
var ali_Mughal="shayan";
var aliMughal="shayan";
var result=123;
var $Mughal="pak fouj";

//3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
1.camelName e.g firstName
2. case sensitive 
3. start with _, $, any letter

b) Variable names can only contain $ , character, underscore_ and Number. For example $my_1stVariable
c) Variables must begin with a dollar $, underscore_ or character. For example $name, _name or name
d) Variable names are case sensitive
e) Variable names should not be JS reserved words.
// ASSIGNMENT 5 MATHS EXPRESSION
1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a=3;
var b=5;
c=a+b;
document.write("sum of "+a+ " and "+b+ " is " +c);
//2. Repeat task1 for subtraction, multiplication, division & modulus.
var a=3;
var b=5;
c=a*b;
document.write("subtraction of "+a+ " and "+b+ " is " +c);
var a=5;
var b=3;
c=a-b;
document.write("multiplication of "+a+ " and "+b+ " is " +c);
var a=3;
var b=5;
c=a\b;
document.write("division of "+a+ " and "+b+ " is " +c);
var a=3;
var b=5;
c=a%b;
document.write("modulus of "+a+ " and "+b+ " is " +c);
//3. Do the following using JS Mathematic Expressions
//a. Declare a variable. 
var a
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write("Value after variable declaration is: " + a+"<br>");

//c. Initialize the variable with some number.
a=5;

//d. Show the value of variable in your browser like “Initial value: 5”.
 document.write("Initial value: "+a+"<br>");
 
 //e. Increment the variable.
 a++;

// f. Show the value of variable in your browser like “Value after increment is: 6”. 
 document.write("Value after increment is: " + a+"<br>");

 //g. Add 7 to the variable.
 c=a+7;
 
 //h. Show the value of variable in your browser like “Valueafter addition is: 13”. 
 document.write("value fter addition is: "+c+"<br>");
 
 //i. Decrement the variable.
 --c;

 //j. Show the value of variable in your browser like “Value after decrement is: 12”.
 document.write("value after decreament is: "+c+"<br>");
 
 //k. Show the remainder after dividing the variable’s value by 3.
 d=c%3;

// l. Output : “The remainder is : 0”.
document.write("the remainder is: "+ d+"<br>");
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
one_movie_ticket=600 ;
b=one_movie_ticket *5;
document.write("total cost to buy 5 tickets to a movie is: "+ b+" PKR ");

//5. Write a script to display multiplication table of any number in your browser. E.g
for(var i=1 ;i<=10;i++){
    document.write("5 " + " * "+  i + " = " + 5*i +"<br>");
}
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
var C=25;

//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
F=(C*9/5)+32;
document.write(" output of "+ C+ " celsius " + " is " + F+ " farhrenheit ");



c. Now store a Fahrenheit temperature into a variable.
var f=70;
d. Convert it to Celsius & output “NNoF is NNoC”.
C=(f-32)*5/9;
document.write(" output of "+ f+ " farhrenheit" + " is " + F+ " celcius ");

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write("<h1> "+ " Shopping Cart" + "<br> <br>");
//a. Price of item 1
//b. Price of item 2 
 //c. Ordered quantity of item 1
//d. Ordered Quantity of item 2 
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

a=+prompt(" how much price of item 1  ");
document.write("price of item 1 is: "+ a+"<br>");
b=+prompt("how many ordered quantity of item 1  ");
document.write("quantity of items 1 is"+ b + "<br>");

c=+prompt(" how much price of item 2 ");
document.write("price of item 2 is: "+ c+"<br>");
d=+prompt("how many ordered quantity of item 2  ");
document.write("quantity of items 2 is"+ d+ "<br>");
document.write("shipping charges: 100" + "<br> <br>");
total_cost=a*b+c*d+100;
document.write("Total cost of your order is "+ total_cost);
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h1>"+ "Marks Sheet" + "<br> <br>");
totalMarks=+prompt("total marks");
student1=+prompt("marks obtained");
percentage=(student1/totalMarks)*100;
document.write("Total marks: " + totalMarks+"<br>");
document.write("Marks obtained: " + student1+"<br>");
document.write("percentage: " + percentage+"<br>");
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var a;
a=(10*104.80)+ (25*28);
document.write("<h1>"+"Currency in PKR"+"<br>");
document.write("Total currency in PKR: " + a);
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
a. Add 5
 b. Multiply by 10 
 c. Divide the result by 2
 Perform all calculations in a single expression
 var a=5;
 document.write(((a+5)*10)/2);
 //11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
var current_year=2020;
var birth_year=1996;
c= current_year-birth_year;

document.write("<h1>"+"Age Calculator"+"<br> <br>");
document.write("current year: "+current_year+"<br>");
document.write("birth year: "+birth_year+"<br>");
document.write("your age is: "+ c+"<br>")
//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.

//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
 //(Hint : Circumference of a circle = 2 π r , π = 3.142)
 // Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

 var radius=20;
 Circumference=2*3.142*radius;
 area=3.142*radius*radius;
 document.write("<h1>"+"The geometrizer"+"<br> <br>");
 document.write("The radius is: " +radius+"<br>");
 document.write("The circumference is: " +Circumference+"<br>")
 document.write("The area is: " +area+"<br>")


//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more. 
//a. Store your favorite snack into a variable 
//b. Store your current age into a variable.
// c. Store a maximum age into a variable. 
//d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var favourite_snack= "chocolate chip";
var age=15;
var maximum_age=65;
var snack_per_day=3;
total=maximum_age-age;
total1=total*3;
document.write("<h1>"+"The Lifetime supply calculator"+"<br> <br>");
document.write("The favourite snack is: " +favourite_snack+"<br>");
document.write("The current age is: " + age+"<br>");
document.write("The Estimated maximum age is: " +maximum_age+"<br>")
document.write("Amount snack per day is:  " +snack_per_day+"<br>")
document.write("you will need " + total1 + favourite_snack+ " to last you until the ripe old age of " +  maximum_age);

//ASSIGNMENT 6  MATHS EXPRESSIONS
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a=10;
document.write("Result"+"<br>");
document.write("the value of a is: " + a +"<br> <br>");
++a
document.write("the value of ++a is: " +a+ "<br> ")

document.write(" Now,the value of a is: " + a +"<br> <br>");


document.write("the value of a++ is: " +a++ +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");
--a
document.write("the value of --a is: " +a +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");

document.write("the value of a-- is: " +a-- +"<br>")
document.write(" Now,the value of a is: " + a +"<br> <br>");

//2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
 //Explain the output at each stage:
--a; 0
 --a - --b; -1 - -1
 --a - --b + ++b; -2 - -2 + -1
--a - --b + ++b + b--; -3 - -1
document.write("a is "+ a +"<br>");
document.write("b is " + b + "<br>");
document.write("result: "+ result);
//3. Write a program that takes input a name from user & greet the user.
name=prompt("what's your name? ");
alert("welcome to my site");
//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
number=+prompt("enter the number");
for(var i=1; i<=10; i++){
    document.write(number+ " * " +i+ " = " +  number*i +"<br>");
}
//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
a=prompt("subject's name");
b=prompt("subject's name");
c=prompt("subject's name");


//b) Total marks for each subject is 100, store it in another variable.
var d=100;
//c) Take obtained marks for first subject from user and stored it in different variable.
e=+prompt("obtained marks");
f=+prompt("obtained marks");
g=+prompt("obtained marks");
totalmarks=e+f+g;
percentage1=(e/100)*100;
percentage2=(f/100)*100;
percentage3=(g/100)*100;
percentage=(totalmarks/300)*100;


document.write("<h1>" +"Subject "+" Total marks " +" Marks " +"Percentage"+"<br>");
document.write(a+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ d +"&nbsp &nbsp &nbsp &nbsp &nbsp " +e + "&nbsp &nbsp &nbsp &nbsp &nbsp"+percentage1+"%"+"<br>");
document.write(b+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +d +" &nbsp &nbsp &nbsp &nbsp &nbsp" +f + "&nbsp &nbsp &nbsp &nbsp &nbsp"+percentage2+"%"+"<br>");
document.write(c+" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" +d+ " &nbsp &nbsp &nbsp &nbsp &nbsp"+g + "&nbsp &nbsp &nbsp &nbsp &nbsp "+percentage3+"%"+"<br>");
document.write("&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp "+"300"+"&nbsp &nbsp &nbsp &nbsp &nbsp  " +totalmarks+ " &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp"+ percentage+"%");


//Assignment 9-10 
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
a=prompt("enter the city");
if (a=='Karachi'){
    document.write('welcome to city of light');
}
//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
a=prompt("enter the gender");
if(a=='male'){
    document.write("Good Morning Sir");
}
else if(a=="female"){
    document.write("Good Morning ma'am");

}
//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
a=prompt("enter the color of road traffic signal");
if(a=='Red'){
    document.write("Must stop");

}
else if(a=='Yellow'){
    document.write("Ready to move");

}
else{
    document.write("move now");
}
//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
a=+prompt("enter the remaining fuel in car (in liters");
if(a<0.25){
    document.write("Please refill the fuel in your car");
}
// 5. Run this script, & check whether alert message would be displayed or not. 
Record the outputs.
 a. 
 var a = 4;
  if (++a === 5)
  { alert("given condition for variable a is true"); }

  output: given condition for variable a is true

  b. var b = 82;
   if (b++ === 83)
   { alert("given condition for variable b is true"); }

   output: there is no output due to condition is not true 

   c. var c = 12; 
   if (c++ === 13){ alert("condition 1 is true"); } 
   if (c === 13){ alert("condition 2 is true"); }
    if (++c < 14){ alert("condition 3 is true"); }
     if(c === 14){ alert("condition 4 is true");  

     output: no output beacause if used for one condtion  if more than one condition we should use else if.
     
     
     d. var materialCost = 20000; 
     var laborCost = 2000; 
     var totalCost = materialCost + laborCost;
      if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


      output:in laert box the cost equals

      e. if (true){ alert("True"); }
       if (false){ alert("False"); }

       output:True

       f. if("car" < "cat")
       { alert("car is smaller than cat"); }

       OUTPUT: car is smaller than cat
       //6. Write a program to take input the marks obtained in three subjects & total marks. 
       //Compute & show the resulting percentage on your page.
        //Take percentage & compute grade as per following table:
        var total_marks=300;
        a=+prompt("marks obtained in maths");
        b=+prompt("marks obtained in english");
        c=+prompt("marks obtained in urdu");
        marks_obtained=a+b+c;
        percentage=(marks_obtained/total_marks)*100;
        if(percentage>=80){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  A+" +"<br>")
            document.Write("Remarks: Excellent" +"<br>")
        }
        else if(percentage>=70){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  A" +"<br>")
            document.Write("Remarks: Good" +"<br>")
        }
        else if(percentage>=60){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade:  B" +"<br>")
            document.Write("Remarks: you need to improve" +"<br>")
        }
        else  if(percentage<60){
            document.write("<h1>" +"Marks sheet"+"<br> <br>");
            document.write("Total Marks:" + total_marks+"<br>");
            document.write("marks obtained" + marks_obtained +"<br>");
            document.write("percentage: "+ percentage +"<br>");
            document.write("Grade: fail " +"<br>");
            dDocument.Write("Remarks: sorry" +"<br>")
        }
   // 7. Guess game:
       // Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
       //  a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number,
        // show “Close enough to the correct answer”.        
     var secret_number=7;
        a=+prompt("enter the guess number");

      if(a==secret_number){
          document.write("Bingo !.")

      }
      else{
          document.write("Close enough to the correct answer");
      }
      8. Write a program to check whether the given number is divisible by 3.
       Show the message to the user if the number is divisible by 3.
a=+prompt("enter the number")
if(a%3==0){
    document.write("the number is divisible by 3");
}
else{
    document.write("the number is not divisible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
a=+prompt("enter the number")
if(a%2==0){
    document.write("the number is even");
}
else if (a%2==1){
    document.write("the number is odd");
}


10. Write a program that takes temperature as input and shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.”
 c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”

T=+prompt("enter the temperature");
if(T>40){
    document.write("It is too hot outside");
}
else if(T>30){
    document.write("The weather today is normal");
}
else if(T>20){
    document.write("Today's weather is cool");
}
else if(T>10){
    document.write("OMG! today's weather is so cool");

}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
a. First number b. Second number c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.

var a=+prompt("enter the first number");
var b=+prompt("enter the second number");
var c=prompt("enter the operator");
if(c==="+"){
    d=a+b;
    document.write(d);
}
else if(c==="-"){
    d=a-b;
    document.write(d);
}
else if(c==="*"){
    d=a*b;
    document.write(d);
}
else if(c==="/"){
    d=a/b;
    document.write(d);
}

//Assignment 12-13:
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. 
(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


var input_char=+prompt(" enter the character")
if (input_char >= 65 && input_char <= 90) {
    document.write("uppercase letter")
}
else if (input_char >= 97 && input_char <= 122) {
    document.write("lowercase letter")
}

 
else if (input_char >= 48 && input_char <= 57){ 
document.write(" Digit "); }

// OTHERWISE SPECIAL CHARACTER 
else
document.write(" Special Character "); 
} 

2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
a=+prompt("enter the number");
b=+prompt("enter the number");

    if (a > 0 && b > 0 && a > b) {
      document.write("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      document.write("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      document.write("Both numbers are equal!")
    } else {
        document.write("Please add an integer!");
  
    }

   //3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
   a=+prompt("enter the number")
   if (a<0){
       document.write("the number is negative");
   } 
   else if (a>0){
       document.write("the number is positive")
   }
   else if(a===0){
       document.write("the number is zero");
   }
   //4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
   a=prompt("enter the character");
if (a==='a' || a==='i' || a==='o' || a==="u" || a==='e'){
    document.write("the given character is vowel")
}
else{
    document.write("the given character is not vowel")


}

//5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
//  Show “Incorrect password” otherwise
//  please enter your password"
 var password='something'
a=prompt("enter the password");

if(a===password){
    document.write("Correct! the password you entered the original password");
}
else if(a === ""){
    
      document.write("please enter the password")

   
}
else if (a !== password){
  document.write("incorrect password");
}
//6. This if/else statement does not work.Try to fix it: 
//  var greeting; 
//  var hour = 13;
//   if (hour < 18) { greeting = "Good day"; 
//   else greeting = "Good evening"; }

 solution 
  var greeting; 
  var hour = 13;
   if (hour < 18) { greeting = "Good day"; 
 document.write(greeting)}
   else{ greeting = "Good evening";
 document.write(greeting); }
 
  //7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
  // Implement the following case using if, else & else if statements
  time=+prompt("enter the time: ");
  if(time>=0000 && time<1200){
      document.write("Good morning !");
  } 
  else if(time>=1200 && time<1700){
      document.write("Good afternoon! ")
  }
  else if (time>=1700 && time<2100){
      document.write("good evening !");
  }
  else if(time>=2100 && time<=2359){
      document.write("Good night !");
  }

  //Assignment 13-15
 //1. Declare an empty array using JS literal notation to store student names in future
var arr=[];
//2. Declare an empty array using JS object notation to store student names in future
var arr={}

//3. Declare and initialize a strings array.
var arr=['pakistan','india','australia'];
//4. Declare and initialize a numbers array
var arr=[2,5,9,7];
//5. Declare and initialize a boolean array.
var arr=[true.false,false,true,false];
//6. Declare and initialize a mixed array.
var arr=[2,'ali','pakistan',4,true];
//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
//Show the listed qualifications in your browser like:

var arr=['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL.','PhD']
arr.length()



//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var arr=['Michael','John','Tony'];
var arr1=[320,230,480];
per1=(arr1[0]/500)*100;
per2=(arr1[1]/500)*100;
per3=(arr1[2]/500)*100;
 document.write("<h1>"+"Score of " + arr[0]+ " is " + arr1[0] + ".  percentage=  " +per1+ "%"+"<br>");
 document.write("Score of " + arr[1]+ " is " + arr1[1] + ".  percentage=  " +per2+ "%"+"<br>");
 document.write("Score of " + arr[2]+ " is " + arr1[2] + ".  percentage=  " +per3+ "%"+"<br>");

 //9. Initialize an array with color names. Display the array elements in your browser. 
 //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
  //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
  //c. Add two more color to the beginning of the array. Display the updated array in your browser.
   //d. Delete the first color in the array. Display the updated array in your browser.
   //e. Delete the last color in the array. Display the updated array in your browser.
    //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
 //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


 var arr=['red','pink','green','purple'];
console.log(arr)
 

a=prompt("which color do you want to add? ");
arr.unshift(a)
console.log(arr)
 

b=prompt("which color do you want to add? ");
arr.push(b);
console.log(arr)


arr.unshift("blue","brown");
console.log(arr)



arr.shift();
console.log(arr);



arr.pop();
console.log(arr)






s=+prompt("enter the index number");

arr.splice(s,1,"black");
console.log(arr)



o=+prompt("enter the index");
arr.splice(o,o+1);
console.log(arr)



//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
arr1=[320,230,480,120];
console.log("<h1>"+Scores of students: "+ arr1)
arr1.sort();
console.log("Ordered scores of student" +arr1)


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities=['karachi','Lahore','Islamabad','Quetta','Peshawar'];

var selectedCities=cities.slice(2,4);
document.write("<h1>"+"Cities list:" +"<br>" +cities +"<br>")
document.write("Selected list: " +selectedCities);




//12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This ", "is ", " my ", " cat"];
document.write("<h1>"+"Array: "+"<br>"+arr +"<br>");

document.write("String:"+ "<br>" arr[0]+arr[1]+arr[2]+arr[3]);


//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var array=[];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");

document.write("<h1>"+ "Devices" +"<br>"+array +"<br> <br>")

a=array.shift()
b=array.shift()
c=array.shift()
d=array.shift()
document.write("Out"+"<br>"+a+"<br>")

document.write("Out"+"<br>"+b+"<br>")
document.write("Out"+"<br>"+c+"<br>")
document.write("Out"+"<br>"+d+"<br>")


//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
var array=[];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");

document.write("<h1>"+ "Devices" +"<br>"+array +"<br> <br>")

a=array.pop()
b=array.pop()
c=array.pop()
d=array.pop()
document.write("Out"+"<br>"+a+"<br>")

document.write("Out"+"<br>"+b+"<br>")
document.write("Out"+"<br>"+c+"<br>")
document.write("Out"+"<br>"+d+"<br>")


//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

var array1=['Apple','Samsung','Motorolla','Nokia','Sony','Haier']
document.write("<h1>"+array1[0]+"<br>")
document.write("<h1>"+array1[1]+"<br>")
document.write("<h1>"+array1[2]+"<br>")
document.write("<h1>"+array1[3]+"<br>")
document.write("<h1>"+array1[4]+"<br>")
document.write("<h1>"+array1[5]+"<br>")


//Assignment 17-20  
//1. Declare and initialize an empty multidimensional array. (Array of arrays)
var arrays=[]
arrays=[
    [],[],[]
]
//2. Declare and initialize a multidimensional array representing the following matrix:
arrays.unshift([1,2,3],[0,1,2],[1,0,1]);
document.write(arrays);

//3. Write a program to print numeric counting from 1 to 10.
for  ( var i=1; i<=10; i++){
    document.write(i+"<br>")
}

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user
a=+prompt("enter the number to show its multipication")
j=+prompt("enter length multiplication table")
for(var i=1;i<=j;i++){
    document.write(a +" " +"*"+ " "+i+ " "+"="+ a*i+"<br>");

}


//5. Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for(var i=0;i<fruits.length;i++){

    document.write("<h1>"+fruits[i]+"<br>")
}
    
    
    for(var i=0;i<fruits.length;i++){
        
    document.write("Elements at index"+" "+i+" is "+ fruits[i]+"<br>")

}

//6. Generate the following series in your browser. See example output.
 //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 document.write("<h1>"+"Counting"+"<br>");
 for(var i=0;i<=15;i++){
    
     document.write( i+","+" ");
 }

 // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 document.write("<h1>"+"Reverse counting"+"<br>");
 for(var i=10;i>=1;i--){
    
     document.write( i+","+" ");
 } 
  //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
  document.write("<h1>"+"Even"+"<br>");
 for(var i=0;i<=20;i=i+2){
    
     document.write( i+","+" ");
 }

  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
  document.write("<h1>"+"Odd"+"<br>");
 for(var i=1;i<=20;i=i+2){
    
     document.write( i+","+" ");
 }
 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 document.write("<h1>"+"Series"+"<br>");
 for(var i=2;i<=20;i=i+2){
    
     document.write( i+"k"+ ","+" ");
 }

 //7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
 //Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example
 A=["cake","apple pie","cookie","chips","patties"]
 a=prompt("Welcome to ABC bakery .what do you want to order sir/maam?");
 for(i=0;i<A.length;i++){
 if(A[i]==a){
   document.write(a+" is available at index "+ i+ " in our bakery ")
   break
 }
 else{
     document.write("we are sorry" +a+" is not available at "+" in our bakery ")
     break
 }}


 //8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
 var A=[24,53,78,91,12]
 var largest= 0;
 
 for (i=0; i<=largest;i++){
     if (A[i]>largest) {
         var largest=A[i];
         
     
     }
    
     
 }
 document.write("<h1>"+"Array items: "+ A+"<br>");
 document.write("the largest number is " + largest)



 //9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
 var A=[24,53,78,91,12]
 var min=A[0]
 
 for(var i=1;i<A.length;i++){
     if(A[i]<min){
         min=A[i];
     }
     
    
 }
 document.write("<h1>"+"Array items: "+ A+"<br>");
     document.write("the Smallest number is " + min)





 //10. Write a program to print multiples of 5 ranging 1 to 100.
 for(var i=5; i<=100;i=i+5){
    document.write(i +" , ")
}
Assignment 21-25

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
 //Greet the user using his full name. 

 firstName=prompt("what is your first name");
LastName=prompt("what is your last name");

fullName=firstName+" "+LastName
alert(" welcome to "+fullName)

//2. Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser  

phoneModel=prompt("favourite mobile phone model");
document.write("My favourite phone is: "+ phoneModel+"<br>");
displayLength=phoneModel.length
document.write("Length of String: "+ displayLength)


//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
var a="Pakistani"
document.write("String: "+a+"<br>")
b=a.indexOf("n")
document.write('Index of n: ' + b)

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

a="Hello World";
document.write("String: " + a +"<br>")
b=a.lastIndexOf("l")
document.write("Last index of l: "+b)

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.   
var string="Pakistani"
document.write("String: "+string+"<br>")
index=string.slice(3,4)
document.write("Character at index 3 is: "+index)

//6. Repeat Q1 using string concat() method. 
firstName=prompt("what is your name")
LastName=prompt("what is your last name")
a=(firstName.concat(LastName))
alert("Welcome to"+ a)


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
var a="Hyderabad"
document.write("City: "+ a +"<br>")
var b=a.replace("Hyderabad","Islamabad")
document.write("After Replacement:"+b)

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//

var message = "Ali and Sami are best friends.They play cricket and football together." 
var a=message.replace("and","&")
document.write(a)



//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.   
a="472"
document.write("Value: "+a+"<br>")
document.write("Type: "+" "+typeof(a)+"<br>")
document.write("Value"+"<br>")
b=Number('472')
document.write("Type: "+ typeof(b))

//10. Write a program that takes user input. Convert and show the input in capital letters.  
userInput=prompt("write the input")
document.write("User Input: "+userInput+"<BR>")
b=userInput.toUpperCase()
document.write("Upper case: "+b)

//11. Write a program that takes user input. Convert and show the input in title case.
userInput=prompt("write the input")
document.write("User Input: "+userInput+"<BR>")
b=userInput[0].toUpperCase()+userInput.slice(1).toLowerCase()
document.write("Title case: "+b)

//12. Write a program that converts the variable num to string. 
//var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var d = 35.36;
var s = d + '';
s =s.replace('.', '');
s = parseInt(s);
document.write("Result: "+s)

//13. Write a program to take user input and store username in a variable.
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
userName=prompt("whaat is the username? ")
for(var i=0;i<=userName.length;i++){
    if(userName[i]==='@'||userName[i]===','||userName[i]==='.'||userName==='@'){
        alert("please enter a valid username")
    }
}

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
 //After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search.
 //Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:  

 A=["cake","apple pie","cookie","chips","patties"]
user=prompt("welcome to Abc bakery ,which item do you want to order");
for(var i=0;i<=A.length;i++){
    
    
    
    if (A[i]===user){
        alert(user+" is available at index "+i+" in our bakery")
        break
    }
    
     else{
        alert("we are sorry"+user+" is not available in our bakery")
       break
         }
        
        }

 }

 //15.Write a program to take password as an input from user. The password must qualify these requirements: 
 //a. It should contain alphabets and numbers 
 //b. It should not start with a number 
 //c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.
  //For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document
  input=prompt("enter the password")
  


  //16. Write a program to convert the following string to an array using string split method.
  // var university = “University of Karachi”; Display the elements of array in your browser. 
  var university="University of Karachi"
  var a=university.split('') 
for(var i=0;i<a.length;i++){
    console.log(a[i])
}


//17. Write a program to display the last character of a user input. 
user=prompt("write your country name?")
document.write("User Input: "+user +'<br>')
document.write("Last character of input : "+ user.slice(-1))


  user=prompt("write the password")
  //18. You have a string “The quick brown fox jumps over the lazy dog”.
  // Write a program to count number of occurrences of word “the” in given string. 
  var temp = "The quick brown fox jumps over the lazy dog";
  a=temp.toLowerCase()
  var count = (a.match(/the/g) || []).length;
  document.write("Text: "+temp+"<br>"+" There are "+count+" occurence of word 'the'")



  //Assignment 26-30   Maths method


  //1. Write a program that takes a positive integer from user & display the following in your browser.
  // a. number
    //b. round off value of the number 
    //c. floor value of the number 
    //d. ceil value of the number 

    Number=+prompt("Enter the number");
document.write("Number: "+Number+"<br>")
var round=Math.round(Number)
document.write("Round: "+round+"<br>")

var floor=Math.floor(Number)
var ceil=Math.ceil(Number)

document.write("Floor Value: "+floor+"<br>")
document.write("Ceil Value: "+ceil+"<br>")


//2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number 
//c. floor value of the number 
//d. ceil value of the number  



Number=+prompt("Enter the number");
document.write("Number: "+Number+"<br>")
var round=Math.round(Number)
document.write("Round: "+round+"<br>")

var floor=Math.floor(Number)
var ceil=Math.ceil(Number)

document.write("Floor Value: "+floor+"<br>")
document.write("Ceil Value: "+ceil+"<br>")

//3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


Number=+prompt("enter the number")
var absolute=Math.abs(Number)
document.write("the absolute value of -4 is "+absolute)


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:   
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")
var a=Math.random() * 6
a=Math.round(a)
document.write("random dice value: " + a+"<br>")

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
var toss=Math.random()*2
var a=Math.ceil(toss)
if(a===2){
    document.write(a +"<br>")
    document.write("Random coin Value: Head")
}
else{  document.write(a +"<br>")
document.write("Random coin Value: Tail")
}

//6. Write a program that shows a random number between 1 and 100 in your browser

a=Math.random()*100
a=Math.ceil(a)
document.write("the random number between 1 and 100 is: "+a)


//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

weight=prompt("Enter the weight")
a=parseInt(weight)

document.write("The weight of user is " +a+" kilograms "+ "<br>")


//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10.
// If the user input equals the secret number, congratulate the user.   


Number=Math.random()*10
SecretNumber=Math.ceil(Number)

Guess=+prompt("Enter the number")
if(Guess===SecretNumber){
    alert("You won")
}
else{
    alert("try again")
}


Assignment 31-34   Data method

//1. Write a program that displays current date and time in your browser.  
var a=new Date();
document.write(a)

//2. Write a program that alerts the current month in words. For example December. 
var months = ['January','February','March','April','May','June','July','August','September','October','November','december']
var a=new Date();
var b=a.getMonth();
document.write("Current month:" +months[b])

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var a=new Date();
var b=a.getDay();
document.write("Today is: " +days[b])


//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.  
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
var a=new Date();
var b=a.getDay();
 if (days[b]=='Saturday'|| days[b]=='Sunday'){
     alert("It's a fun day")

 }
 else {
     alert("it's a busy day")}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.  
var a=new Date();
var b=a.getDate();
if(b<16){
    alert("The fifteen days of month")

}
else{
    alert("the last days of month")
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
//assigns it to a variable that hasn't been declared beforehand. 
//Use any variable you like to represent the Date object. 
var a=new Date();
document.write("Current date: "+a+"<br>")
var b=a.getTime()
var c=b/(1000*3600)
document.write("Elapsed milliseconds since january 1,1970: "+ b+"<br>")
document.write("Elapsed minutes since january 1,1970: "+ c+"<br>")


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

var a=new Date();
var b=a.getHours();
if(b<12){
    alert("Its AM")
}
else{
alert('Its PM')
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
var a=new Date();
a.setMonth(11);
a.setDate(31);
a.setFullYear(2020)
a.setHours(00)
a.setSeconds(00)
a.setMinutes(00)
document.write("Later date: "+a);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
//Note: 1st Ramadan was on June 18, 2015 

var a=new Date();
a.setFullYear(2015);
a.setMonth(5);
a.setDate(18);
var b=new Date();
c=b-a;
c=c/(1000*3600*24)
document.write(c+" days has passed since 1st Ramadan,2015")

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.   

var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(50);
a.setHours(22);
a.setHours(16);
var b=new Date();
c=b-a;
c=c/(1000)
document.write("On reference date "+b+" <br>"+c+" had passed since beginning of 2015")


//11. Create a Date object for the current date and time. 
// the hours, reset the date object an hour ahead and finally display the date object in your browser
var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(08);
a.setHours(23);
a.setSeconds(16);
document.write("current date: "+a+"<br>")
b=a.getHours()-1
a.setHours(b)
document.write("1 hours ago, it was "+a)

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var a=new Date();
a.setFullYear(2015);
a.setMonth(11);
a.setDate(5);
a.setMinutes(09);
a.setHours(23);
a.setSeconds(37);
document.write("current date: "+a+"<br>")
b=a.getFullYear()-100
a.setFullYear(b)
document.write("100 year back, it was "+a)


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.   
age =+prompt("what's your age?")
var b=new Date()
document.write("age: "+ age+"<br>")
c=b.getFullYear()-age
document.write("your birth of years is "+c+"<br>")

//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
// a. Customer Name
// b. Current Month 
//c. Number of units 
//d. Charges per unit e. Net Amount Payable (within Due Date) 
//f. Late Payment Surcharge 
//g. Gross Amount Payable (after Due Date) Where,  



var CustomerName= "ABC Customer";
var month='Februaury';
var NumberOfUnits=410;
var ChargesPerUnits=16
var LateCharges=350

var amountPayable=NumberOfUnits*ChargesPerUnits;
var GrossPayable=amountPayable+LateCharges;

document.write("Customer name: "+ CustomerName+"<BR>")

document.write("Month: "+ month+"<BR>")

document.write("Number of units: "+ NumberOfUnits+"<BR>")

document.write("Charge per units: "+ ChargesPerUnits+"<BR> <br>")



document.write("Net Amount Payable (within due date): "+ amountPayable+"<BR>")
document.write("Late payament surcharge "+ LateCharges+"<BR>")

document.write("Gross Amount Payable(after due date): "+ GrossPayable+"<BR>")


// Assignment 35-38 FUNCTION


//1. Write a function that displays current date & time in your browser. 
function DateTime(){
    a=new Date()
    document.write(a)
}

DateTime()


// 2. Write a function that takes first & last name and then it greets the user using his full name.

function Name(First,Last){
    var fullName=First+" "+Last;
    document.write(fullName)


}

Name('shaheryar','khan');

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 


function add(){
    a=+prompt("enter the first number")
    b=+prompt("enter the second number")
    return document.write(a+b)
}

add()


//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
//Return and show the desired result in your browser.   
num1=+prompt("enter the first number")
num2=+prompt("enter the second number")
opr=prompt("enter the operator")
function calc(){
    if(opr==='+'){
        return num1+num2
}

   else if(opr==='-'){
       return num1-num2
   }
   else if(opr==='*'){
       return num1*num2
   }
   else if(opr==='/'){
       return num1/num2
   }
}

var result=calc()
document.write(result)



//5. Write a function that squares its argument.   
function square(a,b){
    a=Math.pow(a,2)
    b=Math.pow(b,2)
    document.write("the square of arguments are "+ a +" and "+b)

}
square(2,3)

//6. Write a function that computes factorial of a number. 
function fact(a){
    if (a===0){
        return 1
    }
    else{
        return a*fact(a-1)
    }

}

a=fact(5)
document.write(a)

//7. Write a function that take start and end number as inputs & display counting in your browser.   
function counting(){
    firstNumber=+prompt("enter the start number")
    secondNumber=+prompt("enter the end number")
    for(i=firstNumber;i<=secondNumber;i++){
        document.write(i+"<br>")
    }

}

counting()

//8. Write a nested function that computes hypotenuse of a right angle triangle.  
//Hypotenuse2 = Base2 + Perpendicular2 
base=+prompt("wht is the value of base")
perpendicular=+prompt("what is the value of perpencidular")



function Hypotenuse(){
    return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
}
x=Hypotenuse()
document.write(x)
   


//9. Write a function that calculates the area of a rectangle.     
 //A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variable
  //i
 function area(width,height){
    return width*height
}
area=area(3,4)
document.write(area)
  
//ii
function area(width,height){
    return width*height
}
area=area('a','b')
document.write(area)


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

function palindrome(str){
    var check=""
    for(var i=str.length - 1; i>=0;i--){
    check += str[i]

}
if(check===str){
    document.write(str +"   is palindrome")
}
else{
    document.write(str + " is not palindrome word")
}}

palindrome('pakistan')


//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
function firstLetter(str){
    a=str.slice(0,1).toUpperCase()
    b=str.slice(1)
    return a+b

}
x=firstLetter("the quick brown fox")
document.write((x))


//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));


//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'   



function occurence(string,letter){
    var count = (string.match(/o/g) || []).length;
    document.write("occurence: "+count);
 }
occurence("JSresourceS.com","o")

//14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. 
//Create a function called calcCircumference: • Pass the radius to the function. 
//• Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea: • Pass the radius to the function. 
//• Calculate the area based on the radius, and output "The area is NN".  
//Circumference of circle    =     2πr
// Area of circle       =     πr2 


function calcCircumference(radius){
    circumference= 2*3.142*radius
    return document.write("The circumference is: "circumference)
}
calcCircumference(2)




function calcArea(radius){
    Area= 3.142*Math.pow(radius,2)
    return document.write("The Area is: "+Area)
}
calcArea(4)

//function ...while .... do while
//Assignment 38-42


//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

var c;
function power(a, b) {
    c = Math.pow(a, b)
    document.write(c);
}

power(3, 2)


//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, … 
function leapYear(year) {
    if (year % 4 === 0) {
        document.write(year + " is a leap year")

    }
    else if (year % 400 === 0) {
        document.write(year + " is a leap year")


    }
    else {
        document.write(year + " is not leap year")
    }
}
leapYear(2004)


//3. If the lengths of the sides of a triangle are denoted by a, b, and c,
// then area of triangle is given by area = S(S − a)(S − b)(S − c) 
//where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 function

var a = +prompt("enter the first number")
var b = +prompt("enter the second number")
var c = +prompt("enter the third number")

function SidesOfTraingle() {
    S = (a + b + c) / 2

}

function area() {
    SidesOfTraingle()
    c = S - a
    d = S - b
    e = S - c
    S = d * e * c

    document.write(S)
}
area()





//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. 
//there should be 3 functions one is the mainFunction and other are for average and percentage.
// Call those functions from mainFunction and display result in mainFunction.  

var a = +prompt("enter the marks you obtained")
var b = +prompt("enter the  marks you obained")
var c = +prompt("enter the  marks you obtained")

function main() {
    average()
    document.write("average: " + average + " marks" + "<br>")

    percentage()
    document.write("percentage: " + percentage + "%")




    function average() {
        average = (a + b + c) / 3

    }


    function percentage() {
        percentage = ((a + b + c) / 300) * 100
    }
}
main()



//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality.
// You can code for single character as of now. 
user = prompt("enter the character")
String = "my name is khan"
function findIndex() {
    for (var i = 0; i < String.length; i++) {
        if (String[i] === user) {
            document.write(i)
        }
    }
}

findIndex()


//6. Write a function to delete all vowels from a sentence.
// Assume that the sentence is not more than 25 characters long.
function removeVowel(text) {
    if (text.length < 25) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text[i]
            if ("aioue".match(c.toLowerCase()) == null) {
                result += c;

            }

        }
    }
    document.write("remove vowel: " + result)
    return result
}

removeVowel("pakistan is good country")



//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 
//For example, in the sentence 
//“Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

document.write(findOccurrences());


//8. The distance between two cities (in km.) is input through the keyboard.
// Write four functions to convert and 
//print this distance in meters, feet, inches and centimeters.  

a = +prompt("write the distance between  two cities in km")

function kmToMeter() {
    return a * 1000

}

document.write("km to meter: " + kmToMeter() + "meter" + "<br>")
function kmToFeet() {
    return a * 3280

}

document.write("km to Feet: " + kmToFeet() + "Feet" + "<br>")

function kmToInches() {
    return a * 39370

}

document.write("km to Inches: " + kmToInches() + "Inches" + "<br>")

function kmToCentimeter() {
    return a * 100000

}

document.write("km to Centimeter:" + kmToCentimeter() + "Centimeter" + "<br>")


//9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for 
//every hour worked above 40 hours. 
//Assume that employees do not work for fractional part of an hour.  

hours = +prompt("how many hours you worked above normal work? ")
function overtimePay() {
    if (hours > 40) {
        a = hours - 40

        return a * 12
    }
    else {
        return 0
    }

}
document.write("overtime pay of employee: " + overtimePay())

//10. A cashier has currency notes of denominations 10, 50 and 100.
// If the amount to be withdrawn is input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer
amount = +prompt("enter the amount you want to withdraw")
function withDrawAmount() {

    a = amount / 100
    b = parseInt(a)

    c = (amount % 100) / 50
    d = (parseInt(c))
    e = ((amount % 100) % 50) / 10
    document.write("you will have  " + b + "   hundred notes   " + d + "   fifty notes   " + e + "     ten notes")
}
withDrawAmount()


    //EVENTS   ASSIGNEMNT 43-48


    //1. Show an alert box on click on a link.
    // 2. Display some Mobile images in browser. 
    //On click on an image Show the message in alert to user

    < div style = "display: flex; margin: 40px;justify-content: space-around;" >
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')" > </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')"> </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')"> </div>
        <div style="border: 1px solid black;"><img onclick="alert('thanks for purchasing a phone from us')" > </div>

 </div >
    <div style="display: flex; margin: 40px;justify-content: space-around;">
        <div><a href="#" onclick="alert('THE price of this mobile is: 27000/-')">Oppo A5 2020</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 28000/-')">sony Z1</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 20000/-')">INFINIX A5</a>
        </div>

        <div>
            <a href="#" onclick="alert('THE price of this mobile is: 25000/-')">REDMI 5C </a>
        </div>
    </div>





    //3. Display 10 student records in table and each row should contain a delete button.
    // If you click on a button to delete a record, entire row should be deleted. 





    <p>Index Name class</p>
    <table id="myTable">

        <tr>
            <td>
                0 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                1 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                2 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                3 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                4 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                5 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                6 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                7&emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>
        <tr>
            <td>
                8 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        <tr>
            <td>
                9 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button></span>
            </td>
        </tr>

    </table>

    <script>
        function Myfunction(r) {
            var i = r.parentNode.parentNode.rowIndex;

         document.getElementById("myTable").deleteRow(i);
        }</script>


   //4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.


   <img style="width: 500px; height: 500px; position: absolute; top: 20%; left: 20%;"
    onmouseover="this.src='https://i.pinimg.com/originals/e6/5b/43/e65b435feaa72fff13b067737bab8b06.jpg'"
    onmouseout="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWM0cofC9Hrc6wwRCP8e4854_Xo38BnfS9JQ&usqp=CAU'"
    src="https://i1.sndcdn.com/avatars-000380297672-xn8lfm-t500x500.jpg " >



//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button.
//And show updated counter value in browser. 



<h1 style="text-align: center;">Counter</h1>
    <div style=" display: flex; margin:20px 20px 20p 20px ;padding-left: 700px;">
  <button  style="width: 50px; height: 50px;"onclick="increase()">+</button>
  <h1 style="margin:0px 40px 0px 40px; font-size: 50px;"id="btn">0</h1>
  <button id="btn1" style="width: 50px; height: 50px;"onclick="decrease()">-</button>
</div>
<script>
function increase(){
    var foo= document.getElementById("btn").innerHTML
    foo++;
    document.getElementById('btn').innerHTML=foo;

}

function decrease(){
    var doo=document.getElementById("btn").innerHTML
    doo--;
    document.getElementById('btn').innerHTML=doo
}

</script>
// Create a signup form and display form data in your web page on submission


<div style="width: 400px; padding: 10% 0 0; margin: auto;"class="login-page">
        <div class="form">
            <form action="#" method="post" id="form_id" style="position: relative; z-index: 1;text-align: center; background-image:url(https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)">
                <h1 style="color: honeydew;">Sign up form</h1><label style="color: green; padding: 15px; font-size: 30px;font-weight: bold; margin-left: 5px;">Email &emsp;</label>
           
                <input id="email" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="email" placeholder="email" ><br><label style="color: green; padding: 15px; font-size: 30px; font-weight: bold;">Password</label>
                <input id="password" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="password" placeholder="password"><br><label style="color: green; font-weight: bold; padding: 15px; font-size: 30px;">password</label>
                <input id="password" style="padding: 15px; margin: 0 0 15px; font-size: 14px;" type="password" placeholder="repeat password"><br>
                <button onclick='submit_by_id()' style="padding: 15px; margin: 0 0 15px; background-color: darkgreen; color: white; font-size: 20px;">Submit</button>
            </form>
        </div>
    </div> 


    <script>
    function submit_by_id() {
    var name = document.getElementById("email").value;
    var email = document.getElementById("password").value;
    if (validation()) 
    {
    document.getElementById("form_id").submit();
    alert(" Email : " + name + " password : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    }
    </script>



    //2. Suppose in your webpage there is content area in which you have entered your item details,
    // but user can only see some details on first look.
    // When user clicks on “Read more” button, full detail of that particular item will be displayed.

    <p id="pera" >India has become the third country to record
    <a href="javascript:void(0)" onclick="readMore()" > read More</a></p>
   
   
    <script >  function readMore(){
    
        var text="India has become the third country to record more than 1m coronavirus infections, following the US and Brazil, as it reported 34,956 new cases in the past 24 hours, taking the national total to 1,003,832.New peaks continue to appear around the world, including an alarming rise in the Brittany region of France.Amid evidence that the disease was taking hold in poorer, rural areas of India with less effective public healthcare, the latest tally prompted renewed concerns about the country’s ability to cope with rising infections.The figures have been released after a week in which authorities in India were forced to impose new lockdowns, including fresh restrictions on 128 million people in the state of Bihar, which came into force on Thursday.The continuing and escalating outbreaks, on top of record cases in the United States – which passed 75,000 daily cases in the last count – have dampened hopes that the pandemic is anywhere close to being brought under control, even as researchers race to find a viable vaccine."
        var peragraph=document.getElementById('pera')
        peragraph.innerHTML=text
    }
        
    </script> 
    
    //3. In previous assignment you have created a tabular data using javascript. 
    //Let’s modify that. Create a form which takes student’s details and show each student detail in table. 
    //Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. 
    //On click on edit button, a hidden form will appear with the values of that row.  
   

    

    <body>
    <p>Index Name class</p>
    <table id="myTable">

        <tr>
            <td>
                0 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                    <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                1 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                            <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                2 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                3 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                4 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                5 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Jhonne
                    10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                6 &emsp13;&emsp13;&emsp13;&emsp13;<span>&ensp;Doe &emsp;
                    2</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
         <tr>
            <td>
                7&emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Mark
                    &emsp;10</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr>
        <tr>
            <td>
                8 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;James
                    &emsp;8</span>&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        <tr>
            <td>
                9 &emsp13;&emsp13;&emsp13;&emsp13;<span>&emsp13;Torri
                    &emsp;4</span>&ensp;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;&emsp13;<span><button
                        onclick="Myfunction(this)">delete</button>
                        <button onclick="EditFunction(this)">Edit</button></span>
            </td>
        </tr> 

    </table>

    <script>
        function Myfunction(r) {
            var i = r.parentNode.parentNode.rowIndex;

         document.getElementById("myTable").deleteRow(i);
        }
        function EditFunction(f){
            var a=f.parentNode.firstChild.nodeValue;
            var EditValue=prompt("enter edit value",a)
            f.parentNode.firstChild.nodeValue=EditValue
        
        }
        
        </script>



// ASSIGNMENT 53-57  EVENTS

// 1.	Consider you have 4 images in a file as shown below: 


//Now When you click on an image it should display in a modal.
<style>
    .BigImage{
        height: 400px;
        width: 450px;
    }
    .img111{
        height: 200px;
        width:200px;
    }

</style>
</head>

<body style="text-align: center;">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   


  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.15752-9/109401301_618700685424634_1245468504765277547_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=DZNVhWtCa5wAX-Ta6ea&_nc_ht=scontent-mrs2-1.xx&oh=4973a61dffb818d4f2139cdd990431e8&oe=5F3C540C">
   <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.15752-9/108592194_573078689985578_3693272520991813394_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=6cr75RU9ceAAX_sBVZ_&_nc_ht=scontent-mrs2-2.xx&oh=c5d9b2820fdfb4d21790689a5124eb64&oe=5F3F78F6" alt="">
  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal "src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.15752-9/109545574_324191688969765_647437093853055875_n.jpg?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=TayqqmVJQswAX-J3SXH&_nc_ht=scontent-mrs2-2.xx&oh=737ab811ca69a9e40f2e42a9012429ed&oe=5F3C8B36" alt="">
  <img class="img111" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.15752-9/51161414_388799881923041_5130422590661197824_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=Z6hn0l1TEm4AX8VN6iH&_nc_ht=scontent-mrs2-1.xx&oh=3238235bffb09cce4fbff5b6a73aaaf5&oe=5F3DA430" alt="">
   
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      
        <div class="modal-body">
          <img class="BigImage" id="modalImage" src="">

        </div>
        
      </div>
    </div>
  </div>
  <script >
      function showImage(e){
    var modalImage=document.getElementById("modalImage");
    modalImage.src=e.src
}
  </script>










 {/* //2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). */}
 {/* //  On each click on “zoom in”(+) , add 10px in font size of paragraph. */}
{/* //And on each click on “zoom out”(-) , minus 10px in font size of paragraph. */ */}
<div style="display: flex; ">
            <button style="width: 50px" onclick="Zoomin()">+</button>
            <p id ="pera" style="margin: 0px 20px 0px 20px;" > Shah Rukh Khan, also known by the initialism SRK, is an Indian actor, 
                film producer, and television personality. Referred to in the media as the "Baadshah of Bollywood", 
        </p><button style="width: 50px" onclick="ZoomOut()">-</button>
       </div>

       <script>
      
       function Zoomin(){
  var zoom =document.getElementById("pera");
  zoom.style.fontSize='2em'
  
}


function ZoomOut(){
   out= document.getElementById("pera")
   out.style.fontSize='1em';
    
}
       </script>



  // Assignment 58-67  DOM


  //1. Consider you have following code snippet: 
  //(Copy it in your HTML file) 
  <div> 
      <h1> DOM </h1> 
      <div id='form-content' class='content'>
       <label for='first-name'>First Name</label> 
       <input type='text' id='first-name' /> 
       <label for='last-name'>Last Name</label>
        <input type='text' id='last-name' /> 
        <label for='email'>Email</label> 
        <input type='text' id='email' />
         </div> <div id='main-content'
         class='content'> <p class='render'> First Name : Alex</p> 
         <p class='render' id='lastName'>Last Name: Bank</p> 
         <p class='render'> Email : alexbank@example.com</p>
          <p class='render'> Country : Pakistan </p>
           <p class='render'> contact : +92 300 1234567</p>
            </div> 
    </div> 
{/* // i. Get element of id “main-content” and assign them in a variable.
 // ii. Display all child elements of “main-content” element.
 // iii. Get all elements of class “render” and show their innerHTML in browser.
    // iv. Fill input value whose element id first-name using javascript. 
    //v. Repeat part iv for id ”last-name” and “email”.  */}


{  var a=(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]);
ii.   console.log(a.childNodes)
iii.  var b=document.getElementsByClassName('render')
for(i=0; i<b.length;i++){
  console.log(b[i].innerHTML)
}


iv.console.log(
    document.getElementById('first-name').value='shaheryar')
  
  
 v. console.log(
    document.getElementById('last-name').value='khan')
  
    console.log(
      document.getElementById('email').value='shaheryar724gmail.com')


    //   2.  use HTML code of question 1 and  show the result on browser. 
    //   i. What is node type of  element having id “form-content”. 
    {i.The nodeType property returns the node type, as a number, of the specified node. If the node is an element node, the nodeType property will return 1.
        If the node is an attribute node, the nodeType property will return 2. If the node is a text node, the nodeType property will return 3
         now we have element node so it gives 1
    //   ii. Show node type of element having id “lastName” and its child node.
    ii.
     console.log(document.getElementById('lastName').nodeType)

     console.log(document.getElementById('lastName').childNodes)


    //    iii. Update child node of element having id “lastName”. 
    iii.var textnode = document.createTextNode("khan");


     var item = document.getElementById("lastName").childNodes;
     
     
     item.replaceChild(textnode, item.childNodes);

    //    iv. Get First and last child of id “main-content”. 
    
    iv.console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1]);
     
    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].lastChild);
    //    v. Get next and previous siblings of id “lastName”. 
    v.console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].previousSibling);
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].nextSibling);

    //    vi. Get parent node and node type of element having id “email”


    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[4].parentNode);
    console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[4].nodeType);


    
   

     
     


