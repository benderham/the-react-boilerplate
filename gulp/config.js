var src = '_src';
var build = '_dist';

module.exports = {
  
  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 8080,
      files: [
        build + '/css/*.css',
        build + '/js/*.js',
        build + '/images/**',
        build + '/fonts/*'
      ]
    }
  },

  sass: {
    src:  src + '/scss/**/*.{sass,scss}',
    dest: build + '/css/',
  },

  jade: {
    src:  src + '/jade/**/*.jade',
    dest: build,
  },

  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: false
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
      },
      {
        entries: './' + src + '/js/vendor',
        dest: build + '/js',
        outputName: 'vendor.js'
      }
    ]
  },

  image: {
    src: src + '/images/**/*.{jpg,png,gif,svg}',
    dest: build + '/images/',
  },

  watch: {
    sass:    src + '/scss/**/*.{sass,scss}',
    scripts: src + '/js/**/*.{js,jsx}',
    images:  src + '/images/**/*',
    jade: src + '/jade/**/*.jade'
  },

  fonts: {
    src:  src + '/fonts/*',
    dest: build + '/fonts'
  },

  favicons: {
    src:  src + '/favicons/*',
    dest: build
  },

  modernizr: {
    src: src + '/js/*.js',
    dest: build + '/js/'
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
};
