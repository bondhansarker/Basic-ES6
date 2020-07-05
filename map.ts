let myMap = new Map();  //declare a map

let object_1 = {};
let object_2 = {};

myMap.set("name","Bondhan"); //insert value in map 
myMap.set("age","25");
myMap.set(object_1,"1");
myMap.set(object_2,"2");
myMap.delete(object_2); // remove the map key

console.log(myMap.get("name")); // get the key value
console.log(myMap.has("name")); // check map key contains a value or not

myMap.forEach(mappIterate); //iterate through a method

function mappIterate(value,key,callingMap){
  console.log(`${key} => ${value}`);
}

myMap.clear(); //clear the map 


let newMap =new Map([
    ["name","Bondhan"],
    ["age","25"]
]);


for(let key of newMap.keys())
{
    console.log(key);
}

for(let value of newMap.values())
{
    console.log(value);
}

for(let entry of newMap.entries())
{
    console.log(`${entry[0]} -> ${entry[1]}`);
}



