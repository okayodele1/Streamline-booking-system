import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";

 import appointmentRoutes from "./routes/appointment.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoutes);

app.listen(8800, () => {
  console.log("Connected to backend999");
});
