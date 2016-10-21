var express = require('express')
  , router = express.Router()
  

router.get('/', function(req, res) {
	console.log(req.session.name);
    res.send('Hello ' + req.session.name);
});


router.get('/set/:name', function(req, res) {
	var name = req.params.name
	req.session.name = name

	console.log(req.session.name)
    res.send('Hello ' + name)
})

router.get('/destroy', function(req, res) {
	console.log("/destroy");
	if (req.session) {
        req.session.destroy(function(err) {
            if (err) throw err;
            res.send("Session destroyed");
        })
	} else {
        res.send("No session to destroy");
	}
});

module.exports = router