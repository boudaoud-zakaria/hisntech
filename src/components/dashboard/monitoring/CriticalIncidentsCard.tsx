import { TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../../ui/Card';

const criticalIncidents = [
    { label: 'Ransomware Activity Detected', time: '12m ago' },
    { label: 'Unauthorized Data Exfill', time: '25m ago' },
    { label: 'Privilege Escalation', time: '1h ago' },
];

export function CriticalIncidentsCard() {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-0">
                <CardTitle className="text-lg font-medium text-muted-foreground">Active Critical Incidents</CardTitle>
                <button className="text-xs text-primary hover:text-primary/80 transition-colors">View All</button>
            </CardHeader>

            <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl font-bold text-white">5</span>
                <div className="flex items-center gap-1 bg-destructive/10 text-destructive px-2 py-1 rounded text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+ 2 new (1h)</span>
                </div>
            </div>

            <div className="space-y-3">
                {criticalIncidents.map((incident, i) => (
                    <div key={i} className="group flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-destructive">
                        <span className="text-sm font-medium text-white truncate pr-2">{incident.label}</span>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded whitespace-nowrap">{incident.time}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
