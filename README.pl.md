# sygn-akt
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/HerrDiesel/sygn-akt/blob/main/README.md)
[![pl](https://img.shields.io/badge/lang-pl-white.svg)](https://github.com/HerrDiesel/sygn-akt/blob/main/README.pl.md)

[![NPMJS registry package version](https://img.shields.io/github/package-json/v/HerrDiesel/sygn-akt?color=BB2E3E&label=latest+version)](https://npmjs.com/sygn-akt)
[![Snyk Package Health Score](https://snyk.io/advisor/npm-package/sygn-akt/badge.svg?)](https://snyk.io/advisor/npm-package/sygn-akt)

Generuj i odczytuj sygnatury akt.

## Co [w miarę] działa na ten moment
- generowanie sygnatur akt:
    - **Naczelnego Sądu Administracyjnego** – `generate("NSA")(wydział, izba, repertorium, nr, rok)`,
    - **wojewódzkich sądów administracyjnych** – `generate("WSA)(wydział, repertorium, miasto, nr, rok)`;
- odczytywanie sygnatur akt:
    - **Naczelnego Sądu Administracyjnego** – `read("NSA", sygn_akt)`,
    - **wojewódzkich sądów administracyjnych**  – `read("WSA", sygn_akt)`.

## Źródła
- https://sip.lex.pl/akty-prawne/dzienniki-resortowe/organizacja-i-zakres-dzialania-sekretariatow-sadowych-oraz-innych-35642426
- https://bip.warszawa.wsa.gov.pl/272/zasady-biurowosci-w-sadach-administracyjnych.html
- https://www.law.uj.edu.pl/~citations