const fs = require('fs');

function getDatabaseItems(type, cb) {
  console.log(`Making database request for type: ${type}`);
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
      console.log(`Database request for '${type}' failed:`, err);
    } else {
      const data = JSON.parse(payload)[type];
      console.log(`Database request for '${type}' completed successfully, found ${data ? data.length : 0} items`);
      cb(null, data);
    }
  });
}

function getDatabaseItemById(type, id, cb) {
  console.log(`Making database request for type: ${type}, ID: ${id}`);
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
      console.log(`Database request for '${type}' with ID ${id} failed:`, err);
    } else {
      const data = JSON.parse(payload)[type];
      const item = data.find(entry => entry.id === id);
      if (item) {
        console.log(`Database request for '${type}' with ID ${id} completed successfully, found item:`, item);
      } else {
        console.log(`Database request for '${type}' with ID ${id} completed, but no item found`);
      }
      cb(null, item);
    }
  });
}

module.exports = { getDatabaseItems, getDatabaseItemById };