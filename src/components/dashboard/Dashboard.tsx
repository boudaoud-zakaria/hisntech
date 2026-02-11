import { AlertsIncidentsChart } from './monitoring/AlertsIncidentsChart';
import { CriticalIncidentsCard } from './monitoring/CriticalIncidentsCard';
import { PerformanceMetricsCard } from './monitoring/PerformanceMetricsCard';
import { SiemAlertsChart } from './monitoring/SiemAlertsChart';
import { StatusCards } from './monitoring/StatusCards';


export function Dashboard() {
    return (
        <div className="space-y-6">
            <StatusCards />

            {/* Placeholder for next rows */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                <CriticalIncidentsCard />
                <PerformanceMetricsCard />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-4 xl:col-span-3.5">
                    <AlertsIncidentsChart />
                </div>
                <div className="lg:col-span-8 xl:col-span-8.5">
                    <SiemAlertsChart />
                </div>
            </div>

        </div>
    );
}
