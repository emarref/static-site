'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect';
import del from 'del';
import deploy from 'gulp-gh-pages';

import assets from './config/gulp/assets';
import script from './config/gulp/script';
import styles from './config/gulp/styles';
import views from './config/gulp/views';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const connectOptions = {
    host: "0.0.0.0",
    root: "dist",
    port: 8080,
    livereload: true
}

gulp.task('clean', () => del(['dist/**/*']));

gulp.task('assets:build', assets(gulp, connect, IS_PRODUCTION).build('assets/**.*', 'dist/'));
gulp.task('assets:watch', ['serve'], () => {
    gulp.watch('assets/**.*', ['assets:build']);
});

gulp.task('script:main:build', script(gulp, connect, IS_PRODUCTION).build('src/scripts/main.js', 'dist/js'));
gulp.task('scripts:build', ['script:main:build']);
gulp.task('scripts:watch', ['serve'], () => {
    gulp.watch('src/scripts/**.*', ['scripts:build']);
});

gulp.task('styles:build', styles(gulp, connect, IS_PRODUCTION).build('src/styles/**/[^_]*.scss', 'dist/css'));
gulp.task('styles:watch', ['serve'], () => {
    gulp.watch('src/styles/**.*', ['styles:build']);
});

gulp.task('views:build', views(gulp, connect, IS_PRODUCTION).build('src/views/**/[^_]*.pug', 'dist/'));
gulp.task('views:watch', ['serve'], () => {
    gulp.watch('src/views/**.*', ['views:build']);
});

gulp.task('serve', () => connect.server(connectOptions));
gulp.task('deploy', ['clean', 'build'], () => gulp.src('dist/**/*').pipe(deploy()));
gulp.task('build', ['assets:build', 'scripts:build', 'styles:build', 'views:build']);
gulp.task('watch', ['assets:watch', 'scripts:watch', 'styles:watch', 'views:watch']);
