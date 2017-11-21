// Include main scripts
var gulp = require('gulp');
var livereload = require('gulp-livereload');

// Prep configuration
var config = require('./gulp/_config');

// If your not using s3 set this to false to improve build speed
var useS3 = true;
var timeStart = Date.now();

/**
 *	Include gulp tasks
 */

/**
 *  Copy assets and html
 *
 *  Tasks:
 *    - html
 *    - html--min
 *    - clean-dist
 *    - assets
 *    - images
 */
require('./gulp/copy')(gulp, livereload); // Done

/**
 *  Compile sass
 *
 *  Tasks:
 *    - sass
 *    - sass-lint
 *    - critical
 */
require('./gulp/sass')(gulp, livereload); // Done

/**
 *  Compile js scripts
 *
 *  Tasks:
 *    - scripts
 *    - scripts-lint
 *    - libs
 */
require('./gulp/scripts')(gulp, livereload); // Done

/**
 *  Send slack messages
 *
 *  Tasks:
 *    - deploy-message
 */
//require('./gulp/slack')(gulp, timeStart);

/**
 *	Build sprites
 *
 *	Tasks:
 *	  - sprites
 */
require('./gulp/sprites')(gulp, livereload);


/**
 *  Setup primary tasks
 */

// Linting
gulp.task('lint',
	gulp.series(
		'sass-lint',
		'script-lint'
	)
);

// Default build
gulp.task('build',
	gulp.series(
		'clean-dist',
		gulp.parallel(
			'lint',
			'sass',
			//'libs',
			'scripts',
			'html',
			'sprites',
			'assets',
			'images'
		)
	)
);

// Watch files for changes and run tasks
gulp.task('default', gulp.series('build', function() {
	livereload.listen({
		port: 35720
	});

	gulp.watch(config.images, gulp.parallel('images'));
	gulp.watch(config.assets, gulp.parallel('assets'));
	gulp.watch(config.sprites, gulp.parallel('sprites'));
	gulp.watch(config.sass, gulp.parallel('sass', 'sass-lint'));
	gulp.watch(config.html, gulp.parallel('html'));
	gulp.watch(config.scripts, gulp.parallel('scripts', 'script-lint'));
}));
