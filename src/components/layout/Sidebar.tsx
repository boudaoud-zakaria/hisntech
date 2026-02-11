import { Shield, LayoutGrid, Ticket, Bell, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
    const menuItems = [
        { icon: LayoutGrid, label: 'Monitoring', path: '/monitoring' },
        { icon: Ticket, label: 'Incidents', path: '/incidents' },
        { icon: Bell, label: 'Alerts', path: '/alerts' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggle}
            />

            <aside
                className={`w-64 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 h-screen fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Toggle Button (Desktop & Mobile) */}
                <button
                    onClick={toggle}
                    className="absolute -right-3 top-9 bg-main text-white p-1 rounded-full shadow-lg hover:bg-main/90 transition-colors z-50 hidden md:block"
                >
                    {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>

                {/* Logo Section */}
                <div className="flex items-center gap-2 mb-10 px-6 w-full">
                    <div className="relative shrink-0">
                        <Shield className="w-8 h-8 text-main fill-main/20" />
                        <div className="absolute inset-0 bg-main/20 blur-sm rounded-full" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent truncate">
                        CyberDoor
                    </span>
                </div>

                {/* Navigation Menu */}
                <nav className="w-full flex-1 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-main text-white shadow-lg shadow-main/25'
                                    : 'text-muted-foreground hover:bg-main/10 hover:text-main'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`} />
                                    <span className="font-medium text-sm truncate">{item.label}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer Actions */}
                <div className="w-full px-4 space-y-2 mt-auto">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-main/10 hover:text-main transition-colors">
                        <Settings className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm truncate">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-main/10 hover:text-main transition-colors">
                        <LogOut className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm truncate">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
