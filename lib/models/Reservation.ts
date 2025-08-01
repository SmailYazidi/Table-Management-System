// lib/models/Reservation.ts
import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: "Tutor", required: true },
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
  datetime: { type: Date, required: true },
  durationMinutes: { type: Number, default: 60 }, // optional
});

export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
