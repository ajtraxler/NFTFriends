import { model, Schema, Model, Document } from 'mongoose';

export interface UserType extends Document {
	eth_address: string;
	nft_groups?: string[];
	userName?: string;
	attending_events?: string[]
}

export interface EventType extends Document {
	group: string;
	host?: string;
	date: Date;
	description?: string;
	title?: string;
	venue?: string;
	street?: string;
	postcode?: string;
	city?: string;
	online?: boolean;
	link?: string;
	attendees?: string[]
}