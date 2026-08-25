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
        verification: {
          google: 'ZyMUuNP_dZH07cyC5nEpQ0WZKw5L8lF_Fz5_y5mzUP0',
        },
        applicationName: 'Shahid Web Studio',
        OpenGraph: {
          siteName: 'Shahid Web Studio',
        },
      };
    }
  } catch (error) {
    console.log("SEO settings load nahi ho payin, default use ho raha hai.");
  }

  // Agar error aaye ya database khali ho, toh ye default SEO dikhega
  return {
    title: 'Shahid Web Studio | Professional Website Development Services',
    description: 'Shahid Web Studio creates modern, responsive and high-performance websites for businesses, professionals and individuals. Get a professional website built for your business.',
    keywords: 'web developer, website development, web development services, website designer, professional website development, business website, responsive website, custom website development, portfolio website, ecommerce website, website design, Shahid Web Studio',
    verification: {
      google: 'ZyMUuNP_dZH07cyC5nEpQ0WZKw5L8lF_Fz5_y5mzUP0',
    },
    applicationName: 'Shahid Web Studio',
    OpenGraph: {
      siteName: 'Shahid Web Studio',
    },
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