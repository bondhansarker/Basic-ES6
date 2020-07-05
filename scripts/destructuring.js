var colorArray = ["Red", "Green", "Blue"];
var first = colorArray[0], second = colorArray[1], third = colorArray[2]; //Destructuring an array
var f1 = colorArray[0], elements = colorArray.slice(1); //get rest of the value as an array
var last = colorArray[2]; //get the last value
console.log(first);
console.log(elements);
console.log(f1);
console.log(last);
var onePerson = {
    myName: "Bondhan",
    age: 25,
    sex: "male"
};
var myName = onePerson.myName, age = onePerson.age, sex = onePerson.sex; //Destructuring an object
var N = onePerson.myName, A = onePerson.age, S = onePerson.sex; //Destructuring an object
console.log(myName);
console.log(A);
