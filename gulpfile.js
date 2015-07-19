//Plugins
var gulp = require('gulp');
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer');

// Compile SCSS
gulp.task('css', function () {
    return sass('scss/style.scss')
        .on('error', function (err) {
            console.error('Error! ', err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

// Tasks
gulp.task('default', ['css'], function () {
    gulp.watch('scss/*/*.scss', ['css']);
});