import React from 'react'
import EventItem from './EventItem.js'

function EventList({ events, addfunc }) {
    return (
        <div>
            <div>EventList</div>
            {events.map(eventItem => {
                return (<EventItem event={eventItem} addfunc={addfunc} key={eventItem._id}></EventItem>)
            })}
        </div>

    )
}

export default EventList