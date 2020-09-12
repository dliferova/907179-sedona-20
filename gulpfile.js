const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const del = require("del");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const sync = require("browser-sync").create();


const html = () => {
  return gulp.src("source/*.html", { base: "source" })
    .pipe(gulp.dest("build"))
}
exports.html = html;


const js = () => {
  return gulp.src("source/js/**/*.js", { base: "source" })
    .pipe(gulp.dest("build"))
}
exports.js = js;


const fonts = () => {
  return gulp.src("source/fonts/**/*.{woff,woff2}", { base: "source" })
    .pipe(gulp.dest("build"))
}
exports.fonts = fonts;


const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}", { base: "source" })
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.mozjpeg({ progressive: true })
    ]))
    .pipe(gulp.dest("build"))
}
exports.images = images;


// Styles
const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}
exports.styles = styles;



// Normalize
const normalize = () => {
  return gulp.src("node_modules/normalize.css/normalize.css")
    .pipe(gulp.dest("build/css/normalize"))
}
exports.normalize = normalize;


const clean = () => {
  return del("build");
}
exports.clean = clean;


const build = gulp.series(
  clean,
  html,
  js,
  fonts,
  images,
  styles,
  normalize,
)
exports.build = build;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    open: false,
    cors: true,
    notify: false,
    ui: false,
    open: false
  });
  done();
}

exports.server = server;

// Watcher
const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("build"));
  gulp.watch("source/*.html").on("change", gulp.series(build));
  gulp.watch("source/js/*.js").on("change", gulp.series(build));
}

exports.default = gulp.series(
  build, normalize, server, watcher
);
