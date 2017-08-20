const env = process.env.NODE_ENV || 'development'

configs = {
  development: {
    database: "mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio",
  },
  production: {
    database: "mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio",
  }
}

module.exports = configs[env]
