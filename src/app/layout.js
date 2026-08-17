import './globals.css';
import Footer from '@/components/Footer'; // 1. YAHAN FOOTER IMPORT KIYA HAI

export async function generateMetadata() {
  try {
    // API se data fetch karna
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/seo`, { cache: 'no-store' });
    const data = await res.json();
    
    // Agar database me SEO settings hain, toh wo return karo
    if (data.success && data.seo) {
      return {
        title: data.seo.metaTitle,
        description: data.seo.metaDescription,
        keywords: data.seo.keywords,
      };
    }
  } catch (error) {
    console.log("SEO settings load nahi ho payin, default use ho raha hai.");
  }

  // Agar error aaye ya database khali ho, toh ye default SEO dikhega
  return {
    title: 'Premium Web Developer Portfolio',
    description: 'A++ Quality Web Development Services and Portfolio',
    keywords: 'web development, custom website, web studio, nextjs, react',
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        {children}
        
        {/* 2. YAHAN FOOTER SHOW KARVAYA HAI */}
        <Footer /> 
      </body>
    </html>
  );
}