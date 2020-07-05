var myMap = new Map(); //declare a map
var object_1 = {};
var object_2 = {};
myMap.set("name", "Bondhan"); //insert value in map 
myMap.set("age", "25");
myMap.set(object_1, "1");
myMap.set(object_2, "2");
myMap.delete(object_2); // remove the map key
console.log(myMap.get("name")); // get the key value
console.log(myMap.has("name")); // check map key contains a value or not
myMap.forEach(mappIterate); //iterate through a method
function mappIterate(value, key, callingMap) {
    console.log(key + " => " + value);
}
myMap.clear(); //clear the map 
var newMap = new Map([
    ["name", "Bondhan"],
    ["age", "25"]
]);
for (var _i = 0, _a = newMap.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = newMap.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
for (var _d = 0, _e = newMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0] + " -> " + entry[1]);
}
