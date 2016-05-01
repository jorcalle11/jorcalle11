import gulp       from 'gulp';
import connect    from 'gulp-connect';
import stylus     from 'gulp-stylus';

const path = {
  root: './app',
  html: './app/index.html',
  styles: {
    input: './app/css/stylus/*.styl',
    output: './app/css'
  }
}

gulp.task('connect', () => {
  connect.server({
    root: path.root,
    host:'0.0.0.0',
    port: 3000,
    livereload: true
  })
});

gulp.task('html', () => {
  gulp.src(path.html)
    .pipe(connect.reload());
});

gulp.task('stylus', () => {
  gulp.src(path.styles.input)
    .pipe(stylus())
    .pipe(gulp.dest(path.styles.output))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(path.html, ['html']);
  gulp.watch(path.styles.input, ['stylus']);
});

gulp.task('default', ['connect','watch']);
