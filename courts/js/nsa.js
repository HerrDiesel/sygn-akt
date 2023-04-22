const { isRoman } = require("./../../roman_nums.js");

// READ() FUNCTION
function read(sygn_akt){
    let output = {};
    output.chamber = {};
    sygn_akt = sygn_akt.split(" ");

    // Parse everything
    if(isRoman(sygn_akt[0]) == true){
        output.division = sygn_akt[0];
        sygn_akt.shift();
    }
    
    output.chamber.abbr = sygn_akt[0];
    output.chamber.abbr = output.chamber.abbr.substring(0, 1);

    output.repertorium = sygn_akt[0];
    output.repertorium = output.repertorium.substring(1);

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

    // Identify chamber
    const chambers = require("../json/nsa.chambers.json");

    output.chamber.en_name = chambers.find(ch => ch.abbr === output.chamber.abbr)["en_name"];
    output.chamber.pl_name = chambers.find(ch => ch.abbr === output.chamber.abbr)["pl_name"];

    return output;
}

// GENERATE() FUNCTION
function generate(division, chamber, repertorium, num, year){
    // Identify chamber
    if(chamber.length != 1){
        const chambers = require("../json/nsa.chambers.json");
        if(chambers.find(ch => ch.en_name === chamber) === undefined){
            if(chambers.find(ch => ch.pl_name === chamber) === undefined){
                throw new Error("wrong chamber identifier");
            }
            else{
                chamber = chambers.find(ch => ch.pl_name === chamber)["abbr"]; 
            }
        }
        else{
            chamber = chambers.find(ch => ch.en_name === chamber)["abbr"];
        }
    }

    // Change year format
    year = year.toString();
    if(year.length == 4){
        year = year.substring(2);
    }
    else if(year.length != 2){
        throw new Error("wrong year format");
    }

    return division + " " + chamber + repertorium + " " + num + "/" + year;
}

// MODULE EXPORTS
module.exports.read = read;
module.exports.generate = generate;
