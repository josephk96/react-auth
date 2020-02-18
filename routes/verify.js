const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

require("dotenv").config();

router.post('/', async (req, res) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  } else {
    return res.status(200).json({ msg: 'Token found -- Verifying...' })
  }
  console.log('making api call to /verify')

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    if (decoded.user.id._id === req.body.user) {
      res.status(201).json({ user: decoded.user });
    } else {
      res.status(500).json({ msg: 'Failed to receive user data' });
    }
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
});

module.exports = router;