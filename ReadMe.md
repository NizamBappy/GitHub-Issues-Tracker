1️⃣ What is the difference between var, let, and const? 

Var: Var uses to declare a variables in js before ES6. It's the old way.
    *Function scoped.
    *To do Re-declared.
    *To do Re-assigned.
    *Hoisted.
    *Not Block Scoped.

Let: Let uses to declare a variable in js. It was introduced in ES6.
    *Block Scoped.
    *Can't re-declare.
    *To do Re-assigned.
    *Hoisted but maintain TDZ(Temporal Dead Zone).

Const: When we don't to change the variable, we can use const.
    *Block Scoped.
    *Can't Re-declared.
    *Can't Re-assigned.
    *Must be initialized when declare.
    *To do update or modification for array, object.
    *Hoisted but maintain TDZ(Temporal Dead Zone).

Example:
    // var example
        var x = 10;
        var x = 20;   // Re-declaration allowed
        x = 30;       // Update allowed
        console.log(x); // Output: 30


    // let example
        let y = 10;
        // let y = 20; // Re-declaration Not allowed
        y = 25;       // Update allowed
        console.log(y); // Output: 25


    // const example
        const z = 10;
        // z = 20;     // Re-assignment NOT allowed
        console.log(z); // Output: 10

        const number = [2,5,7];
        number = [2,5,7,8] Re-declaration Not allowed
        number.push(9)  //Allowed
        console.log(number);  //output:[2,5,7,9]

2️⃣ What is the spread operator (...)?

Answer: Spread operator(...) is a special syntax of ES6, that expand the elements from an array or object into individual elements.

Example: 
     const numbers = [10,20,30]
     function sum(x,y,z){
        console.log(x+y+z)
    }
    sum(numbers)  //output:10,20,30 undefined undefined

    (Here first parameter of function ti be numbers array others parameters undefined)

    sum(...numbers) //output: 60
    (If declare with spread operator numbers array's value expand 3 parameters )

3️⃣ What is the difference between map(), filter(), and forEach()?
Answer:
Map(): The map() is a ES6 method, that create a new array applying function to each element of the original array. It like a loop.

Example:
    const numbers = [1,2,3,4]
    const doubleIt = numbers.map(number=> number*2)
    
    console.log(doubleIt);//Output:[ 2, 4, 6, 8 ];

Filter(): The filter()is a ES6 method, that return a new array, when fullfil a specific condition. If condition not fullfil it return Empty array.

Example:
    const numbers = [1,2,3,4]
    const evenNumbers = numbers.filter(number => number % 2 === 0);

    console.log(evenNumbers); // Output:[2,4]

    const numbers = [1,3,5,7]
    const evenNumbers = numbers.filter(number => number % 2 === 0);

    console.log(evenNumbers); Output:[];

ForEach():The forEach() is a ES6 method, that used to run a function for every element in an array. Does not return anything, does not change the original array.

Example: 
    const fruits = ["Apple", "Mango", "Banana"];

    fruits.forEach((fruit) => {
    console.log(fruit);
    });
    Output: Apple
            Mango
            Banana

4️⃣ What is an arrow function?
Answer:An arrow function is a shorter form of function expression where keyword is used by an arrow(=> equal and greater than sing). It is a method of ES6.

If there are multiple parameters in arrow function, then all parameters have to keep in bracket, if there is only one parameter can use bracket or not.

Example:
    const add = (x, y) => x + y;

    const getPI = () => Math.PI;
    console.log(getPI());//Output:3.141592653589793

5️⃣ What are template literals?

Answer:Template Literals is a  powerful feature of ES6 that allows  to create strings and add variables.It  written using `` (backticks) symbols.We commonly use it in front-end projects when generating HTML dynamically.

    * Variables & expressions can be easily stored in String

    * Code is easier to read

    * Multi-line strings are easier

Before template literals we use /n for writing multiline string.