const mapNumbersToStrings = {
    '0': [`  _ `, ` | |`, ` |_|`],
    '1': [`    `, `   |`, `   |`],
    '2': [`  _ `, `  _|`, ` |_ `],
    '3': [`  _ `, `  _|`, `  _|`],
    '4': [`    `, ` |_|`, `   |`],
    '5': [`  _ `, ` |_ `, `  _|`],
    '6': [`    `, ` |_ `, ` |_|`],
    '7': [`  _ `, `   |`, `   |`],
    '8': [` _  `, `|_| `, `|_| `],
    '9': [` _  `, `|_| `, ` _| `]
};

const compose = (...fns) => param => {
    return fns.reduceRight((acc, next) => next(acc), param);
}

const printNumber = i => arr => arr.map(e => `${e[i]}`).join('');

const parseNumber = (number) => {
    const num = Number(number).toString();
    const numToStr = num.length === 1 ? num.padStart(2, "0") : num;

    return numToStr.split('').map(s => mapNumbersToStrings[s]);
}

const timestamp = (date) => {
    return [].concat.apply([], [date.getHours(), date.getMinutes(), date.getSeconds()].map(parseNumber));
}

(() => {
    setInterval(() => {
        console.clear ? console.clear() : process.stdout.write('\033c');

        for (let i = 0; i < 3; i++) {
            console.log(compose(printNumber(i), timestamp)(new Date()));
        };
    }, 1000);
})();