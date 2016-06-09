import jade from 'gulp-jade';
import gutil from 'gulp-util';
import { handle } from './utilities';

export default (gulp, connect, production) => {
    return {
        build: (src, dest, locals = {}) => {
            const options = {
                locals,
                pretty: !production
            };

            return () => {
                const j = jade(options);
                return gulp.src(src)
                    .pipe(j.on('error', handle(j)))
                    .pipe(gulp.dest(dest))
                    .pipe(connect.reload());
            }
        }
    };
};
