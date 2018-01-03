/**
 * Plugins
 */
var gulp         = require('gulp');
    sass         = require('gulp-sass'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker     = require('css-mqpacker'),
    csso         = require('gulp-csso'),
    rename       = require("gulp-rename"),
    plumber      = require('gulp-plumber'),
    concat       = require('gulp-concat'),
    imageOptim   = require('gulp-imageoptim'),
    uglify       = require('gulp-uglify'),
    notify       = require("gulp-notify"),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload;


/**
 * PATHS
 */
var src  = '/',
    dist = '/'

/**
 * CSS
 */
gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 3 version']}),
        mqpacker({
            sort: true
        })
    ];
    return gulp.src('scss/style.scss')
        .pipe(sass({
            outputStyle : 'expanded',
            sourceComments: 'map'
        })
        .on('error', notify.onError("Error: <%= error.message %>")))
        .pipe(postcss(processors))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(csso())
    .pipe(gulp.dest('css/'));
});

/**
 * JAVASCRIPT
 */

// compile
gulp.task('jsLibs', function() { // Concatenate all JS libs
    return gulp.src('js/app/plugins/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('jsScripts', function() { // Move main js script file
    gulp.src('js/app/index.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
});

//build for prod
gulp.task('jsScriptsBuild', function() { // Move and minify main js script file
    gulp.src('js/app/index.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('jsLibsBuild', function() { // Concatenate and minify libs file
  return gulp.src('js/app/plugins/*.js')
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dist + 'js/'));
});

gulp.task('browser-sync', function() {
   browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

 /**
 * TASKS
 */

// default task (development)
gulp.task('default', ['css', 'jsLibs', 'jsScripts', 'browser-sync'], function () {
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch('js/**/*.js', ['jsScripts', 'jsLibs']);
    // gulp.watch('img/**/*', ['images']);
    gulp.watch('**/*.html').on("change", reload);
});

// Build tasks
gulp.task( "prod", ['minify-css', 'jsLibsBuild', 'jsScriptsBuild'], function () {
    console.log("Build complete !");
});
