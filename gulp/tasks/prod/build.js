var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:prod', function(callback) {
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
    [
      'optimize:css',
      'optimize:js'
    ],
    callback
  );
});