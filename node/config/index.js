const env = process.env.NODE_ENV || 'development'

configs = {
  development: {
    database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
    apiSecret: 'smMsavyzFEWh'
  },
  production: {
    database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
    apiSecret: 'smMsavyzFEWh'
  }
}

module.exports = configs[env]
