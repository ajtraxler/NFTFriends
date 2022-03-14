import { NFTEvent } from '../model/models';
import { Response, Request } from 'express';
import { EventType } from '../types';


// Creates a new event

export const postEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { group, host, description, date, title, venue, street, postcode, city, online, link, attendees } = req.body;
        const event: EventType | null = await NFTEvent.create({ group: group, description: description, host: host, date: date, title: title, venue: venue, street: street, postcode: postcode, city: city, online: online, link: link, attendees: attendees });
        res.status(201);
        res.send(event);
    }
    catch (err) {
        console.log(err, "error with postEvent");
        res.status(400);
        res.end();
    }
};


