import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import './EventPage.css'



function EventPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <div className="eventPageLayout">
            <div className="firstEventPage">
                <span>{moment(state.date).format('hh:mm a   [-] MMMM Do[,] YYYY')}</span>
                <div><h2>{state.title}</h2></div>
                <div>Host: {state.host}</div>
                <br />
                <div>{state.description}</div>
            </div>
            <div className="secondEventPage">
                <div>{moment(state.date).format('hh:mm a   [-] MMMM Do[,] YYYY')}</div>
                {/* <div>{state.street...}</div> */}
            </div>
            <div className="thirdEventPage">
                <button>Attending/Attend</button>

            </div>






        </div>



    )
}

export default EventPage