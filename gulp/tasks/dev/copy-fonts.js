var gulp = require('gulp');
var config = require('../../config').fonts;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})