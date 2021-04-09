const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist")).pipe(connect.reload());
    done();
});
gulp.task("sass", done => {
    gulp.src("sass/*.scss").pipe(sass())
        .pipe(gulp.dest("dist/css")).pipe(connect.reload());
    done();
})
gulp.task("js", done => {
    gulp.src("js/*.js").pipe(uglify())
        .pipe(gulp.dest("dist/js")).pipe(connect.reload());
    done();
})
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    done();
})
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
})
gulp.task("font", done => {
    gulp.src("font/*").pipe(gulp.dest("dist/font")).pipe(connect.reload());
    done();
})
gulp.task("bulid", gulp.parallel("html", "sass", "js", "font"));
gulp.task("default", gulp.series("bulid", "server", "watch"));