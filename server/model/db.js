//require mongoosse
const mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/NFTFriendsDB')
    .then(() => console.log('connected to mongooes'));

//save connection as db
const db = mongoose;

//export connection 
module.exports = db;