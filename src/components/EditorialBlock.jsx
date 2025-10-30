import React from 'react';
import { motion } from 'framer-motion';

const EditorialBlock = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Designed for movement</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We obsess over fabric, fit, and finish so you don’t have to. From premium cotton to performance
            blends, every piece is thoughtfully crafted to feel effortless — all day, every day.
          </p>
          <div className="mt-6 flex gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Sustainably made</p>
              <p className="mt-1 text-sm text-slate-600">Ethical sourcing, lower impact.</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Comfort-first</p>
              <p className="mt-1 text-sm text-slate-600">Tailored fits, breathable fabrics.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200">
            <img
              src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop"
              alt="Minimal apparel flatlay"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-multiply"
              srcSet="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800&auto=format&fit=crop&fm=webp 1x, https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop&fm=webp 2x"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/5 via-white/0 to-white/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialBlock;
