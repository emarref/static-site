import jade from 'gulp-jade';

export default (gulp, connect, production) => {
    return {
        build: (src, dest, locals = {}) => {
            locals = Object.assign({}, {IS_PRODUCTION: production}, locals);
            return () => gulp.src(src)
                .pipe(jade({locals: locals}))
                .pipe(gulp.dest(dest))
                .pipe(connect.reload());
        }
    };
};
