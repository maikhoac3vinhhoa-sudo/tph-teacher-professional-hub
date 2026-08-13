import { Menu, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '../ui/Button';
import type { ThemeMode, TeacherProfile } from '../../types/app';

interface HeaderProps { teacher: TeacherProfile; mode: ThemeMode; onModeChange: (mode: ThemeMode) => void; onMenuClick: () => void; }
const themeOptions: { mode: ThemeMode; icon: typeof Sun; label: string }[] = [ { mode: 'light', icon: Sun, label: 'Sáng' }, { mode: 'dark', icon: Moon, label: 'Tối' }, { mode: 'system', icon: Monitor, label: 'Hệ thống' } ];

export function Header({ teacher, mode, onModeChange, onMenuClick }: HeaderProps) {
return <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[var(--card)]/95 px-4 py-3 backdrop-blur lg:px-6">
<div className="flex items-center gap-3"><Button className="bg-[var(--muted)] text-[var(--foreground)] lg:hidden" onClick={onMenuClick} aria-label="Mở điều hướng"><Menu size={20}/></Button><div><p className="text-sm text-[var(--muted-foreground)]">Năm học 2026-2027</p><h2 className="text-lg font-bold">Xin chào, {teacher.name}</h2></div></div>
<div className="flex items-center gap-2"><div className="hidden rounded-xl border border-[var(--border)] p-1 sm:flex">{themeOptions.map(({ mode: option, icon: Icon, label }) => <button key={option} onClick={() => onModeChange(option)} className={`rounded-lg px-2 py-1.5 text-xs ${mode === option ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)]'}`} title={label}><Icon size={16}/></button>)}</div><div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-3 py-2"><div className="grid size-10 place-items-center rounded-full bg-[var(--primary)] text-sm font-bold text-[var(--primary-foreground)]">{teacher.avatarInitials}</div><div className="hidden sm:block"><p className="text-sm font-semibold">{teacher.subject}</p><p className="text-xs text-[var(--muted-foreground)]">{teacher.school}</p></div></div></div>

</header>; }
