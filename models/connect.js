const sqlite3 = require('sqlite3').verbose();
const env = require('dotenv').config();

// let db = new sqlite3.Database('./db/database.db', (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Connected to the database.');
//   });

let json = function (){
    console.log(process.env.JSONBIN_URL)
}

json();
// module.exports = { db }