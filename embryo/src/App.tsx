import React from 'react';
import './App.css';
import Slides from './components/Slides'
import { useState } from 'react'


function App() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "A",
      desc: "lolo"
  }])
  const arr = [
    {
      id: 1,
      title: "A",
      desc: "lolw"
  },
  {
      id: 2,
      title: "B",
      desc: "lolw",
      media: (
        <img src="https://i.kym-cdn.com/entries/icons/original/000/027/843/chungcover.jpg"></img>
      )
  },
  {
      id: 3,
      title: "C",
      desc: "lowl",
      media: (
        <img src="https://i.kym-cdn.com/entries/icons/original/000/027/843/chungcover.jpg"></img>
      )
  },
  {
    id: 4,
    title: "LOLO",
    desc: "Aa",
    media: (
      <img src="https://i.kym-cdn.com/entries/icons/original/000/027/843/chungcover.jpg"></img>
    )
  },
  {
    id: 5,
    title: "w",
    desc: "ВАТАРМЕЛОН",
    media: (
      <img src="https://i.kym-cdn.com/entries/icons/original/000/027/843/chungcover.jpg"></img>
    )
  },
  {
    id: 6,
    title: "lolo",
    desc: "ВАТАРМЕЛОН",
    media: (
      <img src="https://i.kym-cdn.com/entries/icons/original/000/027/843/chungcover.jpg"></img>
    )
  }
  ]
  const switchSlide = (id: any) => {

    console.log(id)
    if (arr[id] != null) {
      setSlides([arr[id]])
    }
    
    console.log(slides)
  }
  return (
    <div className="App">
      <Slides slides={slides} onSwitch={switchSlide}></Slides>
    </div>
  );
}

export default App;
