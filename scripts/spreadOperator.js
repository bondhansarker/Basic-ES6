var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DisplayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message, arguments.length);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
    console.log("----------------------------------------");
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var msg = "List of colors";
var colors = ['Red', 'Green', 'Blue'];
DisplayColors.apply(void 0, __spreadArrays([msg], colors));
