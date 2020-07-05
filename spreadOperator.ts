
let DisplayColors = function(message, ...colors) {
    
    console.log(message,arguments.length);
    
    for(let i in arguments)
    {
        console.log(arguments[i]);
    }
    console.log("----------------------------------------");

    for(let i in colors)
    {
        console.log(colors[i]);
    }
}

let msg = "List of colors";
let colors = ['Red','Green','Blue'];
DisplayColors(msg,...colors);