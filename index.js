const courts = {
    "NSA": require("./courts/js/nsa.js"), // Supreme Administrative Court
    "WSA": require("./courts/js/wsa.js"), // District Administrative Court

    "SN": require("./courts/js/sn.js"), // Supreme Court – Sąd Najwyższy
    "SA": require("./courts/js/sa.js"), // Court of Appeals – Sąd Apelacyjny
    "SO": require("./courts/js/so.js"), // District Court - Sąd Okręgowy
    "SR": require("./courts/js/sr.js"), // Sąd Rejonowy

    "TK": require("./courts/js/tk.js"), // Constitutional Tribunal - Trybunał Konstytucyjny
    "TS": require("./courts/js/ts.js") // State Tribunal - Trybunał Stanu
};

// READ() FUNCTION
function read(sygn_akt, court){
    if(courts[court] !== undefined){
        return courts[court].read(sygn_akt);
    }
    else{
        // cannot guarantee correct results
        recognize(sygn_akt);
    }
}

// GENERATE() FUNCTION
const generate = (court) => (...args) => courts[court].generate(...args);

function recognize(sygn_akt){
    // soon
}

// MODULE EXPORTS
module.exports.read = read;
module.exports.generate = generate;
