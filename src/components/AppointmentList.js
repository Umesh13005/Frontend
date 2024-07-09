import React from 'react';
import axios from 'axios';

const AppointmentList = ({ appointments, fetchAppointments }) => {
  const cancelAppointment = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`);
      fetchAppointments();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {appointment.name} - {appointment.email} - {appointment.date} - {appointment.doctor}
            <button onClick={() => cancelAppointment(appointment._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
