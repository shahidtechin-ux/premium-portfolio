import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import SEO from "@/models/SEO";

// 1. SEO Settings fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const seo = await SEO.findOne();
    return NextResponse.json({ success: true, seo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching SEO settings" }, { status: 500 });
  }
}

// 2. SEO Settings update ya create karne ke liye
export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    
    let seo = await SEO.findOne();
    if (seo) {
      seo = await SEO.findByIdAndUpdate(seo._id, body, { new: true });
    } else {
      seo = await SEO.create(body);
    }

    return NextResponse.json({ success: true, message: "SEO Settings saved successfully!", seo }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error saving SEO settings" }, { status: 500 });
  }
}