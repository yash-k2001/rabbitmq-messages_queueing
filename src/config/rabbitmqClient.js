require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const amqp = require('amqplib');

const rabbitmqClient = async () => {
    let connection = await amqp.connect(process.env.RABBITMQ_URL)
    let connect = await connection.createChannel();        
    return connect;
}

module.exports = rabbitmqClient