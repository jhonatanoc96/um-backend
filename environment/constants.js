const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/um-database?readPreference=primary&directConnection=true&ssl=false&authSource=admin&retryWrites=true&w=majority';
const HOST = '127.0.0.1';

module.exports = { 
    MONGODB_URI,
    HOST
 };