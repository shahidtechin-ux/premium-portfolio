import mongoose, { Schema } from "mongoose";

const portfolioSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String },
    techStack: { type: [String] },
    category: { type: String },
  },
  { timestamps: true }
);

const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;