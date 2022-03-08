import React from 'react'
import EventItem from './EventItem.js'
import './EventList.css'

function EventList({ events, addfunc }) {
    return (
        <div className="eventListClass">
            {events.map(eventItem => {
                return (<EventItem event={eventItem} addfunc={addfunc} key={eventItem._id}></EventItem>)
            })}
        </div>

    )
}

export default EventList