exports.modifyBabelrc = ( {babelrc}, options ) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      ['transform-imports', options]
    ])
  }
}
