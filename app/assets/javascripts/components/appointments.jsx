var Appointments = React.createClass( {
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Team stand-up',
      appointment_time: 'Tomorrow at 9am'
    }
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title} input_appointment_time={this.state.appointment_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});
