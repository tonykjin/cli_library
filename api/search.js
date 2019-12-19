const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({ 
  input: process.stdin, 
  output: process.stdout 
});

const similarity = require('../lib/search-similarity');

module.exports = ( lib ) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'search',
        message: '==== Search ====='
      }
    ])
    .then((answers) => {
      const { search } = answers;
      fs.readFile(path.resolve(__dirname, '../lib/books.json'), (err, data) => {
        if (err) throw err;

        let json = JSON.parse(data);
        let similarityArr = json.map((x) => {
          return similarity( search, x.title );
        });
        let index = similarityArr.indexOf(Math.max(...similarityArr));
        console.log('The following books matched your query');
        console.log(json[index]);
      });
    });
    console.log('Type in one or more keywords to search for');
};
