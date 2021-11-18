var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task("watch", function (done) {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    gulp.watch('./app/index.html').on('change', browserSync.reload);

    gulp.watch('./app/assets/styles/**/*.css', gulp.registry().get('cssInject')) 

});

gulp.task("cssInject", gulp.series('styles'), function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())
})
