// READ() FUNCTION
function read(input){
    let output = {};
    output.city = {};
    let sygn_akt = input.split(" ");

    // Parse everything
    output.division = sygn_akt[0];

    output.repertorium = sygn_akt[1];
    output.repertorium = output.repertorium.split("/")[0];

    output.city.abbr = sygn_akt[1];
    output.city.abbr = output.city.split("/")[1];
    
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

    // Identify the city
    const cities = require("../json/wsa.loc.json");
    const city = cities.find(c => c.abbr === output.city.abbr);
    
    output.city.en_name = city["en_name"];
    output.city.pl_name = city["pl_name"];

    return output;
}

// GENERATE() FUNCTION
function generate(division, repertorium, city, num, year){
    // Identify the city
    if(city.length != 2){
        const cities = require("../json/wsa.loc.json");
        if(cities.find(c => c.en_name === city) === undefined){
            if(cities.find(c => c.pl_name === city) === undefined){
                throw new Error("wrong city identifier");
            }
            else{
                city = cities.find(c => c.pl_name === city)["abbv"]; 
            }
        }
        else{
            city = cities.find(c => c.en_name === city)["abbv"];
        }
    }

    // Change year format
    year = year.toString();
    if(year.length == 4){
        year = year.substring(2);
    }
    else if(year.length !== 2){
        throw new Error("wrong year format");
    }

    return division + " " + repertorium + "/" + city + " " + num + "/" + year;
}

// MODULE EXPORTS
module.exports.read = read;
module.exports.generate = generate;
