// queue.js
const redis = require('redis');
const client = redis.createClient();

const enqueueRequest = (userId, request) => {
  client.lpush(`queue:${userId}`, JSON.stringify(request), (err, reply) => {
    if (err) console.error(err);
  });
};

const dequeueRequest = (userId) => {
  return new Promise((resolve, reject) => {
    client.rpop(`queue:${userId}`, (err, reply) => {
      if (err) reject(err);
      resolve(JSON.parse(reply));
    });
  });
};

module.exports = { enqueueRequest, dequeueRequest };
