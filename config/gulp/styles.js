import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglifycss';

export default function (gulp, connect, production) {
    return {
        build: (src, dest, includePaths = []) => {
            const defaultPaths = ['./node_modules/bootstrap-sass/assets/stylesheets'],
                options = {includePaths: defaultPaths.concat(includePaths)};

            return () => gulp.src(src)
                .pipe(gulpif(!production, sourcemaps.init({loadMaps: true})))
                .pipe(sass(options).on('error', sass.logError))
                .pipe(postcss([autoprefixer({browsers: ['> 5%']})]))
                .pipe(gulpif(!production, sourcemaps.write()))
                .pipe(gulpif(production, uglify()))
                .pipe(gulp.dest(dest))
                .pipe(connect.reload());
        }
    };
}
