import mongoose, { Schema } from "mongoose";

const mediaSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true }, // Cloudinary Image URL
  },
  { timestamps: true }
);

const Media = mongoose.models.Media || mongoose.model("Media", mediaSchema);
export default Media;