import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/NFTFriendsDB')
    .then(() => console.log('connected to mongooes'));

export const db = mongoose