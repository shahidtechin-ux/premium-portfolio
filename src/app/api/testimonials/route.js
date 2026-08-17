import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

// 1. Saare Testimonials fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }); // Latest pehle aayega
    return NextResponse.json({ success: true, testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching testimonials" }, { status: 500 });
  }
}

// 2. Naya Testimonial add karne ke liye
export async function POST(req) {
  try {
    const { clientName, company, review, rating, image } = await req.json();
    await connectMongoDB();
    await Testimonial.create({ clientName, company, review, rating, image });
    return NextResponse.json({ success: true, message: "Testimonial added successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error adding testimonial" }, { status: 500 });
  }
}

// 3. Testimonial delete karne ke liye
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Testimonial.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Testimonial deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting testimonial" }, { status: 500 });
  }
}