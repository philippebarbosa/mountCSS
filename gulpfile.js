/**
 * Plugins
 */
var gulp         = require('gulp');
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker     = require('css-mqpacker'),
    concat       = require('gulp-concat');


/**
 *
 * Environnement
 *
 */

env = (function() {
    var env = 'development';
    return env;
} ());

// Set to production (for builds)
gulp.task( 'envProduction', function() {
    env = 'production';
});


/**
 * CSS
 */
gulp.task('css', function () {

    if ( env === 'production' ) {
        output = 'compressed';
    } else {
        output = 'expanded';
    }

    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker({
            sort: true
        })
    ];

    return gulp.src('scss/style.scss')
        .pipe(sass({
            outputStyle : output,
            sourceComments: 'map'
        })
        .on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('css/'));

});

 /**
 * TASKS
 */

// default task (development)
gulp.task('default', ['css'], function () {
    gulp.watch('scss/**/*.scss', ['css']);
});

// Build tasks
gulp.task( "build", [ 'envProduction', 'css'], function () {
    console.log("Build complete !");
});