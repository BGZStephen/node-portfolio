const configs = {
  development: {
    authorization: '$AUTHORIZATION_TOKEN',
    database: '$DATABASE',
    cloudinary: {
      cloud_name: '$CLOUD_NAME',
      api_key: '$API_KEY',
      api_secret: '$API_SECRET'
    },
    secret: '$SECRET'
  },
  staging: {
    authorization: '$AUTHORIZATION_TOKEN',
    database: '$DATABASE',
    cloudinary: {
      cloud_name: '$CLOUD_NAME',
      api_key: '$API_KEY',
      api_secret: '$API_SECRET'
    },
    secret: '$SECRET'
  },
  production: {
    authorization: '$AUTHORIZATION_TOKEN',
    database: '$DATABASE',
    cloudinary: {
      cloud_name: '$CLOUD_NAME',
      api_key: '$API_KEY',
      api_secret: '$API_SECRET'
    },
    secret: '$SECRET'
  }
};

module.exports = configs[global.ENV];
