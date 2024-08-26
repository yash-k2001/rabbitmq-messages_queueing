require('dotenv').config();

const fs = require('fs');
const minIoClient = require('../config/minIo.config');
const producer = require('../rabbitmq/producer');
const consumer = require('../rabbitmq/consumer');

let bucketName = process.env.BUCKET_NAME
const uploadToMinio = (req, res) => {         
    let file = req.file;    
    const metaData = {
        'Content-Type': file.mimetype,
        'X-Amz-Meta-Testing': '1234',
    };    
    minIoClient.fPutObject(bucketName, file.filename, file.path, metaData, (err, etag) => {
        if (err) {
            console.log(err)            
            return res.status(500).send(err);
        }
        fs.unlinkSync(file.path);   
        producer(` ${file.filename} uploaded successfully.`)    
        consumer((msg) => {
            console.log(msg,"Message")
        });  
        res.json({response: `File ${file.filename} uploaded successfully.`});
    });    
};

module.exports = { uploadToMinio }
