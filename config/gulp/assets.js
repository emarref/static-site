export default (gulp, connect) => {
    return {
        build: (src, dest) => {
            return () => gulp.src(src)
                .pipe(gulp.dest(dest))
                .pipe(connect.reload());
        }
    };
};
