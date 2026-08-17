import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Service from "@/models/Service";

// 1. Saari Services fetch (dikhaane) ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const services = await Service.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, services }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching services" }, { status: 500 });
  }
}

// 2. Nayi Service add karne ke liye
export async function POST(req) {
  try {
    const { title, description, icon, features } = await req.json();
    await connectMongoDB();
    await Service.create({ title, description, icon, features });
    return NextResponse.json({ success: true, message: "Service added successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error adding service" }, { status: 500 });
  }
}

// 3. Service delete karne ke liye
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Service.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Service deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting service" }, { status: 500 });
  }
}