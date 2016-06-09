'use strict';

import path from 'path';
import browserify from 'browserify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

export default (gulp, connect, production) => {
    return {
        build: (src, dest) => {
            const config = {entries: src, debug: !production},
                bundler = browserify(config)
                    .transform('babelify', {presets: ['es2015']})
                    .transform({global: true}, 'uglifyify');

            return () => bundler.bundle()
                .on('error', (err) => { gutil.log(err); this.emit('end'); })
                .pipe(source(path.basename(src)))
                .pipe(buffer())
                .pipe(gulp.dest(dest))
                .pipe(connect.reload());
        }
    }
};
