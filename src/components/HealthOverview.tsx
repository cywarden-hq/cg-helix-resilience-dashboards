export function HealthOverview() {
  const healthData = {
    healthy: 67,
    warning: 23,
    critical: 10
  };

  const total = healthData.healthy + healthData.warning + healthData.critical;
  
  // Calculate angles for donut segments
  const healthyAngle = (healthData.healthy / total) * 360;
  const warningAngle = (healthData.warning / total) * 360;
  const criticalAngle = (healthData.critical / total) * 360;

  return (
    <div className="px-14 py-3 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Overall Health Distribution Card */}
        <div className="bg-gray-100 rounded-lg px-5 py-3">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">Overall Health Distribution</h3>
            <button className="text-gray-300 hover:text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-5">
            {/* Donut Chart */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Critical segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="18"
                  strokeDasharray={`${(criticalAngle / 360) * 251.2} 251.2`}
                  strokeDashoffset="0"
                />
                {/* Warning segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="18"
                  strokeDasharray={`${(warningAngle / 360) * 251.2} 251.2`}
                  strokeDashoffset={`-${(criticalAngle / 360) * 251.2}`}
                />
                {/* Healthy segment */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#84CC16"
                  strokeWidth="18"
                  strokeDasharray={`${(healthyAngle / 360) * 251.2} 251.2`}
                  strokeDashoffset={`-${((criticalAngle + warningAngle) / 360) * 251.2}`}
                />
              </svg>
            </div>
            {/* Legend */}
            <div className="space-y-2.5 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 rounded-sm bg-[#84CC16]"></div>
                  <span className="text-xs text-gray-500">Healthy :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{healthData.healthy}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 rounded-sm bg-[#F59E0B]"></div>
                  <span className="text-xs text-gray-500">Warning :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{healthData.warning}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-2 rounded-sm bg-[#DC2626]"></div>
                  <span className="text-xs text-gray-500">Critical :</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{healthData.critical}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder cards for additional metrics */}
        <div className="bg-gray-100 rounded-lg justify-center flex items-center">
          <img src="/card2.svg" className="w-[90%] h-full" />
        </div>
        <div className="bg-gray-100 rounded-lg">
          <img src="/card3.svg" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

