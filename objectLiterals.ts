let firstName = "Bondhan";
let lastName = "lastName";

let person = {
    firstName,
    [lastName]: "Sarker"
}
console.log(person);

let func = (first, middle, last, age) => {
    return{
        first,
        middle,
        last,
        isSenior: () => {
            return age > 60 ;
        }
    };
}

let x = func("Mr.","Bondhan","Sarker",80);
console.log(x.isSenior());
