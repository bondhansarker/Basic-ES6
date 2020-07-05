var _a;
var firstName = "Bondhan";
var lastName = "lastName";
var person = (_a = {
        firstName: firstName
    },
    _a[lastName] = "Sarker",
    _a);
console.log(person);
var func = function (first, middle, last, age) {
    return {
        first: first,
        middle: middle,
        last: last,
        isSenior: function () {
            return age > 60;
        }
    };
};
var x = func("Mr.", "Bondhan", "Sarker", 80);
console.log(x.isSenior());
