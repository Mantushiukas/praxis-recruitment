'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const talentSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  role: z.string().min(2, 'Please tell us your role or area'),
  experience: z.string().min(1, 'Please select your experience level'),
  message: z.string().min(10, 'Please tell us a little about yourself').max(1000),
  honeypot: z.string().max(0).optional(),
});

type TalentFormData = z.infer<typeof talentSchema>;

const experienceLevels = [
  { value: '1-3', label: '1–3 years' },
  { value: '3-5', label: '3–5 years' },
  { value: '5-8', label: '5–8 years' },
  { value: '8+', label: '8+ years' },
];

export const TalentForm = () => {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TalentFormData>({
    resolver: zodResolver(talentSchema),
  });

  const handleFormSubmit = async (data: TalentFormData) => {
    if (data.honeypot) return;
    setSubmitState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: `TALENT ENQUIRY\nRole/Area: ${data.role}\nExperience: ${data.experience} years\n\n${data.message}`,
          type: 'talent',
        }),
      });
      if (res.ok) {
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">You're in.</h3>
        <p className="text-gray-500 font-light">We'll be in touch within 2 business days.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Talent enquiry form"
    >
      {/* Honeypot */}
      <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Name */}
      <div>
        <label htmlFor="talent-name" className="block text-sm font-semibold text-primary mb-1.5">
          Full Name
        </label>
        <input
          id="talent-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-xl border text-primary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
          {...register('name')}
          aria-describedby={errors.name ? 'talent-name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="talent-name-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="talent-email" className="block text-sm font-semibold text-primary mb-1.5">
          Email
        </label>
        <input
          id="talent-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={`w-full px-4 py-3 rounded-xl border text-primary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
          {...register('email')}
          aria-describedby={errors.email ? 'talent-email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="talent-email-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="talent-role" className="block text-sm font-semibold text-primary mb-1.5">
          Your Role / Area
        </label>
        <input
          id="talent-role"
          type="text"
          placeholder="e.g. Performance Marketer, Backend Engineer"
          className={`w-full px-4 py-3 rounded-xl border text-primary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition ${
            errors.role ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
          {...register('role')}
          aria-describedby={errors.role ? 'talent-role-error' : undefined}
          aria-invalid={!!errors.role}
        />
        {errors.role && (
          <p id="talent-role-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="talent-experience" className="block text-sm font-semibold text-primary mb-1.5">
          Years of Experience
        </label>
        <select
          id="talent-experience"
          className={`w-full px-4 py-3 rounded-xl border text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent transition bg-white ${
            errors.experience ? 'border-red-400' : 'border-gray-200'
          }`}
          {...register('experience')}
          aria-describedby={errors.experience ? 'talent-exp-error' : undefined}
          aria-invalid={!!errors.experience}
          defaultValue=""
        >
          <option value="" disabled>Select experience level</option>
          {experienceLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
        {errors.experience && (
          <p id="talent-exp-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="talent-message" className="block text-sm font-semibold text-primary mb-1.5">
          Tell us about yourself
        </label>
        <textarea
          id="talent-message"
          rows={5}
          placeholder="What you do, what you're looking for, and what matters to you in your next role."
          className={`w-full px-4 py-3 rounded-xl border text-primary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition resize-none ${
            errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
          }`}
          {...register('message')}
          aria-describedby={errors.message ? 'talent-message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="talent-message-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitState === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="w-full bg-accent hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all hover:shadow-lg"
      >
        {submitState === 'loading' ? 'Sending…' : 'Join the Network'}
      </button>
    </form>
  );
};
