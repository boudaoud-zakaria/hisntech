import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";
import { Card } from "../../ui/Card";

// Expanded data to create the 3-wave overlapping effect
const data = [
    { time: "00:00", alerts: 30, incidents: 10, medium: 20, background: 15 },
    { time: "03:00", alerts: 45, incidents: 15, medium: 25, background: 20 },
    { time: "06:00", alerts: 25, incidents: 20, medium: 35, background: 25 },
    { time: "09:00", alerts: 60, incidents: 25, medium: 45, background: 30 },
    { time: "12:00", alerts: 40, incidents: 30, medium: 55, background: 40 },
    { time: "15:00", alerts: 75, incidents: 40, medium: 40, background: 45 },
    { time: "18:00", alerts: 55, incidents: 35, medium: 60, background: 50 },
    { time: "21:00", alerts: 80, incidents: 45, medium: 50, background: 40 },
    { time: "24:00", alerts: 60, incidents: 55, medium: 45, background: 30 },
];

const CustomActiveDot = (props: any) => {
    const { cx, cy } = props;
    return (
        <g>
            <circle cx={cx} cy={cy} r={4} fill="white" stroke="#FF3333" strokeWidth={2} />
            <rect x={cx - 12} y={cy - 28} width={24} height={16} rx={4} fill="#FF3333" />
            <text x={cx} y={cy - 16} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">10</text>
            <path d={`M${cx - 4},${cy - 12} L${cx},${cy - 6} L${cx + 4},${cy - 12}`} fill="#ef4444" />
        </g>
    );
};


export function SiemAlertsChart() {
    return (
        <Card className="flex flex-col h-full p-6 border-none min-h-[470px]">
            {/* Row 1: Title and Total Volume */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-300">SIEM Alerts</h3>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-400">Total Alert Volume</span>
                    <span className="px-3 py-1 bg-[#1e293b] text-[#00e5ff] rounded-md font-bold border border-[#00e5ff]/20">120</span>
                    <span className="text-[10px] text-gray-500">(last 24h)</span>
                </div>
            </div>

            {/* Row 2: Severity and Time Filters */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex px-4 py-1.5 text-xs font-medium text-white bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#ef4444] rounded-full"></span>
                        Critical: <span className="font-bold">12</span>
                    </div>
                    <div className="hidden sm:flex px-4 py-1.5 text-xs font-medium text-white bg-[#006FEE]/10 border border-[#006FEE]/30 rounded-lg items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#006FEE] rounded-full"></span>
                        High: <span className="font-bold">15</span>
                    </div>
                    <div className="hidden sm:flex px-4 py-1.5 text-xs font-medium text-white bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-lg items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#06b6d4] rounded-full"></span>
                        Medium: <span className="font-bold">6</span>
                    </div>

                    {/* Mobile optimized severity bubbles */}
                    <div className="flex sm:hidden gap-1">
                        <div className="w-8 h-8 rounded-full bg-[#ef4444] flex items-center justify-center text-[10px] font-bold text-white">12</div>
                        <div className="w-8 h-8 rounded-full bg-[#006FEE] flex items-center justify-center text-[10px] font-bold text-white">15</div>
                        <div className="w-8 h-8 rounded-full bg-[#06b6d4] flex items-center justify-center text-[10px] font-bold text-white">6</div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-4 w-[1px] bg-gray-700 hidden xs:block"></div>
                    <div className="flex bg-[#0f0f1a] rounded-lg p-1 border border-white/5">
                        <button className="px-2 sm:px-4 py-1 text-xs text-gray-500">24h</button>
                        <button className="px-2 sm:px-4 py-1 text-xs text-gray-500">7d</button>
                        <button className="px-3 sm:px-4 py-1 text-xs font-bold text-white bg-[#006FEE] rounded shadow-sm">30d</button>
                    </div>
                </div>
            </div>

            {/* Chart Area with 3-Layer Wave */}
            <div className="flex-1 w-full h-[300px] bg-popover/20 rounded-xl bg-popover relative overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorAlerts" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#006FEE" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#006FEE" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF3333" stopOpacity={0.6} />
                                <stop offset="95%" stopColor="#FF3333" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorBG" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#006FEE" stopOpacity={0.15} />
                                <stop offset="95%" stopColor="#006FEE" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="4 4" stroke="#475569" opacity={0.4} vertical={true} horizontal={true} />
                        <XAxis dataKey="time" hide />
                        <YAxis hide domain={[0, 100]} />
                        <Tooltip content={() => null} />

                        {/* Background Wave for depth */}
                        <Area type="monotone" dataKey="background" stroke="#006FEE" strokeOpacity={0.1} fill="url(#colorBG)" fillOpacity={1} strokeWidth={1} />

                        {/* Primary Alert Wave (Blue) */}
                        <Area type="monotone" dataKey="alerts" stroke="#006FEE" fill="url(#colorAlerts)" fillOpacity={1} strokeWidth={2} />

                        {/* Medium Alert Wave (Green/Cyan) */}
                        <Area type="monotone" dataKey="medium" stroke="#06b6d4" fill="url(#colorMedium)" fillOpacity={1} strokeWidth={2} />

                        {/* Incident Wave (Red) */}
                        <Area type="monotone" dataKey="incidents" stroke="#FF3333" fill="url(#colorIncidents)" fillOpacity={1} strokeWidth={2} />

                        <ReferenceDot x="15:00" y={40} shape={<CustomActiveDot />} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}