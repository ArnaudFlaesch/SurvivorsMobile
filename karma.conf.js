module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['@angular/cli', 'requirejs', 'jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-firefox-launcher'),
      require('karma-requirejs'),
      require('karma-typescript-plugin'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      {pattern: './src/test.ts', watched: false},
      {pattern: './src/app/!(*spec).ts', watched: true},
      {pattern: './src/pages/**/!(*spec).ts', watched: true},
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli'],
      './src/app/!(*spec).ts': ['typescript', 'coverage'],
      './src/pages/**/!(*spec).ts': ['typescript', 'coverage']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    typescriptPreprocessor: {
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      },
      typescript: require('typescript')

    },
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: '.' },
        { type: 'clover', subdir: '.' }
      ]
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: ['progress', 'coverage', 'typescript'],
    port: 1337,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: true
  });
};
