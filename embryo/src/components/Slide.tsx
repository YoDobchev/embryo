import React from "react";

interface Props {
    slide : any
    onSwitch: any
}

const Slide = ({slide, onSwitch}: Props) => {
    return (
        <div>
            <div className="bg-gif"></div>
            <div className="main-body">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button onClick={() => onSwitch(slide.id)}>Напред</button>
            </div>
                <div className="media">{slide.media}</div>
        </div>
    )
}

export default Slide
