module.exports = function (grunt) {
  // Dynamically load npm tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  // Grunt init
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * Grunt config
     */

    // Compile SASS
    sass: {
      dev: {
        options: {
          precision: 4,
          style: 'expanded',
          lineNumbers: true
        },
        files: {
          'style.css': 'scss/style.scss'
        }
      },
      dist: {
        options: {
          precision: 4,
          style: 'compressed'
        },
        files: {
          'style.css': 'scss/style.scss'
        }
      }
    },

    // Autoprefix (deprecated)
    autoprefixer: {
      options: {
        browsers: [ 'last 2 version', 'safari 6', 'ie 7', 'opera 12.1', 'ios 6', 'android 4']
      },
      dev: {
        files: {
          'style.css': 'style.css'
        }
      }
    },

    /**
     * Watch : Execute tasks automatically
     */

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '**/*.html'
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass:dev', 'autoprefixer:dev']
      }
    }

  });


  /**
   * TASKS
   */


  // Default task
  grunt.registerTask('default', ['sass:dev', 'autoprefixer:dev','watch']);
};
