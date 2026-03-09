'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm = () => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: FormValues) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error ?? 'Something went wrong');
      }

      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Message sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-accent font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        {...register('honeypot')}
      />

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 rounded-xl border text-primary placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.name ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            }`}
            {...register('name')}
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 rounded-xl border text-primary placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 ${
              errors.email ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            }`}
            {...register('email')}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-primary mb-1.5">
          Company <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Ltd"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-primary placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
          {...register('company')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about the role you're looking to fill, or how we can help..."
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 rounded-xl border text-primary placeholder-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
          }`}
          {...register('message')}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className="w-full sm:w-auto bg-accent hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};
