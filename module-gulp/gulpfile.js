/**
 * Created by mdemo on 2014/4/25.
 */
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
gulp.task('browserify', function() {
    return browserify()
        .require('./click',{ expose: 'click' })
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('module.js'))
        .pipe(streamify(uglify()))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./'));
});
gulp.task('default', ['browserify']);