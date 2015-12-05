System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true,
    sourceMap: true
  },
  //packages defines our app package
  packages: {
    components: {
      defaultExtension: 'ts'
    },
    services: {
      defaultExtension: 'ts'
    }
  }
});
