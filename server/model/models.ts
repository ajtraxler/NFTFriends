import { db } from './db'
import { UserType, EventType } from '../types';
import { Schema, Model } from 'mongoose';

const userSchema: Schema = new db.Schema({
    eth_address: { type: String, required: true },
    nft_groups: [String],
    userName: String,
    attending_events: [String],
})

const eventSchema = new db.Schema({
    group: { type: String, required: true },
    host: String,
    date: { type: Date, required: true },
    description: String,
    title: String,
    venue: String,
    street: String,
    postcode: String,
    city: String,
    online: Boolean,
    link: String,
    attendees: [String],
})

export const User: Model<UserType> = db.model('User', userSchema);
export const NFTEvent: Model<EventType> = db.model('Event', eventSchema);
