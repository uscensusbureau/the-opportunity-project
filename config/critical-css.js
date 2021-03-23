// const gulp = require("gulp");
const critical = require('critical') //.stream;

// use this to run via node
critical.generate({
  base: './',
  src: '_site/index.html',
  css: '_site/assets/css/styles.css',
  target: '_includes/critical.css',
  width: 720,
  height: 480,
  minify: true,
  ignore: {
    atrule: ['@font-face'],
  },
  ignore: {
    atrule: ['*'],
    decl: (node, value) => /ur.\(/.test(value),
  }
})

/**
 * To run in gulp, use the following
 * and un-comment line 1
 */
/*
gulp.task('critical', () => {
  return gulp
    .src('_site/index.html')
    .pipe(
      critical({
        base: './',
        // src: '_site/index.html',
        css: '_site/assets/css/styles.css',
        width: 320,
        height: 480,
        minify: true,
        extract: true,
        ignore: {
          atrule: ['@font-face'],
        }
      })
    )
    .on('error', err => {
      log.error(err.message);
    })
    .pipe(gulp.dest('_includes/'));
})
*/