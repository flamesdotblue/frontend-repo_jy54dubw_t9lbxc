import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (non-blocking for pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col items-start justify-center min-h-[80vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Shade of You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-slate-700"
        >
          Minimal, premium essentials crafted for everyday comfort. Explore our new arrivals and limited drops.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a
            href="#shop"
            className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
          >
            Shop New Arrivals
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:bg-white"
          >
            About the Brand
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
