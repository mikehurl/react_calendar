var Appointments = React.createClass( {
  getInitialState: function() {
    return {
      appointments: this.props.appointments.data,
      input_title: 'Team stand-up',
      input_appointment_time: 'Tomorrow at 9am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} input_appointment_time={this.state.input_appointment_time} />
        <AppointmentsList appointments={this.state .appointments} />
      </div>
    )
  }
});
