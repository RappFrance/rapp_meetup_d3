var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init(["./**/*"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task(
    'default', 
    ['server']
);

