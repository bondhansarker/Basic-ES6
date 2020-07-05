class Car{
 name;
 constructor(name){
    this.name = name;
    console.log(this.name);
 }
 static staticMethod=()=>{
     console.log("Static is called");
 }
 classMethod = () =>{
     console.log(`Class method by Parent ${this.name}`);
 }
}

class Driver extends Car{
    
    constructor(name){
        super(name);
        console.log("Derived " + this.name);
    }

    classMethod = () =>{
        console.log(`Class method by Derived ${this.name}`);
    }

}

let obj = new Car("Toyota");
obj.classMethod();
Car.staticMethod();

let obj1 = new Driver("Corola");
obj1.classMethod();