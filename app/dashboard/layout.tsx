import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function DashboardLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#eef2f6] font-sans text-slate-800">
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        <Footer />
      </div>
      <Sidebar />
    </div>
  );
}