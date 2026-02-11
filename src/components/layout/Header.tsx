import { Menu } from 'lucide-react';

interface HeaderProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
    return (
        <header className="h-20 w-full flex items-center justify-between px-4 md:px-8 border-b border-white/10 bg-background sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-white/5 rounded-lg md:hidden text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Show toggle button here on desktop if sidebar is closed, so user can open it back? 
                    Actually sidebar has a button that slides out or is visible. 
                    If sidebar is -translate-x-full, the button on the sidebar is also hidden.
                    We need a trigger on desktop when sidebar is closed.
                */}
                {!isSidebarOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="hidden md:flex p-2 hover:bg-white/5 rounded-lg text-white items-center gap-2"
                    >
                        <Menu className="w-5 h-5" />
                        <span className="text-sm font-medium">Menu</span>
                    </button>
                )}

                <h1 className="text-xl font-semibold text-white">Welcome user</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                    <p className="text-sm font-medium text-white">Mark Ferdinand</p>
                    <p className="text-xs text-muted-foreground">mkferdinand@gmail.com</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                        {/* Placeholder for avatar, utilizing a simple initial or color if no image */}
                        <span className="text-sm font-bold text-white">MF</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
