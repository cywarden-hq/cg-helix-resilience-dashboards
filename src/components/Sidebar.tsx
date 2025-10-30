import { useState } from 'react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-[80px]' : 'w-[300px]'} bg-[#265e99] min-h-screen sticky top-0 flex flex-col transition-all duration-300`}>
      <div className="relative">
        <div className="px-4 pt-6 pb-8">
          {isCollapsed ? (
            <>
              <img
                src="/logo_collapsed.svg"
                alt="CG-Logo-collapsed"
                className="w-[180px] h-[145px] transition-all duration-300"
              />
            </>
          ) : (
            <>
              <img 
                src="/cg-logo.svg" 
                alt="CG-Logo" 
                className="w-[180px] h-[145px] transition-all duration-300"
              />
            </>
          )}
        </div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-1 text-center bg-white p-1 rounded-tl-full rounded-bl-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          <img 
            src={isCollapsed ? "/chevron-right.svg" : "/chevron-left.svg"} 
            alt="toggle" 
            className="w-4 h-4"
          />
        </button>
      </div>

      <nav className={`flex-1 space-y-3 ${isCollapsed ? 'px-3' : 'px-10'}`}>
        <div className="flex gap-2 hover:bg-[#1A1F37] rounded-3xl items-center p-2">
          <div className="bg-[#1A1F37] p-2 rounded-xl">
            <img className="w-[17.5px] h-[17.5px]" src="/dashboard.svg" />
          </div>
          <span className={`text-white text-sm text-center font-medium ${isCollapsed ? 'hidden' : 'block'}`}>
            Dashboard
          </span>
        </div>
        <hr className={`border-gray-200 ${isCollapsed ? 'mx-2' : ''}`} />
        <div className="flex gap-2 hover:bg-[#1A1F37] rounded-3xl items-center p-2">
          <div className="bg-[#1A1F37] p-2 rounded-xl">
            <img className="w-[17.5px] h-[17.5px]" src="/analytics.svg" />
          </div>
          <span className={`text-white text-sm font-medium text-center ${isCollapsed ? 'hidden' : 'block'}`}>
            Analytics
          </span>
        </div>
        <hr className={`border-gray-200 ${isCollapsed ? 'mx-2' : ''}`} />
        <div className="flex gap-2 hover:bg-[#1A1F37] rounded-3xl items-center p-2">
          <div className="bg-[#1A1F37] p-2 rounded-xl">
            <img className="w-[17.5px] h-[17.5px]" src="/reports.svg" />
          </div>
          <span className={`text-white text-sm font-medium text-center ${isCollapsed ? 'hidden' : 'block'}`}>
            Reports
          </span>
        </div>
        <hr className={`border-gray-200 ${isCollapsed ? 'mx-2' : ''}`} />
        <div className="flex gap-2 hover:bg-[#1A1F37] rounded-3xl items-center p-2">
          <div className="bg-[#1A1F37] rounded-xl p-2">
            <img className="w-[17.5px] h-[17.5px]" src="/security.svg" />
          </div>
          <span className={`text-white text-sm text-center font-medium ${isCollapsed ? 'hidden' : 'block'}`}>
            Security
          </span>
        </div>
        <hr className={`border-gray-200 ${isCollapsed ? 'mx-2' : ''}`} />
        <div className="flex gap-2 hover:bg-[#1A1F37] rounded-3xl items-center p-2">
          <div className="bg-[#1A1F37] p-2 rounded-xl">
            <img className="w-[17.5px] h-[17.5px]" src="/settings.svg" />
          </div>
          <span className={`text-white text-sm font-medium text-center ${isCollapsed ? 'hidden' : 'block'}`}>
            Settings
          </span>
        </div>
      </nav>

      {isCollapsed ? (
        <div className="flex flex-col items-center pb-4 space-y-2 px-3">
          <img className="w-[33px] h-[43px]" src="/help_collapsed.svg" />
          <img className="w-[33px] h-[43px]" src="/contact_collapsed.svg" />
        </div>
      ) : (
      <div className={`flex flex-col px-3 pb-4 space-y-4 bg-[#7F9BB8] rounded-3xl m-5 p-5 ${isCollapsed ? 'items-center' : ''}`}>
        <img className="w-[33px] h-[35px]" src="/help.svg" />
        <div className={`flex flex-col mt-2 ${isCollapsed ? 'hidden' : ''}`}>
          <span className="text-white font-bold text-[14px]">Need help?</span>
          <span className="text-white font-regular text-[12px]">
            Please check our docs
          </span>
        </div>
        <button className={`flex gap-2 justify-center py-2 px-3 rounded-2xl bg-gradient-to-br from-[#2C4A90] to-[#0A0E23] ${isCollapsed ? 'p-2' : ''}`}>
          <img src="/view_techdocs.svg" />
          <span className={`text-white font-bold font-[12px] ${isCollapsed ? 'hidden' : ''}`}>
            View TechDocs
          </span>
        </button>
      </div>
      )}
    </div>
  );
}
