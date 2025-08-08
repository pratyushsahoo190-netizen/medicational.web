import Section from "@/components/Section";
import DoctorCard from "@/components/DoctorCard";

export const metadata = {
  title: "Doctors | Medica Health",
  description: "Meet our board‑certified physicians and specialists.",
};

export default function DoctorsPage() {
  const doctors = [
    { name: "Dr. Anna Smith, MD", specialty: "Internal Medicine" },
    { name: "Dr. Mark Johnson, DO", specialty: "Family Medicine" },
    { name: "Dr. Emily Lee, PhD", specialty: "Neuropsychology" },
    { name: "Dr. Liam Patel, MD", specialty: "Cardiology" },
    { name: "Dr. Sophia Chen, MD", specialty: "Pediatrics" },
    { name: "Dr. Daniel Gomez, MD", specialty: "Gastroenterology" },
  ];

  return (
    <main>
      <Section title="Our Doctors" description="A multidisciplinary team dedicated to your health.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <DoctorCard key={d.name} name={d.name} specialty={d.specialty} />
          ))}
        </div>
      </Section>
    </main>
  );
}