const express = require('express');
const router = express.Router();

// @route GET api/authors
router.get('/', (req,res) => res.send('Authors route'));

module.exports = router;