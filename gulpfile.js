var gulp=require('gulp'),
	sass=require('gulp-sass'),
  pug=require('gulp-pug'),
	browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync.init({
    proxy:'localhost/vent',
  })
})


gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.scss') 
     .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('html', function() {
  return gulp.src('app/**/*.html') 
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('php', function() {
  return gulp.src('app/**/*.php') 
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('js', function() {
  return gulp.src('app/**/*.js') 
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
})
gulp.task('pug', function() {
  var p=pug();
  p.on('error', function(e){
    console.log(e);
    p.end();
  });
  return gulp.src('app/pug/**/*.pug') 
    .pipe(p)
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'sass', 'pug', 'html', 'php', 'js'], function(){
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  gulp.watch('app/pug/**/*.pug', ['pug']);
  gulp.watch('app/**/*.html', ['html']); 
  
  gulp.watch('app/**/*.php', ['php']); 
  gulp.watch('app/**/*.js', ['js']); 
  // другие ресурсы
})