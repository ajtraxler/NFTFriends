//import connection
const mongoose = require('./db.js')

//schema
const userSchema = new mongoose.Schema({
    eth_address: {//check API call name
        type: String,
        required: true
    },
    nft_groups: [String],//check API call name
    userName: String,
    description: String,
    attending_events: [String],
})

const eventSchema = new mongoose.Schema({
    collection_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    venue: String,
    street: String,
    postcode: String,
    city: String,
    online: {
        type: Boolean,
        required: true
    },
    link: String,
    attendees: [String]
})

const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = { User, Event };