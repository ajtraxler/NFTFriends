
const getCommunityEvents = async (req, res) => {
  try {
    //assuming here that browser knows which individual we are on
    const { nft_groups } = req.body;//get groups of user
    const communityEvents = [];
    //first make a get
    const events = await Events.find({});

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
    //as input will give event_id
    const event = await 
    const user = await

  }
  catch (err) { }
}

const removeFromMyEvents = async (req, res) => {
  try { }
  catch (err) { }
}





module.exports = { getCommunityEvents, addToMyEvents, removeFromMyEvents };
