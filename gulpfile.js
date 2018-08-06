'use strict';

const gulp = require('gulp');
const replace = require('gulp-replace');
const appVersion = require('./package.json').version;
const paths = {
    dist: './dist',
    src: './src',
    scss: './src/lib/scss'
};

gulp.task('copy', function () {
    gulp.src(`${paths.scss}/**/*`)
        .pipe(gulp.dest(`${paths.dist}/scss`));

    gulp.src(`./README.md`)
        .pipe(gulp.dest(`${paths.dist}`));

    gulp.src(`./LICENSE`)
        .pipe(gulp.dest(`${paths.dist}`));
});

gulp.task('versions', function () {
    const file = `${paths.dist}/package.json`;
    gulp.src(file)
        .pipe(replace('0.0.0-PLACEHOLDER', appVersion))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('publish', ['copy', 'versions']);
gulp.task('default', []);
