const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const viewBooks = require('../api/view-books');
const addBooks = require('../api/add-books');
const editBooks = require('../api/edit-books');
const search = require('../api/search');

const main = ( lib ) => {
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
      (main == 'Edit a book') ? editBooks( lib ) : 
      (main == 'Search for a book') ? search( lib ) : 
      (main == 'Save and Exit') ? process.exit() : console.log('Please select a valid option');
    });
};

module.exports = main;