'use strict';

const gulp = require('gulp');

const paths = {
    dist: './dist',
    src: './src',
    theme: './src/theme'
};

gulp.task('copy', function () {
    gulp.src(`${paths.theme}/**/*`)
        .pipe(gulp.dest(`${paths.dist}/theme`));
});

gulp.task('publish', ['copy']);
gulp.task('default', []);
