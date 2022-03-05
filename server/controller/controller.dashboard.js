const { User, Event } = require('../model/models.js');



const getCommunityEvents = async (req, res) => {
  try {
    //assuming here that browser knows which individual we are on
    const { nft_groups } = req.body;//get groups of user
    const communityEvents = [];
    //first make a get
    const events = await Event.find();

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

const addToMyEvents = async (req, res) => {
  try {
    console.log("in addToMyEvent")
    //const eventId = req.param.id;

    const userId = req.session.userId; //have to send user info
    const { title, _id } = req.body;//alternatively try with req.params._id
    console.log(userId);
    console.log(title);
    const eventId = _id;

    const user = await User.findOne({ eth_address: userId });
    console.log("this is the user ", user);

    console.log("this is the events the user is attending ", user.attending_events);

    //find User by userId  and add eventId to attending_events
    user.attending_events.push(title);
    user.save();


    //find Event by eventID and add userID to attendees
    console.log(eventId, "eventId")
    const event = await Event.findOne({ _id: eventId });
    console.log("this is the event", event);
    event.attendees.push(userId);
    console.log(event.attendees);
    event.save();


    res.send(event);

  }

  //as input will give event_id
  // const event = await 
  // const user = await
  catch (err) { console.log(err) }
}

const removeFromMyEvents = async (req, res) => {
  try {
    const { userId } = req.session.userId; //have to send user info
    const { eventId } = req.body;//alternatively try with req.params._id

    //filter to remove event
    const user = await User.findById({ _id: userID });
    const updatedList = user.attending_events.filter(event => event !== eventId);
    console.log(updatedList);
    user.attending_events = updatedList;
    //user.attending_events.push(userId);
    user.save();

    //filter event to remove user
    const event = await Event.findById({ _id: eventId });
    //filter to remove
    const newAttendees = event.attendees.filter(user => user !== userId)
    console.log(newAttendees);

    event.save();

  }
  catch (err) {
    console.log(err)
  }
}





module.exports = { getCommunityEvents, addToMyEvents, removeFromMyEvents };
