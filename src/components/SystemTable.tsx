import { useState } from "react";
import { ChevronUp, Search, Filter, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

interface System {
    name: string;
    description: string;
    dbTier: number;
    status: "Warning" | "Critical" | "Healthy";
    healthScore: number;
    manager?: string;
    businessOrg?: string;
    lastUpdated?: string;
    awsAccount?: string;
}

const systems: System[] = [
    {
        name: "ACE",
        description: "Advancing the Customer Experience",
        dbTier: 1,
        status: "Warning",
        healthScore: 60,
        manager: "Sarah Johnson",
        businessOrg: "SBL",
        lastUpdated: "Jan 15, 04:00 PM",
        awsAccount: "Production"
    },
    {
        name: "CAMP",
        description: "Corporate Actions Monitoring Platform",
        dbTier: 0,
        status: "Critical",
        healthScore: 10,
        manager: "John Smith",
        businessOrg: "Operations",
        lastUpdated: "Jan 14, 02:30 PM",
        awsAccount: "Development"
    },
    {
        name: "CASPAN",
        description: "Data Lake",
        dbTier: 3,
        status: "Healthy",
        healthScore: 100,
        manager: "Emily Davis",
        businessOrg: "Data Analytics",
        lastUpdated: "Jan 16, 09:15 AM",
        awsAccount: "Production"
    },
    {
        name: "CHAMP",
        description: "Capital Heritage Archives Management Portal",
        dbTier: 1,
        status: "Healthy",
        healthScore: 100,
        manager: "Michael Brown",
        businessOrg: "Archives",
        lastUpdated: "Jan 15, 11:20 AM",
        awsAccount: "Production"
    },
    {
        name: "CRD",
        description: "Charles River Development System",
        dbTier: 2,
        status: "Critical",
        healthScore: 25,
        manager: "Lisa Anderson",
        businessOrg: "Engineering",
        lastUpdated: "Jan 16, 01:45 PM",
        awsAccount: "Staging"
    },
    {
        name: "CSTAR",
        description: "Capital Straight Through Accounting and Reporting System",
        dbTier: 2,
        status: "Warning",
        healthScore: 70,
        manager: "David Wilson",
        businessOrg: "Finance",
        lastUpdated: "Jan 15, 03:00 PM",
        awsAccount: "Production"
    },
    {
        name: "DART",
        description: "Data Analytics and Reporting Tool",
        dbTier: 1,
        status: "Healthy",
        healthScore: 95,
        manager: "Jennifer Lee",
        businessOrg: "Analytics",
        lastUpdated: "Jan 16, 10:30 AM",
        awsAccount: "Production"
    },
    {
        name: "FINTRAC",
        description: "Financial Transaction Tracking",
        dbTier: 2,
        status: "Warning",
        healthScore: 65,
        manager: "Robert Taylor",
        businessOrg: "Compliance",
        lastUpdated: "Jan 15, 05:15 PM",
        awsAccount: "Production"
    }
];

const statusConfig = {
    Warning: { bg: "bg-[#FFB500]", text: "text-white", barColor: "bg-[#FFAC00]" },
    Critical: { bg: "bg-[#D11A2A]", text: "text-white", barColor: "bg-[#D11A2A]" },
    Healthy: { bg: "bg-[#7DD600]", text: "text-white", barColor: "bg-[#AAE459]" }
};

export function SystemsTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const [filterOpen, setFilterOpen] = useState(false);
    const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
    const [expandedSections, setExpandedSections] = useState({
        searchName: false,
        businessOrg: false,
        drTier: false
    });
    const itemsPerPage = 4; // Show 7 items per page

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSystems = systems.slice(startIndex, endIndex);
    const totalPages = Math.ceil(systems.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const toggleSection = (section: 'searchName' | 'businessOrg' | 'drTier') => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleRow = (index: number) => {
        setExpandedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div className="">
            <div className="px-14 py-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold font-inter text-gray-500">Major Systems</h2>
                        <p className="text-sm text-gray-400">
                            High-level resilience overview across all applications
                        </p>
                    </div>
                    <div className="relative flex gap-3 sm:max-w-xs">
                        <div className="relative flex-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black" />
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                            />
                        </div>
                        <div className="relative flex-1">
                            <button
                                onClick={() => setFilterOpen(!filterOpen)}
                                className="px-3 py-1.5 text-sm font-medium text-gray-600 bg-[#979797] rounded-full hover:bg-gray-300 transition-colors flex items-center gap-2 whitespace-nowrap"
                            >
                                <Filter className="w-3.5 h-3.5 fill-white text-white" />
                                <span className="text-white">Filter</span>
                            </button>

                            {/* Filter Modal */}
                            {filterOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setFilterOpen(false)}
                                    />
                                    <div className="absolute right-0 top-full mt-2 w-auto bg-[#F5F5F5] rounded-3xl shadow-2xl p-8 z-50">
                                        {/* Active Filters */}
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            <span className="inline-flex items-center px-5 py-2 bg-[#5A5A5A] text-white text-sm font-medium rounded-full">
                                                Sarah Johnson
                                            </span>
                                            <span className="inline-flex items-center px-5 py-2 bg-[#5A5A5A] text-white text-sm font-medium rounded-full">
                                                Tier 2
                                            </span>
                                            <span className="inline-flex items-center px-5 py-2 bg-[#5A5A5A] text-white text-sm font-medium rounded-full">
                                                SBL
                                            </span>
                                        </div>

                                        {/* Senior Manager */}
                                        <div className="mb-6">
                                            <p className="text-[#5A5A5A] text-lg font-medium">Senior Manager</p>
                                        </div>

                                        {/* Search Name Section */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-3 bg-[#E8E8E8] rounded-full px-5 py-2">
                                                <Search className="w-5 h-5 text-black" />
                                                <input
                                                    type="text"
                                                    placeholder="Search Name"
                                                    className="flex-1 bg-transparent text-base text-gray-500 placeholder-gray-400 outline-none"
                                                />
                                                <button
                                                    onClick={() => toggleSection('searchName')}
                                                    className="w-8 h-8 flex items-center justify-center bg-[#C4C4C4] hover:bg-[#B0B0B0] rounded-full transition-colors"
                                                >
                                                    <ChevronUp className={`w-5 h-5 text-[#5A5A5A] transition-transform ${expandedSections.searchName ? '' : 'rotate-180'}`} />
                                                </button>
                                            </div>
                                            {expandedSections.searchName && (
                                                <div className="mt-3 p-4 bg-white rounded-2xl">
                                                    <p className="text-sm text-gray-500">Search name content here...</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Business Org Section */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between bg-[#E8E8E8] rounded-full px-5 py-2">
                                                <p className="text-[#5A5A5A] font-medium text-base">Business Org</p>
                                                <button
                                                    onClick={() => toggleSection('businessOrg')}
                                                    className="w-8 h-8 flex items-center justify-center bg-[#C4C4C4] hover:bg-[#B0B0B0] rounded-full transition-colors"
                                                >
                                                    <ChevronUp className={`w-5 h-5 text-[#5A5A5A] transition-transform ${expandedSections.businessOrg ? '' : 'rotate-180'}`} />
                                                </button>
                                            </div>
                                            {expandedSections.businessOrg && (
                                                <div className="mt-3 p-4 bg-white rounded-2xl">
                                                    <p className="text-sm text-gray-500">Business org content here...</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* DR Tier Section */}
                                        <div>
                                            <div className="flex items-center justify-between bg-[#E8E8E8] rounded-full px-5 py-2">
                                                <p className="text-[#5A5A5A] font-medium text-base">DR Tier</p>
                                                <button
                                                    onClick={() => toggleSection('drTier')}
                                                    className="w-8 h-8 flex items-center justify-center bg-[#C4C4C4] hover:bg-[#B0B0B0] rounded-full transition-colors"
                                                >
                                                    <ChevronUp className={`w-5 h-5 text-[#5A5A5A] transition-transform ${expandedSections.drTier ? '' : 'rotate-180'}`} />
                                                </button>
                                            </div>
                                            {expandedSections.drTier && (
                                                <div className="mt-3 p-4 bg-white rounded-2xl">
                                                    <p className="text-sm text-gray-500">DR Tier content here...</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="relative flex-1">
                            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors self-start sm:self-auto">
                                <MoreVertical className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white px-8 rounded-lg shadow-sm border border-gray-200">
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 bg-white">
                                <th className="px-6 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                    Name
                                </th>
                                <th className="px-6 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wide text-center">
                                    DB Tier
                                </th>
                                <th className="px-6 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wide text-center">
                                    Status
                                </th>
                                <th className="px-6 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
                                    Health Score
                                </th>
                                <th className="px-6 py-2"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {currentSystems.map((system, index) => (
                                <>
                                    <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                                        <td className="px-6 py-4 min-w-[300px] max-w-[300px]">
                                            <div>
                                                <div className="text-sm font-semibold text-gray-700">{system.name}</div>
                                                <div className="text-xs text-gray-400">{system.description}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="text-sm text-gray-600">{system.dbTier}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span
                                                className={"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium " +
                                                    statusConfig[system.status].bg + " " +
                                                    statusConfig[system.status].text
                                                }
                                            >
                                                {system.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 max-w-[200px]">
                                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className={"h-full rounded-full " + statusConfig[system.status].barColor}
                                                            style={{ width: `${system.healthScore}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-sm font-medium text-gray-600 w-12 text-right">
                                                    {system.healthScore}%
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleRow(index)}
                                                className="p-1 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                                            >
                                                <ChevronUp className={`w-5 h-5 text-black transition-transform ${expandedRows.has(index) ? 'rotate-180' : ''}`} />
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedRows.has(index) && (
                                        <tr key={`${index}-expanded`} className="bg-gray-100 border-b border-gray-200">
                                            <td colSpan={5} className="px-6 py-6">
                                                <div className="grid grid-cols-4 gap-8">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-full bg-gray-500" />
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-gray-700 text-sm mb-2">Manager :</p>
                                                            <p className="text-gray-400 text-base">{system.manager}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-full bg-gray-500" />
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-gray-700 text-sm mb-2">Business Org:</p>
                                                            <p className="text-gray-400 text-base">{system.businessOrg}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-full bg-gray-500" />
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-gray-700 text-sm mb-2">Last Updated:</p>
                                                            <p className="text-gray-400 text-base">{system.lastUpdated}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1 h-full bg-gray-500" />
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-gray-700 text-sm mb-2">AWS Account:</p>
                                                            <p className="text-gray-400 text-base">{system.awsAccount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="md:hidden divide-y divide-gray-200">
                    {currentSystems.map((system, index) => (
                        <div key={index}>
                            <div className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <div className="text-sm font-semibold text-gray-700 mb-1">{system.name}</div>
                                        <div className="text-xs text-gray-400">{system.description}</div>
                                    </div>
                                    <button
                                        onClick={() => toggleRow(index)}
                                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <ChevronUp className={`w-4 h-4 text-gray-600 transition-transform ${expandedRows.has(index) ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase mb-1">DB Tier</div>
                                        <div className="text-sm text-gray-600">{system.dbTier}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase mb-1">Status</div>
                                        <span
                                            className={(
                                                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium " +
                                                statusConfig[system.status].bg + " " +
                                                statusConfig[system.status].text
                                            )}
                                        >
                                            {system.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-xs text-gray-400 uppercase mb-2">Health Score</div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1">
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={"h-full rounded-full " + statusConfig[system.status].barColor}
                                                    style={{ width: `${system.healthScore}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            {system.healthScore}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {expandedRows.has(index) && (
                                <div className="bg-[#5A5A5A] p-4">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-white text-xs mb-1">Manager :</p>
                                            <p className="text-gray-300 text-sm">{system.manager}</p>
                                        </div>
                                        <div>
                                            <p className="text-white text-xs mb-1">Business Org:</p>
                                            <p className="text-gray-300 text-sm">{system.businessOrg}</p>
                                        </div>
                                        <div>
                                            <p className="text-white text-xs mb-1">Last Updated:</p>
                                            <p className="text-gray-300 text-sm">{system.lastUpdated}</p>
                                        </div>
                                        <div>
                                            <p className="text-white text-xs mb-1">AWS Account:</p>
                                            <p className="text-gray-300 text-sm">{system.awsAccount}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="px-6 py-3 border-t border-gray-200 flex justify-end gap-40">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 0}
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-500" />
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages - 1}
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
}
