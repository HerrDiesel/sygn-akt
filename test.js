const test = require("tape");
const syg = require("./index.js");

// nsa.js
test("should correctly read the provided NSA docket number (year 1984)", t => {
    const actual = syg.read("GSK 1997/84", "NSA");
    t.looseEqual(actual.chamber.abbr, "G");
    t.looseEqual(actual.chamber.en_name, "Commercial");
    t.looseEqual(actual.chamber.pl_name, "Gospodarcza");
    t.looseEqual(actual.num, "1997");
    t.looseEqual(actual.year, 1984);
    t.end();
});

test("should correctly read the provided NSA docket number (year 2023)", t => {
    const actual = syg.read("GSK 1997/23", "NSA");
    t.looseEqual(actual.chamber.abbr, "G");
    t.looseEqual(actual.chamber.en_name, "Commercial");
    t.looseEqual(actual.chamber.pl_name, "Gospodarcza");
    t.looseEqual(actual.num, "1997");
    t.looseEqual(actual.year, 2023);
    t.end();
});

test("should correctly generate a NSA docket number", t => {
    const actual = syg.generate("NSA")("I", "Ogólnoadministracyjna", "SK", 1997, 2023);
    t.strictEqual(actual, "I OSK 1997/23");
    t.end();
});
