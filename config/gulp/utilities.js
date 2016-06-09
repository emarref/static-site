import gutil from 'gulp-util';

const handle = stream => err => {
    gutil.log(err);
    stream.end();
};

export { handle };
