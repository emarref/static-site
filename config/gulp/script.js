'use strict';

import path from 'path';
import browserify from 'browserify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import { handle } from './utilities';

export default (gulp, connect, production) => {
    return {
        build: (src, dest) => {
            const config = {entries: src, debug: !production},
                bundler = browserify(config)
                    .transform('babelify', {presets: ['es2015']})
                    .transform({global: true}, 'uglifyify');

            return () => {
                const stream = source(path.basename(src));

                bundler.bundle()
                    .on('error', handle(stream))
                    .pipe(stream)
                    .pipe(buffer())
                    .pipe(gulp.dest(dest))
                    .pipe(connect.reload());
            }
        }
    }
};
