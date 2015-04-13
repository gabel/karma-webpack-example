var gulp = require('gulp');
var karma = require('karma').server;

gulp.task("default", ["test-watch"]);

/* TEST SETUP */
gulp.task("test-watch", ['test'], function (done) {
    gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(){
        done();
    });
});