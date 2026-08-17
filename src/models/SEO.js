import mongoose, { Schema } from "mongoose";

const seoSchema = new Schema(
  {
    metaTitle: { type: String, default: "Shahid Web Studio - Premium Web Development" },
    metaDescription: { type: String, default: "We build premium websites and digital platforms to scale your business." },
    keywords: { type: String, default: "web development, custom website, web studio, nextjs, react" },
  },
  { timestamps: true }
);

const SEO = mongoose.models.SEO || mongoose.model("SEO", seoSchema);
export default SEO;