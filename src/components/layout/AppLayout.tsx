import { useState, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { appConfig } from '../../config/app-config';
import { navigationItems } from '../../config/navigation';
import { useTheme } from '../../hooks/useTheme';
import { Header } from './Header';
import { Sidebar } from '../navigation/Sidebar';

export function AppLayout({ children }: { children: ReactNode }) {
const [open, setOpen] = useState(false);
const { mode, setMode } = useTheme();
return <div className="min-h-screen bg-[var(--background)]"><div className="flex min-h-screen"><Sidebar />{open && <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={() => setOpen(false)}><nav className="h-full w-80 max-w-[86vw] overflow-y-auto bg-[var(--card)] p-4" onClick={(event) => event.stopPropagation()}><button className="mb-4 ml-auto grid size-11 place-items-center rounded-xl bg-[var(--muted)]" onClick={() => setOpen(false)} aria-label="Đóng điều hướng"><X size={20}/></button>{navigationItems.map(({ icon: Icon, ...item }) => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => `mb-1 flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)]'}`}><Icon size={18}/>{item.label}</NavLink>)}</nav></div>}<div className="flex min-w-0 flex-1 flex-col"><Header teacher={appConfig.teacher} mode={mode} onModeChange={setMode} onMenuClick={() => setOpen(true)} /><main className="flex-1 p-4 lg:p-6">{children}</main></div></div></div>;
}
