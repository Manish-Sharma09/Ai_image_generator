// ImageGenerator.jsx
import React, { useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';
import apiKey from '../config'; // Update the path accordingly

const ImageGenerator = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [description, setDescription] = useState('');

  const generateImage = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ description }),
      });

      if (response.ok) {
        const result = await response.json();
        setGeneratedImage(result.image_url);
      } else {
        // Log error details
        console.error(`Error: ${response.status} - ${response.statusText}`);
        const errorResult = await response.json();
        console.error('Error details:', errorResult);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className='ai-image-generator'>
      <div className='header'>Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={generatedImage || default_image} alt="Generated Image" /></div>
      </div>
      <div className='seacrh-box'>
        <input
          type='text'
          className='search-input'
          placeholder='Describe what you want'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='generate-btn' onClick={generateImage}>Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
