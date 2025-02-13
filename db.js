const { connect } = require('mongoose');

const connectDB = async (url) => {
    try {
        console.log('Attempting to connect to the database...');
        await connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database');
        console.error(error);
    }
};

module.exports = { connectDB };