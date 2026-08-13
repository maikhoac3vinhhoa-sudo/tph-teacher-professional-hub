import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
return <button className={cn('inline-flex min-h-11 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]', className)} {...props} />;
}
