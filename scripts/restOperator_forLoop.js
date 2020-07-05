var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message, arguments.length);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
    console.log("----------------------------------------");
    for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
        var color = colors_1[_a];
        console.log(color);
    }
};
var message = "List of colors";
displayColors(message, 'Red', 'Green', 'Blue');
displayColors(message, 'Red', 'Green');
