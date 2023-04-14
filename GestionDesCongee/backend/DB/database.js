var mysql = require('mysql');
const config = require('./config.json')

var conn = mysql.createConnection({
    host: 'sql7.freemysqlhosting.net', 
    user: 'sql7612917', 
    password: '4cSpjjwsLu',
    database: 'sql7612917',
     port:3306
}); 
conn.connect(function(err) { 
  if (err){console.log(err)};
  console.log('Database is connected successfully !'); 
}); 
module.exports = conn
