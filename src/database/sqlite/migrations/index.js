const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationRun(){
  const schemas = [
    createUsers
  ].join(''); //pegar todas migration e usar valor vazio para quebrar

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.log(error));
}

module.exports = migrationRun;