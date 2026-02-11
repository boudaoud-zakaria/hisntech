import SummaryCard from "./incidents/SummaryCard";
import IncidentsTable from "./incidents/IncidentsTable";


export function IncidentsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-10">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Incidents Overview</h1>
                <p className="text-gray-400 text-lg">Manage, track and resolve security threats across the organization</p>
            </div>

            {/* Summary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SummaryCard
                    title="Total Incidents"
                    value="250"
                    trend="10%"
                    isUp={true}
                    borderColor="border-t-destructive"
                    trendColor="bg-red-500/10 text-destructive"
                />
                <SummaryCard
                    title="Critical Open"
                    value="12"
                    trend="15%"
                    isUp={false}
                    borderColor="border-t-ring"
                    trendColor="bg-cyan-500/10 text-ring"
                />
                <SummaryCard
                    title="Unassigned"
                    value="02"
                    trend="10%"
                    isUp={true}
                    borderColor="border-t-destructive"
                    trendColor="bg-red-500/10 text-destructive"
                />
                <SummaryCard
                    title="Avg Response Time"
                    value="14m"
                    trend="15%"
                    isUp={false}
                    borderColor="border-t-ring"
                    trendColor="bg-cyan-500/10 text-ring"
                />
            </div>

            {/* Table Section */}
            <IncidentsTable />
        </div>
    );
}
