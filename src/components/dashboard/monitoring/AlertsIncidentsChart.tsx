
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card } from "../../ui/Card";

const data = [
    { name: "Alerts", value: 75, color: "#E0C634" }, // Brighter Blue
    { name: "Incidents", value: 25, color: "#FF3333" }, // Brighter Red
];

export function AlertsIncidentsChart() {
    return (
        <Card className="flex flex-col h-full p-6">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Alerts / Incidents</h3>

            <div className="relative flex-1 min-h-[200px] flex items-center justify-center" style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={65}
                            outerRadius={85}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-3xl font-medium text-[#E0C634]">75 %</span>
                </div>
            </div>

            <div className="mt-4 space-y-4 w-full px-2">
                {/* Legend Items */}
                <div className="flex items-center justify-between group">
                    <span className="text-sm font-medium text-gray-400">Alerts</span>
                    <span className="px-3 py-1 text-xs font-bold text-[#cce3fd] bg-[#006FEE]/20 rounded-md min-w-[3rem] text-center">75 %</span>
                </div>
                <div className="flex items-center justify-between group">
                    <span className="text-sm font-medium text-gray-400">Incidents</span>
                    <span className="px-3 py-1 text-xs font-bold text-[#fecdd3] bg-[#F31260]/20 rounded-md min-w-[3rem] text-center">25 %</span>
                </div>
            </div>
        </Card>
    );
}
