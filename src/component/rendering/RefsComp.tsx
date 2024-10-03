import React, { useRef, useState, useEffect } from 'react';

function ImageGallery() {
  const imageUrls = [
    'https://via.placeholder.com/300/09f/fff.jpg',
    'https://via.placeholder.com/300/f90/eee.jpg',
    'https://via.placeholder.com/300/90f/aaa.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.animation = 'none';
      setTimeout(() => {
        imageRef.current.style.animation = 'fadeIn 0.5s ease';
      }, 0);
    }
  }, [currentImageIndex]);

  return (
    <div>
      <div className="image-container"> 
        <img 
          ref={imageRef} // เชื่อมต่อ imageRef กับ element <img>
          src={imageUrls[currentImageIndex]} 
          alt={`Image ${currentImageIndex + 1}`}
          style={{ width: '200px', height: 'auto' }} // กำหนดขนาดรูปภาพ
        />
      </div>
      <button onClick={handlePrevious}>ก่อนหน้า</button>
      <button onClick={handleNext}>ถัดไป</button>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default ImageGallery;