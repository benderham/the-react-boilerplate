var src = 'src';
var build = 'public';

module.exports = {

  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 8080,
      files: [
        build + '/css/*.css',
        build + '/*.html',
        build + '/images/**',
        build + '/js/**/*.js'
      ]
    }
  },

  scss: {
    src:  src + '/scss/**/*.{sass,scss}',
    dest: build + '/css/'
  },

  pug: {
    src:  src + '/pug/**/*.pug',
    dest: build
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'Safari >= 8',
      'ie 8',
      'ie 9'
    ],
    cascade: false
  },

  modernizr: {
    src:  src + '/js/**/*.js',
    dest: build + '/js/'
  },

  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.jsx', '.js'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: './' + src + '/js/main.jsx',
        dest: build + '/js',
        outputName: 'main.js'
      }
    ]
  },

  image: {
    src: src + '/images/**/*.{jpg,png,gif,svg}',
    dest: build + '/images/'
  },

  svg: {
    src: src + '/svg/*.svg',
    dest: src + '/svg',
    mode: {
      symbol: {
        dest: '.',
        sprite: 'svg-sprite.svg'
      }
    }
  },

  watch: {
    sass: src + '/scss/**/*.{sass,scss}',
    pug: src + '/pug/**/*.pug',
    images:  src + '/images/**/*',
    scripts: src + '/js/**/*'
  },

  favicons: {
    src:  src + '/favicons/*',
    dest: build
  },

  optimize: {
    css: {
      src:  build + '/css/*.css',
      dest: build + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },

    js: {
      src:  build + '/js/*.js',
      dest: build + '/js/',
      options: {}
    }
  }

}