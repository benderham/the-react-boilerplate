var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var browsersync = require('browser-sync');
var config = require('../../config');

gulp.task('images', function() {
  return gulp.src(config.image.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [imageminPngquant()]
    }))
    .pipe(gulp.dest(config.image.dest))
    .pipe(browsersync.stream())
});