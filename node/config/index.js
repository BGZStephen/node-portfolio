const env = process.env.NODE_ENV || 'development'

configs = {
  development: {
    database: '$MONGO_DATABASE',
    authorization: '$_AUTHORIZATION',
    secret: '$_SECRET'
  },
  production: {
    database: '$MONGO_DATABASE',
    authorization: '$_AUTHORIZATION',
    secret: '$_SECRET'
  }
}

module.exports = configs[env]
