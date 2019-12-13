const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'bookManager',
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
  .then([
    console.log(answers)
  ])