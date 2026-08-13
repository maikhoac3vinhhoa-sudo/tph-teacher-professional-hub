import { useEffect, useMemo, useState } from 'react';
import { appConfig } from '../config/app-config';
import type { ThemeMode } from '../types/app';

const storageKey = 'tph-theme-mode';

export function useTheme() {
const [mode, setMode] = useState<ThemeMode>(() => (localStorage.getItem(storageKey) as ThemeMode | null) ?? appConfig.theme.defaultMode);
const isDark = useMemo(() => mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches), [mode]);

useEffect(() => {
localStorage.setItem(storageKey, mode);
document.documentElement.classList.toggle('dark', isDark);
document.documentElement.style.setProperty('--primary', appConfig.theme.accentColor);
}, [isDark, mode]);

return { mode, setMode, isDark };
}
