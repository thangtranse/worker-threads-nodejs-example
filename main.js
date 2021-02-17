const fs = require("fs-extra");
const {
    getRandomIndex
} = require("./utils")
const firstName = require("./data/first_name.json");
const middleName = require("./data/middle_name.json");
const lastName = require("./data/last_name.json");

const limit = 100000;

const outputFile = `${__dirname}/output/data.txt`;
const dateStart = new Date();
console.log("start: ", dateStart.toLocaleTimeString());

(async () => {
    for (let i = 0; i < limit; i++) {
        const data = [firstName, middleName, lastName]
            .map(getRandomIndex)
            .concat("\n")
            .join(" ");
        await fs.appendFile(outputFile, data);
    }
    const dateEnd = new Date();
    console.log("end: ", dateEnd.toLocaleTimeString());
})();
