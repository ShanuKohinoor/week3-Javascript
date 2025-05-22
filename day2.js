//function declaration
     function Hi(){
        console.log('HELLO');
     }
     Hi();  
     
     // if we call before declaration also it will work.
     sayHello(); //We can call anywhere in the code. This works because of hoisting.
     function sayHello(){
        console.log('HELLO');
     }

//Function expression :- Anonymous function assigned to the variable. They are not hoisted. so must define before calling.

      const sayGoodbye = function() {
      console.log("Goodbye!");
      };

      sayGoodbye(); // Output: Goodbye!
 
//Arrow Function:- Provide shorter syntax




// Anonymous function:- without name

     const sayHi = function () {
    console.log ('Hello World');

    }
    setTimeout(sayHi,5000);




//Named function Expression:- Has name,can be declared using function keyword followed by a name,or assigned to variables or object properties.
                                // can be reused. Here greet is the name of the function.
    function greet(){
        console.log("Hello,World")
    }
    greet();




//Callback Function:-  //passed as an argument to another function.And later called inside main function
   function greetUser(name,callback){
    console.log("Hi" + name)
   }
     
     
// First-Class Functions:- 
function add(a, b) {
  return a + b;
}

const sum = add;
console.log(sum(5, 3)); // Output: 8


// Higher-Order Functions
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10


//Factory Function:- returns object with an assigned value



//Generator Function
