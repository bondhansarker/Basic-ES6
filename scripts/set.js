var mySet = new Set(); //declare set
var object1 = {};
var object2 = {};
mySet.add("Bondhan"); //insert value in set
mySet.add("25");
mySet.add(object1);
mySet.add(object2);
console.log(mySet.size); // check set size
mySet.delete("25"); // remove a value from set
if (mySet.has("Bondhan")) //Check set contains a value or not
 {
    console.log("Set contains Bondhan");
}
else {
    console.log("set dumped me");
}
mySet.clear(); //clear the set
var newSet = new Set(["10", "20", "30"]);
newSet.forEach(settIterate); //iterate a set by a method 
function settIterate(key, value, callingMap) {
    console.log(value);
}
