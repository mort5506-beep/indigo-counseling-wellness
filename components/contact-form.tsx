"use client";

import { useRef, useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { site } from "@/lib/site";
import GradientButton from "@/components/gradient-button";

/**
 * ContactForm — mailto-based contact form (BUILD_SPEC §6 CONTACT).
 *
 * Fields: Name*, Email*, Subject*, Message*, optional updates checkbox.
 * Validates required fields + basic email format on submit, shows inline
 * errors below each field (red, aria), focuses the first invalid field, and
 * on a valid submit opens the user's email client via a prefilled mailto:
 * then surfaces an aria-live success note.
 *
 * Reduced-motion safe (no looping animation) and fully keyboard accessible.
 */

type FieldKey = "name" | "email" | "subject" | "message";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  updates: boolean;
};

type Errors = Partial<Record<FieldKey, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-base text-ink " +
  "shadow-[0_4px_16px_-10px_rgba(43,16,101,0.18)] backdrop-blur-sm placeholder:text-ink-faint " +
  "transition-[border-color,box-shadow] duration-200 ease-out " +
  "focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600/60 focus:ring-offset-0";

const inputErrorCls = "border-red-500 focus:border-red-500 focus:ring-red-500/50";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
    updates: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const refs: Record<FieldKey, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    subject: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  const validate = (v: FormValues): Errors => {
    const next: Errors = {};
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(v.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!v.subject.trim()) next.subject = "Please enter a subject.";
    if (!v.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const update =
    (key: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setValues((prev) => ({ ...prev, [key]: value }));
      // Clear a field's error as the user corrects it.
      if (key !== "updates" && errors[key as FieldKey]) {
        setErrors((prev) => {
          const { [key as FieldKey]: _removed, ...rest } = prev;
          return rest;
        });
      }
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      // Focus the first invalid field (in field order).
      const order: FieldKey[] = ["name", "email", "subject", "message"];
      const first = order.find((k) => nextErrors[k]);
      if (first) refs[first].current?.focus();
      return;
    }

    setErrors({});

    // Build the mailto: subject = Subject field; body = name/email/message + prefs.
    const subject = encodeURIComponent(values.subject.trim());
    const bodyLines = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      "",
      "Message:",
      values.message.trim(),
      "",
      `Email me occasional updates: ${values.updates ? "Yes" : "No"}`,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    setSubmitted(true);
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className="text-sm font-semibold text-ink">
          Name <span className="text-violet-700">*</span>
        </label>
        <input
          ref={refs.name as React.RefObject<HTMLInputElement>}
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          required
          aria-required="true"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          placeholder="Your name"
          className={`${inputBase} min-h-[44px] ${errors.name ? inputErrorCls : ""}`}
        />
        {errors.name && (
          <p
            id="cf-name-error"
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600"
          >
            <AlertCircle size={15} strokeWidth={2} aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-email" className="text-sm font-semibold text-ink">
          Email <span className="text-violet-700">*</span>
        </label>
        <input
          ref={refs.email as React.RefObject<HTMLInputElement>}
          id="cf-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          required
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          placeholder="you@example.com"
          className={`${inputBase} min-h-[44px] ${errors.email ? inputErrorCls : ""}`}
        />
        {errors.email && (
          <p
            id="cf-email-error"
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600"
          >
            <AlertCircle size={15} strokeWidth={2} aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-subject" className="text-sm font-semibold text-ink">
          Subject <span className="text-violet-700">*</span>
        </label>
        <input
          ref={refs.subject as React.RefObject<HTMLInputElement>}
          id="cf-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={update("subject")}
          required
          aria-required="true"
          aria-invalid={errors.subject ? "true" : undefined}
          aria-describedby={errors.subject ? "cf-subject-error" : undefined}
          placeholder="What would you like to talk about?"
          className={`${inputBase} min-h-[44px] ${errors.subject ? inputErrorCls : ""}`}
        />
        {errors.subject && (
          <p
            id="cf-subject-error"
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600"
          >
            <AlertCircle size={15} strokeWidth={2} aria-hidden="true" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-semibold text-ink">
          Message <span className="text-violet-700">*</span>
        </label>
        <textarea
          ref={refs.message as React.RefObject<HTMLTextAreaElement>}
          id="cf-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          placeholder="Share a little about what brings you here. There's no pressure to share more than you're comfortable with."
          className={`${inputBase} min-h-[140px] resize-y ${
            errors.message ? inputErrorCls : ""
          }`}
        />
        {errors.message && (
          <p
            id="cf-message-error"
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600"
          >
            <AlertCircle size={15} strokeWidth={2} aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Updates checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="cf-updates"
          name="updates"
          type="checkbox"
          checked={values.updates}
          onChange={update("updates")}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-md border-border accent-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
        />
        <label
          htmlFor="cf-updates"
          className="cursor-pointer text-sm leading-relaxed text-ink-soft"
        >
          Email me occasional updates.
        </label>
      </div>

      {/* Submit */}
      <GradientButton
        type="submit"
        variant="primary"
        size="lg"
        className="mt-1 w-full"
      >
        Send message
        <Send size={18} strokeWidth={2} aria-hidden="true" />
      </GradientButton>

      {/* Success confirmation (polite live region) */}
      <div aria-live="polite">
        {submitted && (
          <div
            className="flex items-start gap-3 rounded-2xl border border-sage-500/30 bg-sage-500/10 px-4 py-3 text-sm leading-relaxed text-sage-700"
            role="status"
          >
            <CheckCircle2
              size={18}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-sage-600"
              aria-hidden="true"
            />
            <span>
              Thank you for reaching out — your email app should open with your
              message ready to send. If needed, you&rsquo;ll hear back within
              48&ndash;72 hours.
            </span>
          </div>
        )}
      </div>
    </form>
  );
}
