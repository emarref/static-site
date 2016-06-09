import jade from 'gulp-jade';
import gutil from 'gulp-util';
import { handle } from './utilities';

export default (gulp, connect, production) => {
    return {
        build: (src, dest, locals = {}) => {
            return () => {
                const j = jade({locals: locals});
                return gulp.src(src)
                    .pipe(j.on('error', handle(j)))
                    .pipe(gulp.dest(dest))
                    .pipe(connect.reload());
            }
        }
    };
};
