const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const connectDB = async () => {
try {
  await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('mongoDB connected');

} catch (err) {
    console.log(err.message);
    process.exit(1);
}

};



module.exports = connectDB;