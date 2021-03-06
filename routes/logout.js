var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.clearCookie('user');
	res.redirect('/');
})

module.exports = router;