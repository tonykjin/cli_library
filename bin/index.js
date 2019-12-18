const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const viewBooks = require('../api/view-books');
const lib = require('../api/books.json');

(async () => {
  try {
    inquirer
      .prompt([
        {
          type: 'rawlist',
          name: 'main',
          message: '==== Book Manager ====',
          choices: [
            'View all books',
            'Add a book',
            'Edit a book',
            'Search for a book',
            'Save and Exit'
          ],
          default: false
        }
      ])
      .then((answers) => {
        const { main } = answers;
        if (main == 'View all books') {
          viewBooks( lib );
        };
      });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
