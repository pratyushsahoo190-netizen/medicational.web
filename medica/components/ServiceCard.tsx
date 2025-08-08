import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-background/60 backdrop-blur p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-4">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-2">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
}