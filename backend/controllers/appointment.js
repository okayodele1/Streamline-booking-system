import { db } from "../db.js";

export const bookAppointment = (req, res) => {
  const { name, email, phone, appointmentTime, appointmentDate, serviceName, stylist } = req.body;

  if (!serviceName) {
    return res.status(400).json("Service name is required");
  }

  const now = new Date();
  const appointmentDateTime = new Date(appointmentDate);
  if (appointmentDateTime <= now) {
    return res.status(400).json("Appointment date must be in the future");
  }

  const currentTime = now.toTimeString().split(' ')[0];

  const q = "INSERT INTO appointment (name, email, phone, appointment_time, appointment_date, service_name, stylist) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [name, email, phone, currentTime, now, serviceName, stylist];

  db.query(q, values, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("Appointment booked successfully.");
  });
};
