import React from 'react'
import { useLocation } from 'react-router-dom'
import { communityEvents } from '../Services/ApiClient'
import EventList from './EventList.js'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [events, setEvents] = React.useState([]);
    const [myEvents, setMyEvents] = React.useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;


    const asyncCommunityEvents = async () => {
        let communityEventsList = await communityEvents(state)
            .then((res) => { return res.json(); }
            )
        console.log(communityEventsList);
        setEvents(communityEventsList);
    }

    React.useEffect(() => {
        // console.log(state);
        asyncCommunityEvents();
    }, [])

    //think other scenario--> no NFT events in their groups --> LT plan
    React.useEffect(() => {
        if (events.length > 0) {
            setIsLoading(false);
        }
    }, [events])




    //FUNCTIONS

    const addToList = (eventItem) => {
        if (!myEvents.includes(eventItem)) {
            let newEvents = myEvents.concat(eventItem);
            setMyEvents(newEvents);
            console.log("event Item added:", eventItem)
        }
        else {
            setMyEvents(myEvents.filter(event => event !== eventItem));
            console.log(myEvents);
        }
        console.log("my events: ", myEvents)
    }

    const formHandler = () => {
        navigate('../form', { state: state })
    }


    return (
        <div>
            <div>Dashboard</div>
            <button onClick={formHandler} > Create event</button>
            {myEvents.length > 0
                ? (<div><h2>Events you are attending:</h2>
                    <EventList events={myEvents} addfunc={addToList}></EventList>
                </div>)
                : console.log('No events attending yet')}
            {
                isLoading
                    ? (<h1>Loading..</h1>)
                    : (<div>
                        <div><h2>Events</h2></div>
                        <div>Browse events in your community:</div>
                        <EventList events={events} addfunc={addToList}></EventList>
                    </div>)
            }
        </div>
    );
}

export default Dashboard