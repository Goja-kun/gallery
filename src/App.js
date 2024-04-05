import React from 'react';
import ImageGallery from './components/ImageGallery';
import PerformanceAnalysis from './components/PerformanceAnalysis';

const App = () => {
  return (
    <div>
      <h1>Optimized Image Gallery</h1>
      <ImageGallery />
      <PerformanceAnalysis />
    </div>
  );
};

export default App;
