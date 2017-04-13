'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    //.pipe(sassdoc())
    .resume();
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('doc', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassdoc());
});
