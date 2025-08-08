import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />

      <Section title="Trusted Care, Tailored to You" description="Our multidisciplinary team delivers comprehensive services with compassion and expertise.">
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard icon={Stethoscope} title="Primary Care" description="Annual physicals, chronic care, and preventive screenings." />
          <ServiceCard icon={HeartPulse} title="Cardiology" description="Heart health assessments and advanced diagnostics." />
          <ServiceCard icon={Activity} title="Diagnostics" description="On‑site lab work and rapid results." />
        </div>
      </Section>

      <Section title="Our Doctors" description="Meet a few of our specialists.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DoctorCard name="Dr. Anna Smith, MD" specialty="Internal Medicine" />
          <DoctorCard name="Dr. Mark Johnson, DO" specialty="Family Medicine" />
          <DoctorCard name="Dr. Emily Lee, PhD" specialty="Neuropsychology" />
        </div>
      </Section>
    </div>
  );
}
