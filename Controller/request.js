// routes/request.js
const express = require('express');
const auth = require('../middleware/auth');
const { enqueueRequest } = require('../queue');
const router = express.Router();

router.post('/addRequest', auth, (req, res) => {
  const { task } = req.body;
  enqueueRequest(req.user.id, task);
  res.send({ message: 'Task added to queue' });
});

module.exports = router;
