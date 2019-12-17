const inquirer = require('inquirer');
const fs = require('fs');

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
    console.log(JSON.stringify(answers, null, '    '));
    console.info('Answers var: ', answers);
    // (answers === 'View all books') ? () :
  });
