var gulp = require('gulp');
var pug = require('gulp-pug');
var config = require('../config');

gulp.task('pug', function() {
  return gulp.src(config.pug.src)
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(config.pug.dest))
});