const withTM = require('next-transpile-modules')

module.exports = withTM(['nats.ws'])() // pass the modules you would like to see transpiled
