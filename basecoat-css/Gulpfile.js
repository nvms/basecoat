'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sassdoc = require('sassdoc');

gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', '!css/**/*.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8', debug: true}, function(details) {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'));
});

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
