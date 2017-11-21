module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('frontpage', {
			title: 'Frontpage',
			meta: {
				title: 'frontpage'
			},
			liste: [
				{
					name: 'kat',
					age: 5
				},
				{
					name: 'hund',
					age: 6
				},
				{
					name: 'fugl',
					age: 7
				},
				{
					name: 'fisk',
					age: 8
				}
			]
		});
	});
}
