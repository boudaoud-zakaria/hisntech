import { Search, Calendar, ChevronDown, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Alert {
    id: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    name: string;
    status: string;
    source: string;
    detectedAt: string;
    asset: string;
    assignedTo: string;
    eventCount: number;
}

const mockData: Alert[] = [
    { id: 'INC-2490', severity: 'Critical', name: 'Ransomware Attempt', status: 'Open', source: 'SIEM', detectedAt: 'Dec 31, 2025', asset: 'System', assignedTo: 'J. Doe', eventCount: 12 },
    { id: 'INC-2491', severity: 'Medium', name: 'Unauthorized Access', status: 'In Progress', source: 'SIEM', detectedAt: 'Dec 31, 2025', asset: 'Internal Server', assignedTo: 'S. Miller', eventCount: 11 },
    { id: 'INC-2492', severity: 'Critical', name: 'Brute Force Attack', status: 'Open', source: 'SIEM', detectedAt: 'Dec 31, 2025', asset: 'Gateway', assignedTo: 'J. Doe', eventCount: 6 },
    { id: 'INC-2493', severity: 'High', name: 'Data Exfiltration', status: 'Open', source: 'SIEM', detectedAt: 'Dec 31, 2025', asset: 'Database', assignedTo: 'J. Doe', eventCount: 9 },
    { id: 'INC-2494', severity: 'Critical', name: 'Malware Injection', status: 'Open', source: 'SIEM', detectedAt: 'Dec 31, 2025', asset: 'Workstation', assignedTo: 'J. Doe', eventCount: 10 },
];

const severityStyles: Record<string, string> = {
    Critical: "bg-red-500/10 text-red-500 border-red-500/20",
    High: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Medium: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Low: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

export default function AlertsTable() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = mockData.filter(alert =>
        alert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Grid columns: 9% (show) + 24% (search) + 16% (date) + 12% (severity) + 12% (status) = ~73% + gaps
    const filterGridClass = "grid grid-cols-[12%_12%_20%_12%_18%_14%_12%] items-center gap-0";

    return (
        <div className="space-y-10">
            {/* Filter Bar */}
            <div className="bg-card border border-white/5 rounded-2xl p-6">
                <div className={filterGridClass}>
                    {/* Show entries - Col 1 */}
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>Show</span>
                        <div className="flex items-center bg-[#070715] rounded-lg px-2 py-1.5 border border-white/10 cursor-pointer hover:border-primary/50 transition-colors">
                            <span className="font-bold text-white text-[10px]">05</span>
                            <ChevronDown className="w-3 h-3 ml-1 text-gray-500" />
                        </div>
                    </div>

                    {/* Search - Col 2 + 3 (12% + 20% = 32%) */}
                    <div className="col-span-2 relative pr-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-white/50 rounded-lg pl-12 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary/50 bg-card transition-colors placeholder:text-gray-600"
                        />
                    </div>

                    {/* Date - Col 4 + 5 (12% + 18% = 30%) */}
                    <div className="col-span-2 relative pr-6">
                        <Calendar className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="mm/dd/yyyy"
                            className="w-full border border-white/50 bg-card rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
                        />
                    </div>

                    {/* Severity - Col 6 (14%) */}
                    <div className="flex items-center bg-card rounded-lg px-4 py-2.5 border border-white/50 cursor-pointer hover:border-primary/50 transition-colors justify-between mr-6">
                        <span className="text-xs text-gray-400">Severity</span>
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                    </div>

                    {/* Status - Col 7 (12%) */}
                    <div className="flex items-center bg-card rounded-lg px-4 py-2.5 border border-white/50 cursor-pointer hover:border-primary/50 transition-colors justify-between">
                        <span className="text-xs text-gray-400">Status</span>
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Table Area */}
            <div className="space-y-1 bg-card rounded-2xl px-6 py-4">
                <div className="w-full">
                    <table className="w-full text-left border-collapse table-fixed">
                        <thead>
                            <tr className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                <th className="w-[9%] px-6 py-4">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        ALERT ID <ArrowUpDown className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="w-[10%] px-6 py-4">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        SEVERITY <ArrowUpDown className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="w-[16%] px-6 py-4">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        NAME <ArrowUpDown className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="w-[11%] px-6 py-4">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                                        STATUS <ArrowUpDown className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="w-[9%] px-6 py-4">SOURCE</th>
                                <th className="w-[13%] px-6 py-4">DETECTED AT</th>
                                <th className="w-[13%] px-6 py-4">ASSET</th>
                                <th className="w-[11%] px-6 py-4">ASSIGNED TO</th>
                                <th className="w-[8%] px-6 py-4 text-right pr-6">
                                    <div className="flex items-center justify-end gap-2 cursor-pointer hover:text-white transition-colors">
                                        EVENT COUNT <ArrowUpDown className="w-3 h-3" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>

                    {/* Inner Dark Table Container */}
                    <div className="bg-background sticky border border-white/5 rounded-[2rem] overflow-hidden p-2">
                        <table className="w-full text-left border-collapse table-fixed">
                            <tbody className="divide-y divide-white/5">
                                {filteredData.length > 0 ? (
                                    filteredData.map((alert, index) => (
                                        <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="w-[9%] px-6 py-6 text-xs font-medium text-white truncate">{alert.id}</td>
                                            <td className="w-[10%] px-6 py-6">
                                                <span className={cn(
                                                    "inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-bold border uppercase tracking-tighter w-20 justify-center",
                                                    severityStyles[alert.severity]
                                                )}>
                                                    {alert.severity}
                                                </span>
                                            </td>
                                            <td className="w-[16%] px-6 py-6 text-xs text-gray-300 truncate">{alert.name}</td>
                                            <td className="w-[11%] px-6 py-6 text-xs text-gray-300 truncate">{alert.status}</td>
                                            <td className="w-[9%] px-6 py-6 text-xs text-gray-300 truncate">{alert.source}</td>
                                            <td className="w-[13%] px-6 py-6 text-xs text-gray-300 truncate">{alert.detectedAt}</td>
                                            <td className="w-[13%] px-6 py-6 text-xs text-gray-300 truncate">{alert.asset}</td>
                                            <td className="w-[11%] px-6 py-6 text-xs text-gray-300 font-medium truncate">{alert.assignedTo}</td>
                                            <td className="w-[8%] px-6 py-6 text-xs text-white font-bold text-right pr-6 truncate">{alert.eventCount}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={9} className="px-6 py-20 text-center text-xs text-gray-500 italic">
                                            No alerts found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="px-6 py-8 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-gray-500">
                        Showing <span className="text-white font-medium">1</span> to <span className="text-white font-medium">{filteredData.length}</span> of <span className="text-white font-medium">1,250</span> alerts
                    </span>
                    <div className="flex items-center gap-3">
                        <button className="text-xs font-medium text-gray-500 hover:text-white transition-colors px-2">
                            Previous
                        </button>
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                className={cn(
                                    "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                                    page === 1
                                        ? "bg-main text-white shadow-lg shadow-primary/25"
                                        : "bg-[#070715] text-gray-500 hover:text-white border border-white/10"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="text-xs font-medium text-gray-500 hover:text-white transition-colors px-2">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}