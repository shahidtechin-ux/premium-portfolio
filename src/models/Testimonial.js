import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
  {
    clientName: { type: String, required: true },
    company: { type: String }, // Jaise: "CEO, TechCorp" ya "Founder, XYZ"
    review: { type: String, required: true },
    rating: { type: Number, default: 5 }, // 1 se 5 star rating ke liye
    image: { type: String }, // Client ki photo ka Cloudinary URL
  },
  { timestamps: true }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;