module.exports = function(app) {
	app.get('/', function(req, res) {

		res.render('frontpage', {
			title: 'Frontpage',
			meta: {
				title: 'frontpage'
			}
		});
	});

	// app.get('/users', function(req, res) {
	// 	res.render('users', {
	// 		title: 'Users',
	// 		users: users
	// 	});
	// });
}
