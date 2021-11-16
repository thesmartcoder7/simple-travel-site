var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars  = require('postcss-simple-vars');
var nested = require('postcss-nested');



gulp.task("default", function (done) {
    console.log("You have created a Gulp task!");
    done();
});

gulp.task("html", function (done) {
    console.log("Imagine something useful happening to your html file");
    done();
});

gulp.task("styles", function (done) {
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"))

    done();
});

gulp.task("watch", function (done) {
    gulp.watch('./app/index.html', gulp.registry().get('html'))  
    done();
});

gulp.task("watch", function (done) {
    gulp.watch('./app/assets/styles/**/*.css', gulp.registry().get('styles')) 
    done();
});
