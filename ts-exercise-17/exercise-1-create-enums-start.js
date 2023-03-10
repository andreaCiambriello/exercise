/**
 * START: Follow the instructions below.
 */
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency[Currency["Euro"] = 1] = "Euro";
    Currency[Currency["Dollar"] = 2] = "Dollar";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
const countries = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];
// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["primary"] = "primary";
    LanguageStatus["secondary"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.primary },
    { language: "English", status: LanguageStatus.secondary },
];
export {};
