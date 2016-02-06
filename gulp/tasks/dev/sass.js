var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync');
var config = require('../../config');

gulp.task('sass', function(){

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))   
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browsersync.stream())
});