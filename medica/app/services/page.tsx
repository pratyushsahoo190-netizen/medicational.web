import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Stethoscope, HeartPulse, Activity, ShieldCheck, Brain, Baby } from "lucide-react";

export const metadata = {
  title: "Services | Medica Health",
  description: "Primary care, pediatrics, cardiology, diagnostics, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "Primary Care",
      description: "Comprehensive exams, chronic disease management, and preventive screenings.",
    },
    { icon: Baby, title: "Pediatrics", description: "Compassionate care for infants, children, and adolescents." },
    { icon: HeartPulse, title: "Cardiology", description: "Heart health assessments, stress tests, and advanced monitoring." },
    { icon: Brain, title: "Neurology", description: "Diagnosis and treatment of neurological disorders and conditions." },
    { icon: Activity, title: "Diagnostics", description: "On-site lab work, imaging referrals, and rapid test results." },
    { icon: ShieldCheck, title: "Vaccinations", description: "Routine immunizations and travel vaccines for all ages." },
  ];

  return (
    <main>
      <Section title="Our Services" description="Evidence‑based, patient‑centered care across specialties.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </Section>
    </main>
  );
}