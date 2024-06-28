const { Storage } = require('@google-cloud/storage');
const path = require('path');


const storage = new Storage({
    keyFilename : 'studybear-426913-34f2fd31e6dc.json' ,
  });

module.exports = storage;