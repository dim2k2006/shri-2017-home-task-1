import gulp         from 'gulp';
import settings     from '../settings';

gulp.task('copy', () => {
    gulp.src(settings.src.images + '/*.xml')
        .pipe(gulp.dest(settings.dist.images));

    gulp.src(settings.src.images + '/*.json')
        .pipe(gulp.dest(settings.dist.images));

    return true;
});
