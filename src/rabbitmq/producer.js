require('dotenv').config();

const getChannel = require('./rabbitmqClient');

const publishMessage = async (message) => {    
    const channel = await getChannel();
    if (channel) {
      channel.assertQueue(process.env.RABBITMQ_QUEUE, {
        durable: true
      });
      channel.sendToQueue(process.env.RABBITMQ_QUEUE, Buffer.from(message), {
        persistent: true
      });      
    } else {
      console.error('Channel is not initialized');
    }
};

module.exports = publishMessage;