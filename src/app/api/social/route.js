import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Social from "@/models/Social";

// 1. Social Links fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const social = await Social.findOne();
    return NextResponse.json({ success: true, social }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching social links" }, { status: 500 });
  }
}

// 2. Social Links update ya create karne ke liye
export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    
    let social = await Social.findOne();
    if (social) {
      social = await Social.findByIdAndUpdate(social._id, body, { new: true });
    } else {
      social = await Social.create(body);
    }

    return NextResponse.json({ success: true, message: "Social links saved successfully!", social }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error saving social links" }, { status: 500 });
  }
}