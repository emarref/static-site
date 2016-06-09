import pug from 'gulp-pug';
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
                const stream = pug(options);
                return gulp.src(src)
                    .pipe(stream.on('error', handle(stream)))
                    .pipe(gulp.dest(dest))
                    .pipe(connect.reload());
            }
        }
    };
};
