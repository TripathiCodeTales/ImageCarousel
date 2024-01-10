import './App.css';
import React, { useState } from 'react';
import ImageCorousel from './ImageCorousel';


const images = [{

  url: "https://splidejs.com/images/slides/image-slider/01.jpg",
  alt : "chocolate Cupcakes"
  },
 
  {
  url: "https://splidejs.com/images/slides/image-slider/02.jpg",
  alt : "choco-muffin"
 },
  {
    url: "https://splidejs.com/images/slides/image-slider/03.jpg",
  alt : "coffee cup"

  }]



const App = () => {
  
return (

    <div>
  <ImageCorousel images = {images}/>
    </div>
  )
}
export default App;
