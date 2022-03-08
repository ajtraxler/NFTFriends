const { User, Event } = require('../model/models.js');



const getCommunityEvents = async (req, res) => {
  try {
    //session id for individual user
    console.log('in get community events');
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
    console.log(communityEvents);
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
    const userId = req.session.userId; //have to send user info
    const { title, _id } = req.body;//alternatively try with req.params._id
    const eventId = _id;

    const user = await User.findOne({ eth_address: userId });
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
    const userId = req.session.userId; //have to send user info
    const { title, _id } = req.body;//alternatively try with req.params._id
    const eventId = _id;


    //filter to remove event from user
    const user = await User.findOne({ eth_address: userId });
    const updatedList = user.attending_events.filter(event => event !== title);
    user.attending_events = updatedList;
    user.save();

    //remove user from event
    const event = await Event.findOne({ _id: eventId });
    console.log("this is the event", event);
    // //filter to remove
    const newAttendees = event.attendees.filter(attendees => attendees !== userId)
    event.attendees = newAttendees;
    event.save();
    res.send(event)

  }
  catch (err) {
    console.log(err)
  }
}





module.exports = { getCommunityEvents, addToMyEvents, removeFromMyEvents };
