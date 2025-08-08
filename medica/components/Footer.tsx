import Link from "next/link";
import { Mail, Phone, MapPin, HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <HeartPulse className="h-6 w-6" />
            <span>Medica Health</span>
          </div>
          <p className="text-sm text-foreground/70">
            Compassionate care with modern medicine. Trusted by families and professionals.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@medica.health</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Wellness Ave, Care City</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/doctors">Doctors</Link></li>
            <li><Link className="hover:underline" href="/appointments">Book Appointment</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10 text-center py-4 text-xs text-foreground/60">
        © {new Date().getFullYear()} Medica Health. All rights reserved.
      </div>
    </footer>
  );
}