document.addEventListener('DOMContentLoaded', function() {
    var actualDay = new Date();

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialDate: actualDay,
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        businessHours: true,
        selectMirror: true,
        select: function(arg) {
            var title = prompt('Event Title:');
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
        var editar = prompt("¿Qué quieres hacer?");
            if (confirm('Are you sure you want to delete this event?')) {
                arg.event.remove()
            } if (confirm('Edit the event')){
                arg.event().editable
            }
        },
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events

    });
    calendar.render();
});