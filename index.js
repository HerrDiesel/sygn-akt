const courts = {
    "NSA": require("./courts/js/nsa.js"),
    "WSA": require("./courts/js/wsa.js"),

    "SN": require("./courts/js/sn.js"),
    "SA": require("./courts/js/sa.js"),
    "SO": require("./courts/js/so.js"),
    "SR": require("./courts/js/sr.js")
};

function read(sygn_akt, court){
    if(courts[court] !== undefined){
        courts[court].read(sygn_akt);
    }
    else{
        recognize(sygn_akt);
    }
}

function recognize(sygn_akt){
    // work in progress
}

// MODULE EXPORTS
module.export.read = read;
