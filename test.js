const test = require("tape");
const syg = require("./index.js");

// nsa.js
test("should correctly read the provided NSA docket number (year 1984)", t => {
    const actual = syg.read("NSA")("II GSK 1184/84");
    t.looseEqual(actual.year, 1984);
    t.end();
});

test("should correctly read the provided NSA docket number", t => {
    const actual = syg.read("NSA")("II GSK 1184/21");
    t.looseEqual(actual.division, "II");
    t.looseEqual(actual.chamber.abbr, "G");
    t.looseEqual(actual.chamber.en_name, "Commercial");
    t.looseEqual(actual.chamber.pl_name, "Gospodarcza");
    t.looseEqual(actual.num, "1184");
    t.looseEqual(actual.year, 2021);
    t.end();
});

test("should correctly generate a NSA docket number", t => {
    const actual = syg.generate("NSA")("I", "Ogólnoadministracyjna", "SK", 1997, 2023);
    t.strictEqual(actual, "I OSK 1997/23");
    t.end();
});

// wsa.js
test("should correctly read the provided WSA docket number (year 1984)", t => {
    const actual = syg.read("WSA")("II SAB/Wa 778/84");
    t.looseEqual(actual.year, 1984);
    t.end();
});

test("should correctly read the provided WSA docket number", t => {
    const actual = syg.read("WSA")("II SAB/Wa 778/22");
    t.looseEqual(actual.division, "II");
    t.looseEqual(actual.repertorium, "SAB");
    t.looseEqual(actual.city.abbr, "Wa");
    t.looseEqual(actual.city.pl_name, "Warszawa");
    t.looseEqual(actual.city.en_name, "Warsaw");
    t.looseEqual(actual.num, "778");
    t.looseEqual(actual.year, 2022);
    t.end();
});

test("should correctly generate a WSA docket number", t => {
    const actual = syg.generate("WSA")("I", "SAB", "Warsaw", 778, 2022);
    t.looseEqual(actual, "I SAB/Wa 778/22");
    t.end();
})

// sn.js
test("should correctly read the provided SN docket number (year 1984)", t => {
    const actual = syg.read("SN")("II KZP 420/84");
    t.looseEqual(actual.year, 1984);
    t.end();
});

test("should correctly read the provided SN docket number", t => {
    const actual = syg.read("SN")("I NSNc 420/84");
    t.looseEqual(actual.division, "I");
    t.looseEqual(actual.repertorium, "NSNc");
    t.looseEqual(actual.chamber.en_name, "Extraordinary Control and Public Affairs");
    t.looseEqual(actual.chamber.pl_name, "Kontroli Nadzwyczajnej i Spraw Publicznych");
    t.looseEqual(actual.num, "420");
    t.looseEqual(actual.year, 1984);
    t.end();
});

test("should correctly generate a SN docket number", t => {
    const actual = syg.generate("SN")("I", "NSNk", 420, 1969);
    t.strictEqual(actual, "I NSNk 420/69");
    t.end();
});
