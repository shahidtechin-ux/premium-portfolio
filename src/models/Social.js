import mongoose, { Schema } from "mongoose";

const socialSchema = new Schema(
  {
    instagram: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    twitter: { type: String, default: "" },
    facebook: { type: String, default: "" },
    youtube: { type: String, default: "" },
  },
  { timestamps: true }
);

const Social = mongoose.models.Social || mongoose.model("Social", socialSchema);
export default Social;