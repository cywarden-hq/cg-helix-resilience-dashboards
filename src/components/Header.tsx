import { Bell, Settings, User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white">
      <div className="h-[100px] bg-[#1d3b7d] px-16 flex items-center justify-between overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-white text-4xl font-bold tracking-wide">GRID</h1>
          <p className="text-gray-300 text-xl font-normal">
            Global Resilience And Insights Dashboard
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-[repeat(30,auto)] gap-[4px] w-[280px]">
            {Array(900).fill(null).map((_, i) => {
              const randomOpacity = Math.random();
              return (
                <div
                  key={i}
                  className="w-[10px] h-[10px] bg-white"
                  style={{
                    opacity: randomOpacity > 0.25 ? 1 : randomOpacity > 0.15 ? 0.4 : 0.15
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 border-b border-gray-200 px-14 py-1 flex items-center justify-end gap-3">
        <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <User className="w-4 h-4 text-gray-600" />
        </button>
        <p className="text-gray-600 text-xs">Sign In</p>
        <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <Bell className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <Settings className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
