import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Data Save karne ke liye (Jab client form bharega)
export async function POST(req) {
  try {
    const { name, email, whatsapp, message } = await req.json();
    
    await connectMongoDB();
    await Contact.create({ name, email, whatsapp, message });
    
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}

// Data Fetch karne ke liye (Admin Dashboard ke liye)
export async function GET() {
  try {
    await connectMongoDB();
    // Naye messages sabse upar dikhane ke liye sort kiya hai
    const leads = await Contact.find().sort({ createdAt: -1 }); 
    
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to fetch leads." }, { status: 500 });
  }
}