import mongoose, { Schema } from "mongoose";

const pricingSchema = new Schema(
  {
    planName: { type: String, required: true },
    price: { type: String, required: true }, // String rakha hai taaki "$99" ya "Custom" dono likh sakein
    description: { type: String, required: true },
    features: { type: [String] }, // Features ki list ke liye
    isPopular: { type: Boolean, default: false }, // "Most Popular" highlight karne ke liye
  },
  { timestamps: true }
);

const Pricing = mongoose.models.Pricing || mongoose.model("Pricing", pricingSchema);
export default Pricing;