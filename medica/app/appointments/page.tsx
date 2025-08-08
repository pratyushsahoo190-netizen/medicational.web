import Section from "@/components/Section";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Book Appointment | Medica Health",
  description: "Schedule your visit in minutes.",
};

export default function AppointmentsPage() {
  return (
    <main>
      <Section title="Book an Appointment" description="Choose a convenient time and tell us how we can help.">
        <div className="max-w-2xl">
          <AppointmentForm />
        </div>
      </Section>
    </main>
  );
}