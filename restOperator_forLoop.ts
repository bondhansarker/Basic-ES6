
let displayColors = function(message, ...colors) {
    
    console.log(message,arguments.length);
    
    for(let i in arguments)
    {
        console.log(arguments[i]);
    }
    console.log("----------------------------------------");

    for(let color of colors)
    {
        console.log(color);
    }
}

let message = "List of colors";
displayColors(message,'Red','Green','Blue');
displayColors(message,'Red','Green');