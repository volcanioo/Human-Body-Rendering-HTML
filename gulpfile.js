var gulp = require('gulp');
var browserSync = require('browser-sync').create();
const base = 'Human-Body-Rendering-HTML';
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: base
        }
    });
});
gulp.task('watch', function () {
    gulp.watch(base + "/*.html").on("change", browserSync.reload);
    gulp.watch(base + "/*.js").on("change", browserSync.reload);
});
gulp.task('default', ['watch', 'browser-sync']);
