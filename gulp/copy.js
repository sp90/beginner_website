// External modules
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');

// Import config
var config = require('./_config');

var env = process.env.NODE_ENV || 'local';
var live = env === 'prod' || env === 'stag';

// Html module
module.exports = function(gulp, livereload) {
	// Add envs var
	if (process.env.FAKE_ENV) {
		env = process.env.FAKE_ENV;
	}

	gulp.task('html', function() {
		return gulp.src(config.html)
			.pipe(flatten())
			.pipe(gulp.dest('views'))
			.pipe(livereload());
	});

	gulp.task('html--min', function() {
		return gulp.src(config.html)
			.pipe(htmlmin())
			.pipe(gulp.dest('views'));
	});

	gulp.task('images', function() {
		return gulp.src(config.images)
			.pipe(gulp.dest('public/images'))
			.pipe(livereload());
	});

	gulp.task('assets', function() {
		return gulp.src(config.assets)
			.pipe(gulp.dest('public/assets'))
			.pipe(livereload());
	});

	gulp.task('clean-html-tmp', function () {
		return del([
			'views/tmp-**'
		]);
	});

	gulp.task('clean-dist', function () {
		return del([
			'public/**',
			'views/**'
		]);
	});
};
