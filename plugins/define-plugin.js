const definePlugin = {
  name: 'define-plugin',
  setup(build) {
    const options = build.initialOptions;
    options.define.SOME_ENV_VAR =
      '"NG-ESBUILD-DEFINE from an ENV VAR set at build time"';
  },
};

module.exports = definePlugin;
