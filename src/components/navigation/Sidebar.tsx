import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import { appConfig } from '../../config/app-config';

export function Sidebar() {
return <aside className="hidden w-72 shrink-0 border-r border-[var(--border)] bg-[var(--card)] p-4 lg:block">
<div className="mb-6 rounded-2xl bg-[var(--accent)] p-4"><p className="text-sm font-bold text-[var(--primary)]">{appConfig.branding.shortName}</p><h1 className="text-lg font-bold">Teacher Professional Hub</h1></div>
<nav className="space-y-1">{navigationItems.map(({ icon: Icon, ...item }) => <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]'}`}><Icon size={18}/><span>{item.label}</span></NavLink>)}</nav>

</aside>; }
