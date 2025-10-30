import React from 'react';
import Hero3D from './components/Hero3D';
import FeaturedProducts from './components/FeaturedProducts';
import EditorialBlock from './components/EditorialBlock';
import EmailCapture from './components/EmailCapture';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Hero with Spline 3D scene */}
      <Hero3D />

      {/* Featured products grid */}
      <FeaturedProducts />

      {/* Editorial storytelling block */}
      <EditorialBlock />

      {/* Email capture */}
      <EmailCapture />

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Shade of You. All rights reserved.</p>
          <nav className="flex gap-6 text-sm text-slate-700">
            <a href="#" className="hover:opacity-80">Sizing</a>
            <a href="#" className="hover:opacity-80">Shipping & Returns</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
