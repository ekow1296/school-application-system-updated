"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import SearchSection from '@/components/sections/SearchSection';
import FeaturedSchools from '@/components/sections/FeaturedSchools';
import PopularPrograms from '@/components/sections/PopularPrograms';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SearchSection />
        <FeaturedSchools />
        <PopularPrograms />
        <Testimonials />
        <FAQ />
        {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} />}
      </main>
      <Footer />
    </div>
  );
}