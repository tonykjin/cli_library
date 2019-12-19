const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const viewBooks = require('../api/view-books');
const addBooks = require('../api/add-books');
const editBooks = require('../api/edit-books');
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
        (main == 'View all books') ? viewBooks( lib ) :
        (main == 'Add a book') ? addBooks( lib ) : 
        (main == 'Edit a book') ? editBooks( lib ) : console.log('err');
      });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
