var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(
    [
      'sass',
      'modernizr',
      'scripts',
      'images',
      'jade',
      'copy:fonts',
      'copy:favicons'
    ],
    callback
  );
});

gulp.task('build:prod', function(callback) {
  runSequence(
    [
      'sass',
      'scripts',
      'images',
      'copy:fonts',
      'copy:favicons'
    ],
    [
      'optimize:css',
      'optimize:js'
    ],
    callback
  );
});