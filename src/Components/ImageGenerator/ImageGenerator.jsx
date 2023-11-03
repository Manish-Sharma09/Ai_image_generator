import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className='header'>Ai Image <span>Generator</span></div>
      <div className='img-loading'>
        <div className='image'><img src={default_image} /></div>
      </div>
      <div className='seacrh-box'>
        <input type='text' className='search-input'placeholder='Describe what you want'/>
        <div className='generate-btn'>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
