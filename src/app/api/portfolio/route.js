import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

// Dashboard me projects dikhane ke liye
export async function GET() {
  try {
    await connectMongoDB();
    const projects = await Portfolio.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching projects" }, { status: 500 });
  }
}

// Naya project save karne ke liye
export async function POST(req) {
  try {
    const { title, description, image, link, techStack, category } = await req.json();
    await connectMongoDB();
    await Portfolio.create({ title, description, image, link, techStack, category });
    return NextResponse.json({ success: true, message: "Project added!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error adding project" }, { status: 500 });
  }
}

// Delete project ke liye
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    await connectMongoDB();
    await Portfolio.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Project deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting project" }, { status: 500 });
  }
}