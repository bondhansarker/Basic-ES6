let colorArray = ["Red","Green","Blue"]; 

let [first,second,third] = colorArray; //Destructuring an array
let [f1,...elements] = colorArray; //get rest of the value as an array
let [,,last] = colorArray; //get the last value


console.log(first);
console.log(elements);
console.log(f1);
console.log(last);

let onePerson = {
    myName: "Bondhan",
    age: 25,
    sex: "male"
}

let {myName,age,sex} = onePerson; //Destructuring an object
let {myName:N,age:A,sex:S} = onePerson; //Destructuring an object
console.log(myName);
console.log(A);