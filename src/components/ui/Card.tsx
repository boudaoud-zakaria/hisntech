import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn("bg-card text-card-foreground rounded-2xl border border-white/5 p-6 shadow-sm", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className, ...props }: CardProps) {
    return (
        <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props}>
            {children}
        </h3>
    );
}

export function CardDescription({ children, className, ...props }: CardProps) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)} {...props}>
            {children}
        </p>
    );
}

export function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("pt-0", className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("flex items-center pt-4", className)} {...props}>
            {children}
        </div>
    );
}

