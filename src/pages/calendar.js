import React from 'react';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'

// Calendar page component

const Calendar = () => {

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
            />
        </div>
    )
}

export default Calendar;
