var Appointments = React.createClass( {
  getInitialState: function() {
    return {
      appointments: this.props.appointments.data,
      input_title: '',
      input_appointment_time: 'Tomorrow at 9am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={this.state .appointments} />
      </div>
    )
  }
});
