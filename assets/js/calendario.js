document.addEventListener('DOMContentLoaded', function() {
    var actualDay = new Date();

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next,today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialView: 'dayGridMonth',
        initialDate: actualDay,
        selectable: true,
        navLinks: true,
        locales: 'es',
        businessHours: true,
        configurable: true,
        selectMirror: true,
        weeks: actualDay,
        select: function(arg) {
            var title = prompt('Introduce el nombre del evento');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                })
            }
            calendar.unselect()
        },
        eventClick: function(arg) {
            if (confirm('¿Seguro que desea eliminarlo?')) {
                arg.event.remove()
            }
        },
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        repeat: true
    });
    calendar.render();
});