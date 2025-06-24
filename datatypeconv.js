
let state="33a"

let val=Number(state)//Number is a function to conert in a number datatype;
console.log(val);

console.log(("1" + 2 +2))

let tempp=true
let temp1=String(tempp)

console.log(typeof(2==2)); //boolen

let var1;
console.log(var1);

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id)
console.log(typeof anotherId)

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); // ✅ Outputs: "bigint"

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


console.log(gameName.split('-'));