var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={appointments} />
      </div>
    )
  }
});
