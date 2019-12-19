const inquirer = require('inquirer');
const filter = require('../lib/filter');

module.exports = async ( lib ) => {
  const result = await filter( lib );
  inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'view',
        message: '==== View Books ====',
        choices: [... result],
        default: false
      }
    ])
    .then((answers) => {
      const book = lib.find((index) => {
        if (index.title == answers.view) {
          return index;
        };
      });
      console.log(book);
    });
}