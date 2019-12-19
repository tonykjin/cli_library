const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

module.exports = ( lib ) => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'book_title',
        message: 'Title:',
        default: 'n/a'
      },
      {
        type: 'input',
        name: 'book_author',
        message: 'Author:',
        default: 'n/a'
      },
      {
        type: 'input',
        name: 'book_description',
        message: 'Description:',
        default: 'n/a'
      }
    ])
    .then((answers) => {
      const { book_title, book_author, book_description } = answers;
      fs.readFile(path.resolve(__dirname, 'books.json'), (err, data) => {
        if (err) throw err;
        
        let json = JSON.parse(data);

        json.push({
          "id": (json[json.length-1]["id"] + 1),
          "title": book_title,
          "author": book_author,
          "description": book_description
        });

        fs.writeFile(path.resolve(__dirname, 'books.json'), JSON.stringify(json), (err, result) => {
          if (err) throw err;
          console.log(`Book [${(json[json.length-1]["id"])}] Saved`);
        });
      })
    });
};