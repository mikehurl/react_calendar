var AppointmentForm = React.createClass( {
  render: function() {
    return (
      <div>
        <h2>Make an appointment</h2>
        <form>
          <input name='title' placeholder='Appointment Title' />
          <input name='appointment_time' placeholder='Time and Date' />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
