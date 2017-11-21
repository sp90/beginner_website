// Import native modules
var path = require('path');

// Import modules
var del = require('del');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var lodashBuilder = require('gulp-lodash-builder');

// Import config
var config = require('./_config');
var scripts = config.scripts.concat(config.scriptsSkip);

var env = process.env.NODE_ENV || 'local';
var live = env === 'prod' || env === 'stag';

// Html module
module.exports = function(gulp, livereload) {
	// Add envs var
	if (process.env.FAKE_ENV) {
		env = process.env.FAKE_ENV;
	}

	gulp.task('scripts', function() {
		return gulp.src(scripts)
			.pipe(concat('app.js'))
			.pipe(gulp.dest('public'));
	});

	gulp.task('script-lint', function() {
		return gulp.src(config.scriptsLint)
			.pipe(jscs({
				fix: false,
				configPath: path.join(__dirname, '..', '/.jscsrc')
			}))
			.pipe(jscs.reporter());
	});

	gulp.task('libs', function() {
		return gulp.src(config.libs)
			.pipe(concat('app-libs.js'))
			.pipe(gulp.dest('public'));
	});

	gulp.task('lodash', function(cb) {
		return gulp.src(scripts, {
			buffer: false
		})
		.pipe(lodashBuilder({
			target: 'public/lodash.custom.js'
		}))
		.on('error', function(err) {
			console.log('err: ', err)
		})
	});

	gulp.task('combine-scripts', function(cb) {
		var paths = [
			live ? 'public/lodash.custom.js' : 'node_modules/lodash/lodash.min.js',
			'public/app-libs.js',
			'public/app.js'
		];

		return gulp.src(paths)
			.pipe(concat('app-combined.js'))
			.pipe(gulpif(live, uglify()))
			.pipe(gulp.dest('public'))
			.pipe(livereload());
	});
};
