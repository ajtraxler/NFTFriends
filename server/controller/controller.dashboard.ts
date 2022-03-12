import { User, NFTEvent } from '../model/models';
import express, { Request, Response } from "express";
import { EventType, UserType } from '../types';

export const getCommunityEvents = async (req: Express.Request, res: Express.Response) => {
  try {
    const nft_groups = req.body; 
    const communityEvents: [] = [];
    const events: Array<typeof NFTEvent> = await NFTEvent.find();
    for (let group of nft_groups) {
      for (let event of events) {
        if (event.group === group) {
          communityEvents.push(event);
        }
      }
    }
    res.send(communityEvents);
    res.status(200);
    return communityEvents;
  }
  catch (err) {
    console.log(err, "err");
    res.status(500);
  }
}

export const addToMyEvents = async (req: Express.Request, res: Express.Response) => {
  try {
    const userId = req.session.userId;
    const { title, _id } = req.body;
    const eventId = _id;
    const user: UserType | null  = await User.findOne({ eth_address: userId });
    user.attending_events.push(title);
    user.save();
    const event: EventType | null = await Event.findOne({ _id: eventId });
    event.attendees.push(userId);
    event.save();
    res.send(event);
  } catch (err) { 
    console.log(err) 
    res.status(500);
  }
}

export const removeFromMyEvents = async (req: Express.Request, res: Express.Response) => {
  try {
    const userId = req.session.userId; 
    const { title, _id } = req.body;
    const eventId = _id;
    const user: UserType = await User.findOne({ eth_address: userId });
    const updatedList = user.attending_events.filter(event => event !== title);
    user.attending_events = updatedList;
    user.save();
    const event: EventType = await Event.findOne({ _id: eventId });
    const newAttendees = event.attendees.filter(attendees => attendees !== userId)
    event.attendees = newAttendees;
    event.save();
    res.send(event)
  }
  catch (err) {
    console.log(err)
    res.status(500);
  }
}
