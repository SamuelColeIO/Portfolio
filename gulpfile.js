const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const flatten = require('gulp-flatten');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// html
gulp.task('html', function(){
  return gulp.src('build/app/')
    .on('error', swallowError)
    .pipe(browserSync.reload({
      stream: true
    }))
});

// js
gulp.task('js', function(){
  return gulp.src(['src/app/js/hammer-js.js', 'src/app/js/data.js', 'src/app/js/main.js', 'src/app/js/emphasise.js', 'src/app/js/scroll.js', 'src/app/js/project-viewer.js'])
  .on('error', swallowError)
  .pipe(concat('main.js'))
  .pipe(babel({presets: ['env']}))
  .pipe(uglify())
  .pipe(gulp.dest('build/app/js'))
  .pipe(browserSync.reload({
    stream:true
  }))
});
  
// css & sass

gulp.task('sass', function(){
  return gulp.src('src/app/**/*.scss')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(flatten())
    .pipe(gulp.dest('build/app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', function(){
  gulp.src("src/app/**/*.css")
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('build/app/'));
});

// images
gulp.task('png', function(){
  gulp.src("src/app/images/**/*.png")
  .pipe(gulp.dest('build/app/images'));
});

gulp.task('jpg', function(){
  gulp.src("src/app/images/**.jpg")
  .pipe(gulp.dest('build/app/images'));
});

gulp.task('svg', function(){
  gulp.src("src/app/images/**.svg")
  .pipe(gulp.dest('build/app/images'));
});

// fonts
gulp.task('ttf', function(){
  gulp.src("src/app/**/*.ttf")
  .pipe(gulp.dest('build/app/'));
});

gulp.task('woff', function(){
  gulp.src("src/app/**/*.woff")
  .pipe(gulp.dest('build/app/'));
});

gulp.task('woff2', function(){
  gulp.src("src/app/**/*.woff2")
  .pipe(gulp.dest('build/app/'));
});

gulp.task('eot', function(){
  gulp.src("src/app/**/*.eot")
  .pipe(gulp.dest('build/app/'));
});

// watck task
gulp.task('watch', ['browserSync', 'js', 'css', 'sass', 'html', 'jpg', 'png', 'svg', 'ttf', 'woff', 'woff2', 'eot'], function (){
  gulp.watch('src/app/**/*.js', ['build', 'js']),
  gulp.watch('src/app/**/*.css', ['build', 'css']),
  gulp.watch('src/app/**/*.scss', ['build', 'sass']),
  gulp.watch('src/app/**/*.html', ['build', 'html']),
  gulp.watch('src/app/images/*.jpg', ['build', 'jpg']),
  gulp.watch('src/app/images/*.png', ['build', 'png']),
  gulp.watch('src/app/images/*.svg', ['build', 'svg']),
  gulp.watch('src/app/**/*.ttf', ['build', 'ttf']);
  gulp.watch('src/app/**/*.woff', ['build', 'woff']);
  gulp.watch('src/app/**/*.woff2', ['build', 'woff2']);
  gulp.watch('src/app/**/*.eot', ['build', 'eot']);
})

// build sync
gulp.task('build', function(){
  return gulp.src('src/app/**/*.html')
    .pipe(useref())
    .pipe(gulp.dest('build/app'))
});

// browser sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build/app'
    },
  })
})

// errors
function swallowError (error) {
    console.log(error.toString())
    this.emit('end')
  }

//default task
gulp.task('default', ['watch']);
