// Require modules for minifying images and code

var gulp = require('gulp'), 
    //imagemin = require('gulp-imagemin'),
    //uglify = require('gulp-uglify'),
    //pump = require('pump'),
    //cleanCSS = require('gulp-clean-css'),
    webserver = require('gulp-webserver');
    //htmlmin = require('gulp-htmlmin');

gulp.task('webserve', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      path: source/index.html
    }));
});


//gulp.task('default', ['minify-css', 'compress', 'minify', 'images']);