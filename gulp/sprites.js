// Import native modules
var path = require('path');

// Import modules
var svgSymbols = require('gulp-svg-symbols');

// Import config
var config = require('./_config');

// Html module
module.exports = function(gulp, livereload) {
	gulp.task('sprites', function() {
		return gulp.src(config.svgSprite)
			.pipe(svgSymbols())
			.pipe(gulp.dest('public/sprite'))
			.pipe(livereload());
	});
};

