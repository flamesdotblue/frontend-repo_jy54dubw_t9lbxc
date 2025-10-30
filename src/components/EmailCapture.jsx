import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus('error');
    setStatus('loading');
    // Mock async submit
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white overflow-hidden">
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        <div className="relative grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Get early access</h3>
            <p className="mt-2 text-white/80">
              Join our list for limited releases, exclusive offers, and first looks at upcoming drops.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-3 md:flex-row md:items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/40"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-slate-900 shadow-sm hover:opacity-90"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting…' : 'Subscribe'}
            </motion.button>
          </form>
        </div>
        {status === 'error' && (
          <p className="relative mt-3 text-sm text-red-300">Please enter a valid email.</p>
        )}
        {status === 'success' && (
          <p className="relative mt-3 text-sm text-emerald-300">Thanks! You’re on the list.</p>
        )}
      </div>
    </section>
  );
};

export default EmailCapture;
