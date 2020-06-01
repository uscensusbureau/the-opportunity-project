var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = 'fonts';

gulp.task('copy-uswds-fonts', function (done) {
  dutil.logMessage(task, 'Copying fonts from uswds');

  var stream = gulp.src('./node_modules/uswds/src/fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});


gulp.task('copy-custom-fonts', function (done) {

  dutil.logMessage(task, 'Copying custom fonts');

  var stream = gulp.src('./fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});

gulp.task(task,
  gulp.series(
    function (done) {
      dutil.logMessage(task, 'Copying fonts');
      done();
    },
    gulp.parallel(
      'copy-uswds-fonts',
      'copy-custom-fonts'
    )
  )
);
