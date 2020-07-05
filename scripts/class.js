var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.classMethod = function () {
            console.log("Class method by Parent " + _this.name);
        };
        this.name = name;
        console.log(this.name);
    }
    Car.staticMethod = function () {
        console.log("Static is called");
    };
    return Car;
}());
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    function Driver(name) {
        var _this = _super.call(this, name) || this;
        _this.classMethod = function () {
            console.log("Class method by Derived " + _this.name);
        };
        console.log("Derived " + _this.name);
        return _this;
    }
    return Driver;
}(Car));
var obj = new Car("Toyota");
obj.classMethod();
Car.staticMethod();
var obj1 = new Driver("Corola");
obj1.classMethod();
