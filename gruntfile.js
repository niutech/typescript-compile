module.exports = function(grunt) {

    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'js/typescript.compile.min.js': ['js/typescript.compile.js'],
            'js/typescript.min.js': ['js/typescript.js']
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['uglify']);

};
