const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    apiUrl: '$API_URL',
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
    apiUrl: '$API_URL',
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
    apiUrl: '$API_URL',
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

module.exports = configs[env];
