
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            src: ['dist'],
            options: {
                force: true
            },
        },

        ts: {
            default: {
                src: [
                    './src/**/*.ts',
                    './tests/**/*.ts'
                ],
                outDir: 'dist',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                }
            },
        },
        
        mochaTest: {
            test: {
                src: ['dist/tests/**/*.js']
            }
        }

    });

    require('load-grunt-tasks')(grunt); // loads all grunt-* npm tasks

    grunt.registerTask('all', 'Performs a cleanup and a full build with all tasks', [
        'clean',
        'ts',
        'mochaTest'
    ]);

};