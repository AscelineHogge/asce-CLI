#!/usr/bin/env node
const { getCode } = require('country-list');
const axios = require('axios').default;
const myArgs = process.argv.slice(2);

let year;
if (myArgs[1]) {
    year = myArgs[1]
} else {
    year = new Date().getFullYear();
}

axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${getCode(myArgs[0])}`)
    .then(function (response) {
        response.data.forEach(holiday => {
            console.log(chalk.green.bold(holiday.name) + " - " + chalk.white.bold(holiday.date));
        });
    })
    .catch(error => {
        console.log(chalk.bold.red(error));
    });