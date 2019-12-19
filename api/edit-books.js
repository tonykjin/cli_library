const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const filter = require('../lib/filter');

const edit = ( input ) => {
  console.log('Input the following information. To leave a field unchanged, hit <Enter>');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'book_title',
        message: 'Title:',
        default: input.title
      },
      {
        type: 'input',
        name: 'book_author',
        message: 'Author:',
        default: input.author
      },
      {
        type: 'input',
        name: 'book_description',
        message: 'Description:',
        default: input.description
      }
    ])
    .then((answers) => {
      const { book_title, book_author, book_description } = answers;
      fs.readFile(path.resolve(__dirname, 'books.json'), (err, data) => {
        if (err) throw err;

        let json = JSON.parse(data);

        const output = json.map((x) => {
          if (x.title == input.title) {
            x = {
              "id": x.id,
              "title": book_title,
              "author": book_author,
              "description": book_description
            };
          }
          return x;
        });

        fs.writeFile(path.resolve(__dirname, 'books.json'), JSON.stringify(output), (err, result) => {
          if (err) throw err;
          console.log('Book Saved');
        });
      });
    });
}

module.exports = async ( lib ) => {
  const list = await filter( lib );
  inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'edit_main',
        message: '==== Edit a Book ====',
        choices: [...list],
        default: false
      }
    ])
    .then((answers) => {
      const book = lib.find((index) => {
        if (index.title == answers.edit_main) {
          return index;
        };
      });
      edit( book );
    });
    console.log('Enter the book ID of the book you want to edit; to return press <Enter>.');
};