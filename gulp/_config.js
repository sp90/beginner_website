module.exports = {
	output: 'public/*',
	cssLibs: [],
	sass: [
		'app/**/*.scss'
	],
	sassSkip: [
		'!app/sass/core/_layout.scss',
		'!app/sass/helpers/_grid.scss',
		'!app/sass/mixins/_breakpoint.scss',
		'!app/sass/mixins/_videoFullScreen.scss',
		'!app/sass/mixins/_overflow-scrolling.scss'
	],
	html: [
		'app/**/*.html'
	],
	images: [
		'app/images/**/*.{jpg,gif,png,svg,ico,mp4}'
	],
	svgSprite: [
		'app/images/svg/*.svg'
	],
	assets: [
		'app/assets/**/*'
	],
	purify: [
		'app/**/*.{html,js}'
	],
	scripts: [
		'app/**/*.js'
	],
	scriptsLint: [
		'app/**/*.js'
	],
	scriptsSkip: [],
	libs: []
};
