const { build } = require('esbuild')
const { dependencies, devDependencies } = require('./package.json')

build({
  entryPoints: ['./src/shared/infra/http/server.ts'],
  outdir: './dist',
  minify: true,
  bundle: true,
  external: Object.keys(dependencies).concat(Object.keys(devDependencies)),
})
