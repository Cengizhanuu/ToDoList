module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'web/css/output.css' : 'source/css/main.scss'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'web/css/output.css': 'web/css/output.css'
                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'web/js',
                    src: '**/*.js',
                    dest: 'web/js'
                }]
            }
        },
        browserify: {
            vendor: {
                src: [],
                dest: 'web/js/vendor.js',
                options: {
                    require: ['jquery']
                }
            },
            client: {
                src: ['source/js/**/*.js'],
                dest: 'web/js/app.js',
                options: {
                    external: ['jquery']
                }
            }
        },
        watch: {
            scripts: {
                files: ['source/js/**/*.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['source/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass','browserify','watch']);
    grunt.registerTask('build', ['sass','cssmin','browserify','uglify']);


};