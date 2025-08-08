import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-2 text-foreground/70 max-w-2xl">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}