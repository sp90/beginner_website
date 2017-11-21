var slack = require('gulp-slack')({
    url: 'https://hooks.slack.com/services/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',
    channel: '#dev', // Optional
    user: 'Deploy agent', // Optional
    icon_emoji: ':bowtie:' // Optional
});

var env = process.env.NODE_ENV || 'local';

// Html module
module.exports = function(gulp, timeStart) {
	gulp.task('deploy-message', function() {
		var timeEnd = Date.now();
		var elapsed = timeEnd - timeStart;
		var timeMessage = millisToMinutesAndSeconds(elapsed);

		return slack('Deployed latest build for the following enviroment: *' + env + '* gulp took ' + timeMessage);
	});

	function millisToMinutesAndSeconds(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + ' minuts and ' + (seconds < 10 ? '0' : '') + seconds + ' seconds';
	}
};
