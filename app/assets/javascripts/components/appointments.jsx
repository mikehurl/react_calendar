var Appointments = React.createClass( {
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: 'Team stand-up',
      appointment_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(object) {
    this.setState(object);
  },

  handleFormSubmit: function() {
    var appointment = {title: this.state.title, appointment_time: this.state.appointment_time};
    $.post('/appointments', {appointment: appointment}).done(function(data) {
      
    });
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appointment_time={this.state.appointment_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}/>
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});
