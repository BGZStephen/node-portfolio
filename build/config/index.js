"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configs = {
    development: {
        database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
        cloudinary: {
            cloud_name: 'stephenwright-me',
            api_key: '951782574236431',
            api_secret: 'T2RLCJWxP3ayZFcEA4lLmtkMCV8',
        },
        secret: '$SECRET',
    },
    staging: {
        database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
        cloudinary: {
            cloud_name: '$CLOUD_NAME',
            api_key: '$API_KEY',
            api_secret: '$API_SECRET',
        },
        secret: '$SECRET',
    },
    production: {
        database: 'mongodb://stephen:klapaucius@ds161931.mlab.com:61931/bgzstephen-node-portfolio',
        cloudinary: {
            cloud_name: '$CLOUD_NAME',
            api_key: '$API_KEY',
            api_secret: '$API_SECRET',
        },
        secret: '$SECRET',
    },
};
exports.default = configs[global.ENV];
