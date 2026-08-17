import Navbar from '@/components/Navbar';
// 👇 Dono ek hi folder me hain, isliye sirf ./ lagaya hai
import AnimatedBackground from './AnimatedBackground'; 

export default function PublicLayout({ children }) {
  return (
    <>
      {/* 🔥 Ye aapka naya cloud background jo har page par chalega */}
      <AnimatedBackground />
      
      <Navbar />
      
      {/* pt-24 ensures content doesn't hide behind the fixed glossy navbar */}
      <main className="pt-24 min-h-screen relative z-10">
        {children}
      </main>
    </>
  );
}