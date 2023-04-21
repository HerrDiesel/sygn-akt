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
        return courts[court].read(sygn_akt);
    }
    else{
        // cannot guarantee correct results
        recognize(sygn_akt);
    }
}

const generate = (court) => (...args) => courts[court].generate(...args);

function recognize(sygn_akt){
    // soon
}

// MODULE EXPORTS
module.exports.read = read;
module.exports.generate = generate;
