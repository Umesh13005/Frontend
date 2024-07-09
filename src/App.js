

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="App">
      <h1>Hospital Management System</h1>
      <AppointmentForm fetchAppointments={fetchAppointments} />
      <AppointmentList appointments={appointments} fetchAppointments={fetchAppointments} />
    </div>
  );
};

export default App;

