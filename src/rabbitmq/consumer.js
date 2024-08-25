const getChannel = require('./rabbitmqClient');

const consumeMessages = async (callback) => {
  const channel = await getChannel();
  if (channel) {
    channel.assertQueue(process.env.RABBITMQ_QUEUE, {
      durable: true
    });
    channel.consume(process.env.RABBITMQ_QUEUE, (msg) => {
      if (msg !== null) {        
        callback(msg.content.toString());
        channel.ack(msg);
      }
    });
  } else {
    console.error('Channel is not initialized');
  }
};

module.exports = consumeMessages;
