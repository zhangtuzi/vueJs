var gulp=require('gulp');
var less=require('gulp-less');
var BrowserSync=require('browser-sync');
gulp.task('style',function(){
  gulp.src('target/css/*.less')
  .pipe(less())
  .pipe(gulp.dest('src/css/'))
  .pipe(BrowserSync.reload({stream:true}));
})
gulp.task('hxjs',function(){
  gulp.src('target/js/*.js')
  .pipe(gulp.dest('src/js'))
  .pipe(BrowserSync.reload({stream:true}));
})
gulp.task('html_ys',function(){
  gulp.src('target/*.html')
  .pipe(gulp.dest('src/'))
  .pipe(BrowserSync.reload({stream:true}));
})

gulp.task('serve',function(){
  BrowserSync({
    server:{baseDir:['src/']}
  });
  gulp.watch('target/css/*.less',['style']);
  gulp.watch('target/js/*.js',['hxjs']);
  gulp.watch('target/*.html',['html_ys']);

})
