export const metadata = {
  title: 'Admin Panel | Secure Login',
  description: 'Restricted Access',
}

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Yahan hum baad me Admin Sidebar add karenge dashboard ke liye */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>
    </div>
  );
}