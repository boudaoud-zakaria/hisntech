import { TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../../ui/Card';

export function PerformanceMetricsCard() {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-0">
                <CardTitle className="text-lg font-medium text-muted-foreground">SOC Performance Metrics</CardTitle>
                <button className="text-xs text-primary hover:text-primary/80 transition-colors">View All</button>
            </CardHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {/* MTTD */}
                <div className="bg-card shadow-lg shadow-black/20 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/50" />
                    <h4 className="text-xl font-bold text-white mb-1">MTTD</h4>
                    <p className="text-[10px] text-muted-foreground mb-4 uppercase tracking-wider">Mean Time To Detect</p>

                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">4m</span>
                        <span className="flex items-center gap-0.5 text-xs font-bold text-destructive bg-destructive/10 px-1.5 py-0.5 rounded">
                            <TrendingUp className="w-3 h-3" /> 10%
                        </span>
                    </div>
                </div>

                {/* MTTC */}
                <div className="bg-card shadow-lg shadow-black/20 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <h4 className="text-xl font-bold text-white mb-1">MTTC</h4>
                    <p className="text-[10px] text-muted-foreground mb-4 uppercase tracking-wider">Mean Time To Contain</p>

                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">3m</span>
                        <span className="flex items-center gap-0.5 text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            <TrendingDown className="w-3 h-3" /> 15%
                        </span>
                    </div>
                </div>

                {/* MTTR */}
                <div className="bg-card shadow-lg shadow-black/20 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <h4 className="text-xl font-bold text-white mb-1">MTTR</h4>
                    <p className="text-[10px] text-muted-foreground mb-4 uppercase tracking-wider">Mean Time To Resolve</p>

                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">3m</span>
                        <span className="flex items-center gap-0.5 text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                            <TrendingDown className="w-3 h-3" /> 15%
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
