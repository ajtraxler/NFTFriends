//import mongoose
import mongoose  from 'mongoose';

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/NFTFriendsDB')
    .then(() => console.log('connected to mongooes'));

//save connection as db
export const db = mongoose;

