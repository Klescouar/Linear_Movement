var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var pngquant = require('imagemin-pngquant');
var gulpCopy = require('gulp-copy');
var inject = require('gulp-inject');
var bs = require("browser-sync").create();
var imageop = require('gulp-image-optimization');


gulp.task('sass', function() {
  gulp.src('public/assets/scss/style.scss')
  .pipe(inject(gulp.src(['**/*.scss'], {read: false, cwd: 'public/assets/scss'}), {
    starttag: '/* IMPORTS */',
    endtag: '/* Fin des IMPORTS */',
    transform: function (filepath) {
      var res = '@import \'' + filepath + '\';';
      console.log(res);
      return res;
    }
  }))
  .pipe(sass({outputStyle: 'compressed'})) //
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR', 'ie 11'))
  .pipe(plumber())
  .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {

    gulp.src('public/assets/js/**/*.js')

    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('images', function() {
    return gulp.src('public/**/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function() {
    gulp.src('public/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('public/views/*.html')
        .pipe(gulp.dest('dist/views'));
    gulp.src('public/lib/**/*')
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('default', ['sass','scripts','images','copy'], function() {
    gulp.watch('public/assets/scss/*.scss', ['sass']);
    gulp.watch('public/**/*.js', ['scripts']);
    gulp.watch('public/assets/images/*', ['images']);
    gulp.watch('public/index.html', ['copy']);
    gulp.watch('public/views/*.html', ['copy']);
});
