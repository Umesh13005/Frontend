import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = ({ fetchAppointments }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    doctor: ''
  });

  const { name, email, date, doctor } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      fetchAppointments();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      </div>
      <div>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      </div>
      <div>
        <input type="date" name="date" value={date} onChange={onChange} required />
      </div>
      <div>
        <input type="text" name="doctor" value={doctor} onChange={onChange} placeholder="Doctor" required />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
