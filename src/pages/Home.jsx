import React from 'react';
import Slideshow from '../components/slideshow/Slideshow';
import { NewsSection } from '../components/home/NewsSection';
import { QuickLinksSection } from '../components/home/QuickLinksSection';

function Home() {
  return (
    <div>
      <Slideshow />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Department of Electronics and Communication Engineering
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsSection />
          <QuickLinksSection />
        </div>
      </div>
    </div>
  );
}

export default Home;