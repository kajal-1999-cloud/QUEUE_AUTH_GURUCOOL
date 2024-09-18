// worker.js
const { dequeueRequest } = require('./queue');

const processQueue = async (userId) => {
  const request = await dequeueRequest(userId);
  if (request) {
    // Execute the request (process the task)
    console.log(`Processing task for user ${userId}: ${request}`);
  }
};

// Continuous process tasks for  users
const monitorQueues = () => {
  setInterval(() => {

    // Get users and process their queues
    client.keys('queue:*', (err, keys) => {
      keys.forEach((key) => {
        const userId = key.split(':')[1];
        processQueue(userId);
      });
    });
  }, 1000); 
};

monitorQueues();
