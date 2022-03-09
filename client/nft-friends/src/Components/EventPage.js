import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import './EventPage.css'



function EventPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    console.log(state, "this iss the state");

    return (
        <div className="eventPageLayout">
            <div className="firstEventPage">
                <h3>{moment(state.date).format('hh:mm a   [-] MMMM Do[,] YYYY')}</h3>
                <div><h1>{state.title}</h1></div>
                <div><h3><b>Host:</b> {state.host}</h3></div>
                <br />
                <div className="descriptionBox">Description:{state.description}</div>
            </div>
            <div className="secondEventPage">
                <div className="secondEventPageItem">
                    <div>{moment(state.date).format('hh:mm a   [-] MMMM Do[,] YYYY')}</div>
                    <div>{state.venue}</div>
                    <div>{state.street}</div>
                    {/* <div>{state.postcode}</div>                    <div>{state.street}</div> */}
                    <div>{state.city}</div>



                </div>
            </div>
            <div className="thirdEventPage">
                <div><span><b>NFT Group:</b></span>
                    <span>{state.group}</span></div>
                <button>Attending/Attend</button>

            </div>






        </div>



    )
}

export default EventPage