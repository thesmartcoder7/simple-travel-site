var gulp = require("gulp");
//var watch = require("gulp-watch");

gulp.task("default", function (done) {
    console.log("You have created a Gulp task!");
    done();
});

gulp.task("html", function (done) {
    console.log("Imagine something useful happening to your html file");
    done();
});

gulp.task("watch", function (done) {
    // gulp.watch("./app/index.html", function (done) {
    //     gulp.series("html");
    //     done();
    // });
    
    gulp.watch('./app/index.html', gulp.registry().get('html'))
      
      
    done();
});
