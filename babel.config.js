module.exports = (api) => {
	api.cache(true)

	return {
		presets: [ '@babel/env', '@babel/preset-react', '@babel/preset-typescript' ],
		plugins: [
			[
				'babel-plugin-root-import',
				{
					rootPathSuffix: 'src',
					rootPathPrefix: '~@'
				}
			]
		]
	}
}
