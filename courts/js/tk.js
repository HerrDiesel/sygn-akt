const reps = require("../json/tk.reps.json");

// READ() FUNCTION
function read(sygn_akt){
    let output = {};
    sygn_akt = sygn_akt.split(" ");

    output.repertorium = sygn_akt[0];
    // Validate repertorium
    if(reps.find(r => r.name === output.repertorium) === undefined) throw new Error("repertorium validation failed");

    output.num = sygn_akt[1];
    output.num = output.num.split("/")[0];

    output.year = sygn_akt[1];
    output.year = output.year.split("/")[1];
     // Change year format
     if(output.year.length == 2){
        if(parseInt(output.year) < 39){
            output.year = "20" + output.year;
        }
        else{
            output.year = "19" + output.year;
        }
    }
    else if(output.year.length != 4){
        throw new Error("wrong year format");
    }

    return output;
}

// GENERATE() FUNCTION
function generate(repertorium, num, year){
    // Validate repertorium
    if(reps.find(r => r.name === repertorium) === undefined) throw new Error("repertorium validation failed");
    
    // Change year format
    year = year.toString();
    if(year.length == 4){
        year = year.substring(2);
    }
    else if(year.length != 2){
        throw new Error("wrong year format");
    }

    return repertorium + " " + num + "/" + year;
}

module.exports.read = read;
module.exports.generate = generate;
