import React, { useState, useEffect, useRef } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const fetchImages = () => {
      fetch('https://api.unsplash.com/photos', {
        headers: {
          Authorization: 'vAU5AvBo6JrfjbifQsbnT-imP2DyOLOsoJMGLE5mEfU'
        }
      })
      .then(response => response.json())
      .then(data => {
        setImages(data.slice(0, 10)); 
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (imageContainerRef.current) {
      const images = imageContainerRef.current.querySelectorAll('img');
      images.forEach(img => observer.observe(img));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imageContainerRef} className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          data-src={image.urls.small}
          alt={`Image ${index + 1}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
