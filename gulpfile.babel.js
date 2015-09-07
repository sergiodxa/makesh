import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build', () => {
  gulp.src('./source/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./build/'));
});
