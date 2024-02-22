const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    status: 200,
    message: 'Welcome to UManizales Backend'
  });
});

module.exports = router;
