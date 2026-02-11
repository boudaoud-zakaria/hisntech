import { Shield, Clock, RefreshCw } from 'lucide-react';
import { Card } from '../../ui/Card';

export function StatusCards() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* SOC Status Card */}
            <Card className="relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-muted-foreground">SOC Status</h3>
                    <Shield className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-1">Operational</h2>
                    <p className="text-sm text-primary">All systems running smoothly</p>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                        <span className="text-sm text-muted-foreground">Tool Availability</span>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">100%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                        <span className="text-sm text-muted-foreground">Analyst Coverage</span>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">03</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                        <span className="text-sm text-muted-foreground">Incidents Backlog</span>
                        <span className="text-sm font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded">14</span>
                    </div>
                </div>
            </Card>

            {/* SLA Status Card */}
            <Card>
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-muted-foreground">SLA Status</h3>
                    <Clock className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-1">Good</h2>
                    <p className="text-sm text-muted-foreground"><span className="text-white font-bold">75 %</span> within SLA</p>
                    <div className="h-2 w-full bg-secondary rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-primary w-[75%] rounded-full" />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Time to acknowledge</span>
                        <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-md border border-white/5">14 m</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Time to Contain</span>
                        <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-md border border-white/5">1h 9m</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Time to Resolve</span>
                        <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-md border border-white/5">45 m</span>
                    </div>
                </div>
            </Card>

            {/* Automation (SOAR) Card */}
            <Card>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-muted-foreground">Automation (SOAR)</h3>
                    <RefreshCw className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center justify-center py-4 relative">
                    {/* Simple CSS Donut Chart for 85% */}
                    <div className="relative w-32 h-32">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                className="text-[#FF3333]"
                            />
                            <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray={351.86}
                                strokeDashoffset={351.86 * (1 - 0.85)}
                                className="text-primary"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">85 %</span>
                        </div>
                    </div>

                    <div className="ml-8 space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <span className="text-sm text-white">Success</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <span className="text-sm text-white">Failure</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Last Automation failure:</span>
                    <span className="text-sm font-bold text-destructive">20 min ago</span>
                </div>
            </Card>
        </div>
    );
}
