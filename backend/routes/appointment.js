import express from "express";
import { bookAppointment, cancelAppointment, getAllAppointments } from "../controllers/appointment.js";
import { verifyToken } from "../controllers/auth.js";

const router = express.Router();


router.post("/book", verifyToken, bookAppointment)
router.delete("/cancel/:appointmentId", cancelAppointment); 
router.get("/getall", getAllAppointments); 
export default router;
