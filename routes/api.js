module.exports = function(app) {
	app.post('/api/create/user', function(req, res) {
		console.log("req.body: ", req.body);


		res.redirect('/');
	});
}
