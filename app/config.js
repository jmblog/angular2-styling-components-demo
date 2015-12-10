System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true,
    sourceMap: true
  },
  paths: {
    'rxjs/operator/*': 'assets/rxjs/add/operator/*.js',
    'rxjs/*' : 'assets/rxjs/*.js'
  },
  //packages defines our app package
  packages: {
    components: {
      defaultExtension: 'ts'
    },
    services: {
      defaultExtension: 'ts'
    },
    'assets/rxjs': {
      defaultExtension: 'js'
    }
  }
});
