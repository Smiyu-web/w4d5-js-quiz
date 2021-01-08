/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 1:
Which value does x have after
execution of the following code?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
let x = "Pooh";
let y = "Tigger";
let z = y;
y = x;
x = z;

// answer
x = "tiger";
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 2:
Write a function secondIndexOf, taking two strings
and determining the second occurrence of the second
string in the first string. If the search string
does not occur twice, -1 should be returned.
 
Example: secondIndexOf('White Rabbit', 'it') should return 10.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function secondIndexOf(s1, s2) {
  let result = s1.toLowerCase().indexOf(s2);
  return s1.toLowerCase().indexOf(s2, result + 1);
};

console.log(secondIndexOf('White Rabbit', 'it'));
console.log(secondIndexOf('White Rabb', 'it'));

 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 3:
Write a function equals that checks two values
for strict equality. If the two values are equal,
the string 'EQUAL' should be returned. If they
are unequal, you should get 'UNEQUAL'.
 
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2)
should return 'UNEQUAL'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function equals(a, b) {
 // Initialize a variable with 'UNEQUAL'.
 // Use 'if' to set the variable to 'EQUAL' if necessary.
 // Return the variable.

 const unequal = "UNEQUAL";

 if (a === b) {
   return "EQUAL";
 } else {
  return unequal;
 }
}

console.log(equals(1, 1));
console.log(equals(1, 2));
console.log(equals(1, '1'));


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 4:
Write an if/else statement with the following condition:
 
If the variable age is greater than 18, output "Old enough",
otherwise output "Too young".
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

const age = 18;
if (age >= 18) {
    console.log("Old enough!");
} else {
    console.log("Too young");
}

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 5:
Write a function repdigit that determines whether a two-digit
decimal is a repdigit or not. If the decimal is a repdigit,
'Repdigit!' should be returned, otherwise 'No Repdigit!'.
 
Example: repdigit(22) should return 'Repdigit!' and repdigit(23)
should return 'No Repdigit!'.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function repdigit(n) {
  // Calculate the ones digit
  // of n with modulo 10.
  // Calculate the tens digit
  // of n by dividing by 10
  // and rounding down.
  // Compare ones and tens digits.
  let num10 = Math.floor(n / 10); // 10
  let num1 = n % 10; // 1

  if (num1 == num10) {
    return "Repdigit";
  } else {
    return "No Repdigit"
  }
}

repdigit(22);
repdigit(23);
repdigit(33);
repdigit(43);
repdigit(63);
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 6:
Write a function unequal that checks 3 values for strict inequality.
The function should return true if all three parameters are strict
unequal. Otherwise false.
 
Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2)
should return false.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
function unequal(a, b, c) {
 //return a !== b && ...
 if (a !== b && b !== c) {
   return true
 } else {
   return false;
 }
}

console.log(unequal(1, 2, 3));
console.log(unequal(1, 1, 2));
console.log(unequal(1, 1, 1));
console.log(unequal(3, 7, 1));
 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 7:
Which of these alerts are going to execute?
 
What will the results of the expressions be inside if(...)?
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
 
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// answer 
// if (-1 || 0) alert( 'first' );
// if (null || -1 && 1) alert( 'third' );

 
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Question 8:
Write the code which asks for a login with prompt.
 
If the visitor enters "Admin", then prompt for a password,
if the input is an empty line or Esc – show “Canceled”, if it’s
another string – then show “I don’t know you”.
 
The password is checked as follows:
 
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
 
Refer to the schema below:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

const code = prompt("Enter a code for login");

if (code === "Admin") {
  const password =  prompt("Enter your password");

  if (password === "TheMaster") {
    console.log("Welcome"); 
  } else if (password === null || password === '') {
    console.log("Canceled"); 
  } else {
    console.log("Wrong password"); 
  }

} else if (code === null || code === '')  {
  console.log("Canceled"); 
} else {
  console.log("I don't know you"); 
}



