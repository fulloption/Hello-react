import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random1');
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Image from API" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default App;