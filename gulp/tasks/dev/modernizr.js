var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var config = require('../../config');

gulp.task('modernizr', function() {
  gulp.src(config.modernizr.src)
    .pipe(modernizr())
    .pipe(gulp.dest(config.modernizr.dest))
});