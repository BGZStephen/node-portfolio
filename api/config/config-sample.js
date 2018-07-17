const configs = {
  development: {
    database: '$DATABASE',
    cloudinary: {
      cloud_name: '$CLOUD_NAME',
      api_key: '$API_KEY',
      api_secret: '$API_SECRET'
    },
    secret: '$SECRET'
  },
  staging: {
    database: '$DATABASE',
    cloudinary: {
      cloud_name: '$CLOUD_NAME',
      api_key: '$API_KEY',
      api_secret: '$API_SECRET'
    },
    secret: '$SECRET'
  },
  production: {
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
