const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
const env = process.env.NODE_ENV;
const envFile = env === 'test' ? '.env.test' : '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Validate current config
config.validate({ allowed: 'strict' });

module.exports = {
    // Export plain config object
    ...config.getProperties(),

    // Export config related aliases
    isTest: env === 'test',
    isProduction: env === 'production',
    db: process.env.MONGODB_URI
};