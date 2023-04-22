# sygn-akt
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/HerrDiesel/sygn-akt/blob/main/README.md)
[![pl](https://img.shields.io/badge/lang-pl-white.svg)](https://github.com/HerrDiesel/sygn-akt/blob/main/README.pl.md)

[![NPMJS registry package version](https://img.shields.io/github/package-json/v/HerrDiesel/sygn-akt?color=BB2E3E&label=latest+version)](https://npmjs.com/sygn-akt)
[![Snyk Package Health Score](https://snyk.io/advisor/npm-package/sygn-akt/badge.svg?)](https://snyk.io/advisor/npm-package/sygn-akt)

Generate and read docket numbers (Polish legal citation).

## What (kinda) works for now
- generating docket numbers of:
    - the **Supreme Administrative Court** – `generate("NSA")(division, chamber, repertorium, number, year)`,
    - **district administrative courts** – `generate("WSA)(division, repertorium, city, number, year)`,
    - the **Supreme Court** – `generate("SN")(division, repertorium, number, year)`;
- reading docket numbers of:
    - the **Supreme Administrative Court** – `read("NSA")(docket_no)`,
    - **district administrative courts** – `read("WSA")(docket_no)`,
    - the **Supreme Court** – `read("SN")(docket_no)`.

## Sources
- https://sip.lex.pl/akty-prawne/dzienniki-resortowe/organizacja-i-zakres-dzialania-sekretariatow-sadowych-oraz-innych-35642426
- https://bip.warszawa.wsa.gov.pl/272/zasady-biurowosci-w-sadach-administracyjnych.html
- https://www.law.uj.edu.pl/~citations
