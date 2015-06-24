'use strict';

var gulp = require('gulp');
var server = require('gulp-server-livereload');

require('require-dir')('./gulp');



gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('meserver',function(){
    gulp.src('./').pipe(server({
        livereload: true,
        open: true,
        port: 9090,
        host: '0.0.0.0',
        log: 'debug'
    }));
});
