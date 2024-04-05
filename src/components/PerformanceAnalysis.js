import React from 'react';

const PerformanceAnalysis = () => {
  const performanceData = {
    loadTime: 165, 
    resourceLoadTimes: [
      { url: 'http://localhost:3000/url_to_critical_image_1.jpg', startTime: 9.7, duration: 23.6 },
      { url: 'http://localhost:3000/url_to_critical_image_2.jpg', startTime: 9.8, duration: 25.7 },
      { url: 'http://localhost:3000/static/js/bundle.js', startTime: 10, duration: 85.4 }
    ]
  };

  return (
    <div className="performance-analysis">
      <h2>Performance Analysis</h2>
      <p>Application Load Time: {performanceData.loadTime} milliseconds</p>
      <h3>Resource Load Times:</h3>
      <ul>
        {performanceData.resourceLoadTimes.map((resource, index) => (
          <li key={index}>
            <strong>Resource:</strong> {resource.url}<br />
            <strong>Start Time:</strong> {resource.startTime} milliseconds<br />
            <strong>Duration:</strong> {resource.duration} milliseconds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceAnalysis;