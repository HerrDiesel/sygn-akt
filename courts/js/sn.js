// READ() FUNCTION
function read(sygn_akt){
    let output = {};
    sygn_akt = sygn_akt.split(" ");
    
    output.division = sygn_akt[0];

    output.repertorium = sygn_akt[1];

    output.num = sygn_akt[2];
    output.num = output.num.split("/")[0];

    output.year = sygn_akt[2];
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

    // Identify chamber
    const reps = require("../json/sn.reps.json");

    output.chamber = {};
    output.chamber.en_name = reps.find(ch => ch.rep_name === output.repertorium)["ch_en_name"];
    output.chamber.pl_name = reps.find(ch => ch.rep_name === output.repertorium)["ch_pl_name"];

    return output;
}

// GENERATE() FUNCTION
function generate(division, repertorium, num, year){
    // Validate repertorium
    const reps = require("../json/sn.reps.json");

    if(reps.find(ch => ch.rep_name === repertorium) === undefined) throw new Error("repertorium validation failed");
    
    // Change year format
    year = year.toString();
    if(year.length == 4){
        year = year.substring(2);
    }
    else if(year.length != 2){
        throw new Error("wrong year format");
    }

    return division + " " + repertorium + " " + num + "/" + year;
}

// MODULE EXPORTS
module.exports.read = read;
module.exports.generate = generate;
