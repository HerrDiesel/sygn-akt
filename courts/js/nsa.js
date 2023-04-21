isRoman = require("./../../roman_nums.js").isRoman;

function read(input){
    let output = {};
    output.chamber = {};
    let sygn_akt = input.split(" ");
    
    if(isRoman(sygn_akt[0]) == true){
        output.division = sygn_akt[0];
        sygn_akt.shift();
    }

    // Parse everything
    output.chamber.abbr = sygn_akt[0];
    output.chamber.abbr = output.chamber.abbr.substring(0, 1);

    output.repertorium = sygn_akt[0];
    output.repertorium = output.repertorium.substring(1);

    output.num = sygn_akt[1];
    output.num = output.num.split("/")[0];

    output.year = sygn_akt[1];
    output.year = output.year.split("/")[1];

    // Identify chamber
    switch(output.chamber.abbr){
        case "G":
            output.chamber.en_name = "Commercial";
            output.chamber.pl_name = "Gospodarcza";
            break;
        case "F":
            output.chamber.en_name = "Financial";
            output.chamber.pl_name = "Finansowa";
            break;
        case "O":
            output.chamber.en_name = "General Administrative";
            output.chamber.pl_name = "Ogólnoadministracyjna";
            break;
    }

    return output;
}

module.exports.read = read;