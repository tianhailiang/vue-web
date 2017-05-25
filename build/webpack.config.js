

module.exports = function(env) {
	
	console.log(env)
	// return require('./webpack.dev.js')({ env: env })

  return require(`./webpack.${env}.js`)({ env: env })
}


