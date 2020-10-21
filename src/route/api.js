const express = require('express');
const router = express.Router();

const uuid = require('uuid').v4;

// Enables me to read the Post Body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Creates new Meeting Session.
 * Returns new UUID for accessing and restarting & resuming this meeting with the given Password
 */
router.post('/new', (req, res) => {
  const id = uuid();
  const started = new Date().getTime();
  res.json({ id: uuid(), started: started });
});

router.post('/resume', (req, res) => {
  const id = req.body.id;
  const resumeAt = new Date().getTime();
  res.json({ id: id, resumed: resumeAt, previously: [] });
});

router.post('/pause', (req, res) => {
  const id = req.body.id;
  const pausedAt = new Date().getTime();
  res.json({ id: id, paused: pausedAt, until: [] });
});

router.stop('/stop', (req, res) => {
  const id = req.body.id;
  const stopedAt = new Date().getTime();
  res.json({ id: id, stopped: stopedAt, data: [] });
});

module.exports = router;