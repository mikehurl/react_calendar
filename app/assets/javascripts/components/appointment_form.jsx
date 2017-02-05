var AppointmentForm = React.createClass( {
  handleChange: function(event) {
       var name = event.target.name;
       object = {}
       object[name] = event.target.value;
        this.props.onUserInput(object);
  },

  handleSubmit: function(event) {
     event.preventDefault();
     this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>
        <h2>Make an appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title' value={this.props.input_title} onChange={this.handleChange} />
          <input name='appointment_time' placeholder='Time and Date' value={this.props.input_appointment_time} onChange={this.handleChange} />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
