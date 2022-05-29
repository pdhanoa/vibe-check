import React from 'react';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// Calendar page component

const Calendar = () => {

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                // weekends={this.state.weekendsVisible} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventClick={this.handleEventClick}
                // eventsSet={this.handleEvents} 
            />
        </div>
    )
}

export default Calendar;
