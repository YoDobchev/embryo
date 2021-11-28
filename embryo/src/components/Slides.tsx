import { type } from 'os'
import React from 'react'
import Slide from './Slide'
interface Props {
    slides: any,
    onSwitch: any
}
const Slides = ({slides, onSwitch} : Props) =>
{
  
    if (slides[0].id == 1) {
        return (
            <>
                <h1>zdrasti</h1>
                <button onClick={() => onSwitch(slides[0].id)}>Напред</button>
            </>
        )
    }
    return (
        <>
          {slides.map((slide : any) => (
          <Slide key={slide.id} slide={slide} onSwitch={onSwitch}/>
          ))}
        </>
    )
}

export default Slides
