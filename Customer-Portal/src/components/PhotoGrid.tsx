import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = useCallback(async () => {
    try {
      const promises = Array(9).fill(null).map(() => 
        axios.get('https://picsum.photos/1280/720', { responseType: 'blob' })
      );
      const responses = await Promise.all(promises);
      const newPhotos = responses.map(response => URL.createObjectURL(response.data));
      setPhotos(newPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);

    return () => {
      clearInterval(interval);
      photos.forEach(URL.revokeObjectURL);
    };
  }, [fetchPhotos, photos]);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <LazyLoadImage
          key={photo}
          src={photo}
          alt={`Grid item ${index + 1}`}
          effect="blur"
          width="100%"
          height="auto"
        />
      ))}
    </div>
  );
};

export default React.memo(PhotoGrid);