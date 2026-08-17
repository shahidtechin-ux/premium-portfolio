import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Pricing from "@/models/Pricing";

// 1. Saare Pricing Plans fetch (dikhaane) ke liye
export async function GET() {
  try {
    await connectMongoDB();
    // Sort by createdAt: 1 (Taaki jo pehle add ho wo pehle dikhe)
    const plans = await Pricing.find().sort({ createdAt: 1 });
    return NextResponse.json({ success: true, plans }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching pricing plans" }, { status: 500 });
  }
}

// 2. Naya Pricing Plan add karne ke liye
export async function POST(req) {
  try {
    const { planName, price, description, features, isPopular } = await req.json();
    await connectMongoDB();
    await Pricing.create({ planName, price, description, features, isPopular });
    return NextResponse.json({ success: true, message: "Pricing plan added successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error adding pricing plan" }, { status: 500 });
  }
}

// 3. Pricing Plan delete karne ke liye
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Pricing.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Pricing plan deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting pricing plan" }, { status: 500 });
  }
}