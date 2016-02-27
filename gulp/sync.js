const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('sync:browser', () => {
  const port = process.env.PORT ? process.env.PORT : 8080;
  browserSync.init({
    proxy: "localhost:" + port.toString()
  });
});

module.exports = {
  sync: 'sync:browser'
}
