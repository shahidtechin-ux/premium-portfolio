import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Setting from "@/models/Setting";

// 1. Settings fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const setting = await Setting.findOne();
    return NextResponse.json({ success: true, setting }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching settings" }, { status: 500 });
  }
}

// 2. Settings update ya create karne ke liye (Upsert)
export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    
    let setting = await Setting.findOne();
    if (setting) {
      setting = await Setting.findByIdAndUpdate(setting._id, body, { new: true });
    } else {
      setting = await Setting.create(body);
    }

    return NextResponse.json({ success: true, message: "Settings saved successfully!", setting }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error saving settings" }, { status: 500 });
  }
}