var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');


gulp.task('imagemin', function () {
    return gulp.src('./development/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});

gulp.task('sass', function () {
  gulp.src('./development/sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('java', function() {
  return gulp.src('./development/lib/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./js'));
});


gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./development/images/*', ['imagemin']);
    gulp.watch('./development/sass/**/*.scss', ['sass']);
    gulp.watch('./development/lib/*.js', ['java']);
    gulp.watch(['./css/*.css', './**/*.twig', './js/*.js'], function (files){
        livereload.changed(files)
    });
});
