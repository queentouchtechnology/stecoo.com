"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  country: z.string().min(2, "Please enter your country"),
  projectType: z.string().min(1, "Select a project type"),
  material: z.string().optional(),
  capacity: z.string().optional(),
  description: z.string().min(10, "Please describe your requirement (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const PROJECT_TYPES = [
  "Storage Tank",
  "Pressure Vessel",
  "Process Piping",
  "Steel Structure",
  "Mechanical Works",
  "Industrial Firefighting",
  "Special Welding Machine",
  "Manpower Supply",
  "Other",
];

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

const INPUT_CLASS =
  "w-full border border-steel/25 bg-ink px-3.5 py-3 text-sm text-light placeholder:text-steel-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-1 focus-visible:border-teal-light";

export function RfqForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", `RFQ — ${values.projectType} — ${values.company}`);
      formData.append("from_name", "STECOO Website RFQ");
      Object.entries(values).forEach(([key, value]) => formData.append(key, value ?? ""));
      if (file) formData.append("attachment", file);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        reset();
        setFile(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-teal-light/30 bg-teal/10 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-white">Request Received</h3>
        <p className="mt-3 text-steel">
          Thank you — your project quote request has been sent to STECOO&rsquo;s team. We will respond by email or
          phone shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} type="text" autoComplete="name" className={INPUT_CLASS} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} type="text" autoComplete="organization" className={INPUT_CLASS} aria-invalid={!!errors.company} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" autoComplete="email" className={INPUT_CLASS} aria-invalid={!!errors.email} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" autoComplete="tel" className={INPUT_CLASS} aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Country" error={errors.country?.message}>
          <input {...register("country")} type="text" autoComplete="country-name" className={INPUT_CLASS} aria-invalid={!!errors.country} />
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={INPUT_CLASS} aria-invalid={!!errors.projectType} defaultValue="">
            <option value="" disabled>
              Select project type
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Material (optional)">
          <input {...register("material")} type="text" placeholder="e.g. Carbon steel, SS 316" className={INPUT_CLASS} />
        </Field>
        <Field label="Required Capacity (optional)">
          <input {...register("capacity")} type="text" placeholder="e.g. 500 m³, 12-inch dia" className={INPUT_CLASS} />
        </Field>
      </div>

      <Field label="Project Description" error={errors.description?.message}>
        <textarea {...register("description")} rows={5} className={`${INPUT_CLASS} resize-none`} aria-invalid={!!errors.description} />
      </Field>

      <div>
        <label htmlFor="attachment" className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-[0.08em] text-steel">
          Attachment (optional)
        </label>
        <input
          id="attachment"
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="block w-full text-sm text-steel-dim file:mr-4 file:border-0 file:bg-teal file:px-4 file:py-2 file:font-display file:text-xs file:font-semibold file:uppercase file:tracking-[0.08em] file:text-white"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-amber">
          Something went wrong sending your request. Please try again, or contact us directly by email or phone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-teal px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request Project Quote"}
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-[0.08em] text-steel">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-amber">
          {error}
        </p>
      )}
    </div>
  );
}
