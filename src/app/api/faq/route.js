import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import FAQ from "@/models/FAQ";

// 1. Saare FAQs fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const faqs = await FAQ.find().sort({ createdAt: 1 });
    return NextResponse.json({ success: true, faqs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching FAQs" }, { status: 500 });
  }
}

// 2. Naya FAQ add karne ke liye
export async function POST(req) {
  try {
    const { question, answer } = await req.json();
    await connectMongoDB();
    await FAQ.create({ question, answer });
    return NextResponse.json({ success: true, message: "FAQ added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error adding FAQ" }, { status: 500 });
  }
}

// 3. FAQ delete karne ke liye
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await FAQ.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "FAQ deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting FAQ" }, { status: 500 });
  }
}