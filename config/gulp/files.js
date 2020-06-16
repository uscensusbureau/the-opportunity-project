var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = 'files';

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying files from files/');

  var stream = gulp.src('./files/**/*')
    .pipe(gulp.dest('assets/files'));

  return stream;

});
