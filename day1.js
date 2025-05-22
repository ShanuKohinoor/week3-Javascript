// Variable Reassignment and Redeclaration
// Declare a variable
var n;

//Redeclare this variable
var n;

//Assign it a value
n=6;

//Reassign it another value
n=7;

//Declare a variable and assign it a value
var m=6;

//var can redeclare and reassign
     var greeting="Hello"; //Declaration using var
     console.log(greeting); //Output:Hello

    //Reassign the variable
    greeting= "Hi";
    console.log(greeting); //Output:Hi

    //Redeclaring the same variable using var
    var greeting= "Hey";
    console.log(greeting); //Output:Hey

//Let can be reassign but cannot be redeclare
     let score= 10; //Declaration using let
     console.log(score); //Output: 10

     score= 20;  //Reassign the variable
     console.log(score); //Output:20

     // let score= 30; //Trying to redeclare
                    // But showing Syntax Error: score has already declared.

// Const cannot be reassign or redeclare
    const age= 25;
    console.log(age);  //Output:25

    //Reassigning const variable-not allowed
    //age= 30; //TypeError
    //Redeclaring const variable in same scope-not allowed
    // const age= 40; //syntaxError

//SCOPE
     //GLOBAL 
       let city = "London"; // Global variable

       function showCity() {
       console.log("Inside function: " + city); // Can access global variable
       }

       showCity();
       console.log("Outside function:" + city); // Can access here too    
      //LOCAL
       //Block scope {}
        {
         let age = 25;
         const city = "London";
         console.log(age);  // Work only inside the block
         console.log(city); // Work only inside the block
        }

        console.log(age);  //  Error. wont work outside the block
        console.log(city); // Error. wont work outside the block
    
         //Function scope

        function sayHello() {
        var message = "Hello!";
        console.log(message); //  Works inside
        }

        //sayHello();
        //console.log(message); //   wont work outside the function
       
    //implicit
        let result = "5" + 2;  
        console.log(result);         // "52" (number 2 is converted to string)
          
        let result1 = "5" - 2;
        console.log(result1);        // 3 ( - operator only works with numbers.So string 5 is converted to number 5)

        let result2 = true + 1;  
        console.log(result2);         // 2 (true becomes 1) 

        let result3= false + 1;
        console.log(result3);        //1 (false coereced to 0) when '+' operator b/w a boolean & a number,Javascript performs implicit types coercion.

        console.log(null + 1);       //  1 (Null is treated as 0)
        console.log(null * 5);       //  0 
  
        console.log("10" == 10);            // true → string "10" is converted to number
        console.log("10" === 10);         //  false (The === operator(strict equality) does not perform type coercion. It checks for both value and type equality.


//Explicit Type Conversion (Manual):-By manually.
                
    //String Conversion
        let num = 100;
        let str = String(num);      // turns number into string "100"
        console.log(str);           // "100"
        console.log(typeof str);    // string

    //Number Conversion
        let str1 = "45";
        let num1 = Number(str1);      // turns "45" into number 45
        console.log(num1);               // 45
        console.log(typeof num1);   // number

    // Boolean Conversion
        let value = Boolean(0);          // false
        console.log(value);                // false

        let name = Boolean("Shanu");        // true (non-empty string = true)
        console.log(name);                      // true