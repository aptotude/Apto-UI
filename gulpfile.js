'use strict';

const gulp = require('gulp');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprites');
const runSequence = require('run-sequence');
const appVersion = require('./package.json').version;
const paths = {
    dist: './dist/apto-ui-lib',
    src: './apto-ui-lib/src',
    scss: './src/lib/scss'
};

gulp.task('copy', function () {
    // move variables scss
    gulp.src(`${paths.src}/lib/scss/theme/variables.scss`)
        .pipe(gulp.dest(`${paths.dist}/scss/theme`));

    // move svg sprites
    gulp.src(`${paths.src}/assets/**/*.svg`)
        .pipe(gulp.dest(`${paths.dist}/assets`));

    // move readme
    gulp.src(`./README.md`)
        .pipe(gulp.dest(`${paths.dist}`));

    // move license
    gulp.src(`./LICENSE`)
        .pipe(gulp.dest(`${paths.dist}`));
});

gulp.task('versions', function () {
    const file = `${paths.dist}/package.json`;
    gulp.src(file)
        .pipe(replace('0.0.0-PLACEHOLDER', appVersion))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('sprites', function() {
    return gulp.src(`${paths.src}/lib/icon/icons/*.svg`)
        .pipe(svgSprite({
            svg: {
                sprite: 'apto-icon-sprite.svg'
            },
            preview: false
        }))
        .pipe(gulp.dest(`${paths.src}/assets`));
});

gulp.task('package', function(cb) {
    runSequence('sprites', 'copy', 'versions', cb);
});

gulp.task('default', []);
