"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentInput } from "@/lib/validators";
import { useState } from "react";

const doctors = [
  { id: "smith", name: "Dr. Anna Smith, MD" },
  { id: "johnson", name: "Dr. Mark Johnson, DO" },
  { id: "lee", name: "Dr. Emily Lee, PhD" },
];

export default function AppointmentForm() {
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      doctor: "",
      reason: "",
      agreeToPolicies: false,
    },
  });

  async function onSubmit(data: AppointmentInput) {
    setSubmittedId(null);
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      const message = payload?.error ?? "Failed to submit";
      alert(message);
      return;
    }
    const payload = (await res.json()) as { id: string };
    setSubmittedId(payload.id);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-sm font-medium">Full name</label>
        <input
          {...register("fullName")}
          className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="Jane Doe"
        />
        {errors.fullName && (
          <p className="text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Phone</label>
          <input
            {...register("phone")}
            className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="+1 555 012 3456"
          />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-1 sm:grid-cols-3 sm:gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Date</label>
          <input
            type="date"
            {...register("date")}
            className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          />
          {errors.date && (
            <p className="text-xs text-red-600">{errors.date.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Time</label>
          <input
            type="time"
            {...register("time")}
            className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          />
          {errors.time && (
            <p className="text-xs text-red-600">{errors.time.message}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Doctor</label>
          <select
            {...register("doctor")}
            className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          >
            <option value="">Select a doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
          {errors.doctor && (
            <p className="text-xs text-red-600">{errors.doctor.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Reason for visit</label>
        <textarea
          rows={4}
          {...register("reason")}
          className="rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="Describe your symptoms or concerns"
        />
        {errors.reason && (
          <p className="text-xs text-red-600">{errors.reason.message}</p>
        )}
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" {...register("agreeToPolicies")} />
        <span>
          I agree to the processing of my personal data in accordance with the privacy policy.
        </span>
      </label>
      {errors.agreeToPolicies && (
        <p className="text-xs text-red-600">{errors.agreeToPolicies.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Book appointment"}
      </button>

      {submittedId && (
        <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm">
          Appointment submitted successfully. Reference ID: <span className="font-mono">{submittedId}</span>
        </div>
      )}
    </form>
  );
}