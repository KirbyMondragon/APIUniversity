// src/models/Visitante.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IVisitante extends Document {
  nombre: string;
  email: string;
  telefono: string;
  personaAVisitar: string;
  motivo: string;
  fechaRegistro: Date;
  empleado: number;
}

const visitanteSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: false },
  telefono: { type: String, required: false },
  personaAVisitar: { type: String, required: false },
  motivo: { type: String, required: false },
  fechaRegistro: { type: Date, required: true },
  empleado: { type: Number, required: false }
});

export default mongoose.model<IVisitante>("Visitante", visitanteSchema);
