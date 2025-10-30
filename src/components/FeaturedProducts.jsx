import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'sku-tee-001',
    name: 'Everyday Tee',
    price: 38,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
    color: 'Charcoal',
  },
  {
    id: 'sku-hood-002',
    name: 'Cozy Hoodie',
    price: 78,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200&auto=format&fit=crop',
    color: 'Graphite',
  },
  {
    id: 'sku-cap-003',
    name: 'Classic Cap',
    price: 28,
    image: 'https://images.unsplash.com/photo-1662973947945-2638d3d733a2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQ2FwfGVufDB8MHx8fDE3NjE4MjA1MzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Slate',
  },
  {
    id: 'sku-pant-004',
    name: 'Everyday Jogger',
    price: 68,
    image: 'https://images.unsplash.com/photo-1760896456589-a57d055e8e27?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVyeWRheSUyMEpvZ2dlcnxlbnwwfDB8fHwxNzYxODIwNTM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Carbon',
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={`${product.image}`}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          srcSet={`${product.image}&fm=webp 1x, ${product.image}&fm=webp&dpr=2 2x`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-slate-900">{product.name}</h3>
          <p className="text-slate-900 font-semibold">${product.price}</p>
        </div>
        <p className="mt-1 text-sm text-slate-500">{product.color}</p>
        <button className="mt-4 w-full rounded-lg bg-slate-900 py-2 text-white transition hover:opacity-90">
          Quick add
        </button>
      </div>
    </motion.a>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="shop" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Featured products</h2>
          <p className="mt-2 text-slate-600">A curated selection from our latest drop.</p>
        </div>
        <a href="#" className="hidden md:inline-flex text-slate-900 hover:opacity-80">View all</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
