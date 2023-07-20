const mongoose = require('mongoose');

// Replace 'yourDatabaseName' with the name of your MongoDB database (e.g., 'crud')
const dbURI = 'mongodb://localhost:27017/crud';

(async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection successful');
  } catch (error) {
    console.error('Connection failed:', error);
  }
})();
