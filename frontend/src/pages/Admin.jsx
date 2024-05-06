import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/appointment/getall");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const response = await axios.delete(`http://localhost:8800/api/appointment/cancel/${appointmentId}`);
      console.log(response.data);
      fetchAppointments(); 
    } catch (error) {
      console.error("Error cancelling appointment:", error);
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2 style={{marginTop:40}}>Welcome Admin! Manage All Appointments</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Email</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Phone</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Appointment Time</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Appointment Date</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Service Name</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Stylist</th>
            <th style={{ backgroundColor: '#f2f2f2', color: '#333', fontWeight: 'bold', border: '1px solid #ddd', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.appointmentId}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.phone}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.appointment_time}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatDate(appointment.appointment_date)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.service_name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{appointment.stylist}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => cancelAppointment(appointment.appointment_id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
