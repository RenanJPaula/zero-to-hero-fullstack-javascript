'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');

gulp.task('clean', function() {
  return gulp.src('./build')
             .pipe(clean());
});

gulp.task('css', function() {
  return gulp.src('./src/css/**/*.css')
             .pipe(cleanCSS())
             .pipe(concat('main.min.css'))
             .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function() {
  return gulp.src('./exemplo-gulp.html')
             .pipe(concat('index.html'))
             .pipe(gulp.dest('./build'));
});

gulp.task('default', function(cb) {
  return runSequence('clean', ['html', 'css'], cb);
});

gulp.task('watch', function() {
  gulp.watch('./**/*', ['default']);
});
