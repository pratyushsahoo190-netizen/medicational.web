import Section from "@/components/Section";

export const metadata = {
  title: "About | Medica Health",
  description: "Our mission, values, and commitment to quality care.",
};

export default function AboutPage() {
  return (
    <main>
      <Section title="About Medica Health" description="Combining clinical excellence with a human touch.">
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <p>
            Medica Health is a patient‑first medical group offering comprehensive care across primary and specialty services. Our board‑certified clinicians, evidence‑based protocols, and modern technology help us deliver safe, effective, and equitable care for all.
          </p>
          <p>
            We believe in collaborative medicine. That means listening carefully, tailoring treatment plans, and empowering patients with clear information. From routine checkups to complex care, we are with you every step of the way.
          </p>
        </div>
      </Section>
    </main>
  );
}