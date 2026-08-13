import type { LucideIcon } from 'lucide-react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface TeacherProfile { name: string; subject: string; school: string; avatarInitials: string; }
export interface BrandingConfig { appName: string; shortName: string; accentColor: string; }
export interface ThemeConfig { defaultMode: ThemeMode; accentColor: string; }
export interface AppConfig { teacher: TeacherProfile; school: string; subjects: string[]; grades: string[]; academicYear: string; branding: BrandingConfig; theme: ThemeConfig; }
export interface NavigationItem { label: string; path: string; icon: LucideIcon; description: string; }
