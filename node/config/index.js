const env = process.env.NODE_ENV || 'development'

configs = {
  development: {
    database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
    authorization: 'smMsavyzFEWh',
    secret: 'nodePortfolio'
  },
  production: {
    database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
    authorization: 'smMsavyzFEWh',
    secret: 'nodePortfolio'
  }
}

module.exports = configs[env]
