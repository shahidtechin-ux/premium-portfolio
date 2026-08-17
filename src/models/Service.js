import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }, // Icon ka naam (e.g., 'FaCode') ya image URL store karne ke liye
    features: { type: [String] }, // ['Responsive Design', 'Fast Loading'] jaisi list ke liye
  },
  { timestamps: true }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;