const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const csso = require("postcss-csso");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("autoprefixer");
const del = require("del");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

const html = () => {
  return gulp.src("source/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

const script = () => {
  return gulp.src("source/js/script.js")
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream())
}

exports.script = script;

const minImage = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel:3}),
      imagemin.svgo()
      ]))
    .pipe(gulp.dest("build/img"))
}

exports.minImage = minImage;

const copy = () => {
  return gulp.src([
      "source/fonts/*.{woff2,woff}",
      "source/sass/manifest.webmanifest",
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

const copyImage = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(gulp.dest("build/img"))
}

exports.copyImage = copyImage;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

const clean = () => {
  return del("build");
};

exports.clean = clean;
// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/script.js", gulp.series("script"));
  gulp.watch("source/index.html", gulp.series("html")).on("change", sync.reload);
}

exports.watcher = watcher;

const build = gulp.series(
  clean,
  copy,
  minImage,
  gulp.parallel (
    styles,
    html,
    script
  ),
);

exports.build = build;

exports.default = gulp.series(
  copy,
  copyImage,
  gulp.parallel (
    styles,
    html,
    script
  ),
  gulp.series (
    server,
    watcher
  )
);
