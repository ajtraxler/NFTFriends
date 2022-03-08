import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EventItem({ event, addfunc }) {
    const navigate = useNavigate();
    const location = useLocation();

    const eventPageHandler = () => {
        navigate('../eventPage', { state: event })
    }

    return (
        <div>
            <div onClick={() => addfunc(event)}>EventItem
                {event.group}
                {event.title}
                {event.date}
            </div>
            <button onClick={eventPageHandler} >See details</button>



        </div>
    )
}

export default EventItem