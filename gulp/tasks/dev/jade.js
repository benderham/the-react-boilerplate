var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../../config');

gulp.task('jade', function() {
  return gulp.src(config.jade.src)
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest(config.jade.dest))
});