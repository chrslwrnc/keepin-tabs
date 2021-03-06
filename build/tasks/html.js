import gulp from 'gulp';
import PATH from 'path';
import util from 'gulp-util';

const ROOT = '../../';

const HTML_SRC_FILES = [
	PATH.resolve(__dirname, ROOT, 'src/app/index.html'),
	PATH.resolve(__dirname, ROOT, 'src/app/manifest.json'),
];
const HTML_DEVELOPMENT_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist');
const HTML_PRODUCTION_BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist');

gulp.task('build:html', function() {
	if (util.env.env === 'production') {
		return gulp.src(HTML_SRC_FILES)
			.pipe(gulp.dest(HTML_PRODUCTION_BUILD_FOLDER));
	} else {
		return gulp.src(HTML_SRC_FILES)
			.pipe(gulp.dest(HTML_DEVELOPMENT_BUILD_FOLDER));
	}
});

gulp.task('watch:html', ['build:html'], function() {
	gulp.watch(HTML_SRC_FILES, ['build:html']);
});
