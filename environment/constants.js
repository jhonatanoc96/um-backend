const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/um-database?readPreference=primary&directConnection=true&ssl=false&authSource=admin&retryWrites=true&w=majority';
const HOST = 'localhost';

module.exports = { 
    MONGODB_URI,
    HOST
 };