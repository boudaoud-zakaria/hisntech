import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';


interface SummaryCardProps {
    title: string;
    value: string;
    trend: string;
    isUp: boolean;
    borderColor: string;
    trendColor: string;
}

export default function SummaryCard({ title, value, trend, isUp, borderColor, trendColor }: SummaryCardProps) {
    return (
        <Card className={`relative overflow-hidden p-6 border-t-4 ${borderColor}`}>
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-gray-400">{title}</h3>
                <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-white">{value}</span>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${trendColor}`}>
                        {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {trend}
                    </div>
                </div>
            </div>
        </Card>
    );
}