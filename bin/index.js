const fs = require('fs');
const path = require('path');

const lib = require('../lib/books.json');
const main = require('../api/main');

(async () => {
  try {
    main( lib );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
