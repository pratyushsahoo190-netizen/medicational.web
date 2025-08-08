import Section from "@/components/Section";

export const metadata = {
  title: "Contact | Medica Health",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <main>
      <Section title="Contact Us" description="We typically respond within one business day.">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Phone:</span> +1 (555) 012-3456</p>
            <p><span className="font-medium">Email:</span> support@medica.health</p>
            <p><span className="font-medium">Address:</span> 123 Wellness Ave, Care City</p>
            <p><span className="font-medium">Hours:</span> Mon–Fri, 8am–6pm</p>
          </div>

          <form className="grid gap-3">
            <div className="grid gap-1">
              <label className="text-sm font-medium">Name</label>
              <input className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2" />
            </div>
            <button type="button" className="inline-flex justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90">
              Send message
            </button>
          </form>
        </div>
      </Section>
    </main>
  );
}