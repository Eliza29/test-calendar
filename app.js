$(function() {

    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
        customButtons: {
          myCustomButton: {
            text: 'custom!',
            click: function() {
              alert('clicked the custom button!');
            }
          }
        },
        header: {
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        }
      });
     

  });
