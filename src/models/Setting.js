import mongoose, { Schema } from "mongoose";

const settingSchema = new Schema(
  {
    siteName: { type: String, default: "Shahid Web Studio" },
    tagline: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const Setting = mongoose.models.Setting || mongoose.model("Setting", settingSchema);
export default Setting;