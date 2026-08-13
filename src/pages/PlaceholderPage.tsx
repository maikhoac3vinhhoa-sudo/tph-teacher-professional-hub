import { Card } from '../components/ui/Card';

interface PlaceholderPageProps { title: string; description: string; }
export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
return <Card className="min-h-[360px]"><p className="text-sm font-semibold text-[var(--primary)]">Module placeholder</p><h1 className="mt-2 text-3xl font-bold">{title}</h1><p className="mt-3 max-w-2xl text-[var(--muted-foreground)]">{description}</p><div className="mt-8 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-sm text-[var(--muted-foreground)]">Chức năng nghiệp vụ sẽ được thiết kế và triển khai trong các ticket tiếp theo.</div></Card>;
}
