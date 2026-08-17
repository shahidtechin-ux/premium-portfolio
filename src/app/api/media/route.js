import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Media from "@/models/Media";

// 1. Saari media images fetch karne ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const mediaList = await Media.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, media: mediaList }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching media" }, { status: 500 });
  }
}

// 2. Nayi image save karne ke liye
export async function POST(req) {
  try {
    const { title, url } = await req.json();
    await connectMongoDB();
    await Media.create({ title, url });
    return NextResponse.json({ success: true, message: "Image saved successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error saving image" }, { status: 500 });
  }
}

// 3. Image delete karne ke liye
export async function DELETE(req) {
  try {
    const urlParams = new URL(req.url);
    const id = urlParams.searchParams.get("id");
    await connectMongoDB();
    await Media.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Image deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting image" }, { status: 500 });
  }
}