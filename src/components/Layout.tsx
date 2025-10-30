import { type ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./Sidebar.tsx";
import { Header } from "./Header.tsx";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <Sidebar />
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-[#456C92]">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-white hover:bg-white/10 rounded transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold tracking-wide">GRID</h1>
            <p className="text-white/90 text-[9px] font-normal">
              Global Resilience And Insights Dashboard
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:sticky lg:top-0 lg:z-10">
          <Header />
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
