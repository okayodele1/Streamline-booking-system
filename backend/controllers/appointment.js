import { db } from "../db.js";

export const bookAppointment = (req, res) => {
  const { name, email, phone, appointment_time, appointment_date, serviceName, stylist } = req.body;

  if (!serviceName) {
    return res.status(400).json("Service name is required");
  }

  const now = new Date();
  const appointmentDateTime = new Date(appointment_date);
  if (appointmentDateTime <= now) {
    return res.status(400).json("Appointment date must be in the future");
  }

  // Check if the stylist and time/date combination is available
  const q = "SELECT * FROM appointment WHERE stylist = ? AND appointment_time = ? AND appointment_date = ?";
  const values = [stylist, appointment_time, appointment_date];

  db.query(q, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (result.length > 0) {
      return res.status(400).json("This stylist is not available at the selected time and date.");
    }

    // If stylist and time/date are available, proceed with booking
    const insertQuery = "INSERT INTO appointment (name, email, phone, appointment_time, appointment_date, service_name, stylist) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const insertValues = [name, email, phone, appointment_time, appointment_date, serviceName, stylist];

    db.query(insertQuery, insertValues, (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({ message: "Appointment booked successfully.", appointmentId: result.insertId });
    });
  });
};


export const cancelAppointment = (req, res) => {
  const { appointmentId } = req.params;

  const q = "DELETE FROM appointment WHERE appointment_id = ?";
  db.query(q, appointmentId, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("Appointment canceled successfully.");
  });
};
export const getAllAppointments = (req, res) => {

  const query = "SELECT * FROM appointment";

  db.query(query, (error, results) => {
    if (error) {
    
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }

    return res.status(200).json(results);
  });
};
