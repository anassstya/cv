import gsap from "gsap";
import {useEffect, useRef} from "react";
import React from "react";
import {SplitText} from "gsap/all";

function Letter({letter}){
    const handleEnter = (e) => {
        gsap.to(e.target, { color: "#4ecdc4", duration: 0.3, y: -5 });
    };

    const handleLeave = (e) => {
        gsap.to(e.target, { color: "#ff6b6b", duration: 0.3, y: 0 });
    };

    return (
        <span
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
                display: "inline-block",
                cursor: "pointer",
                transition: "color 0.3s",
            }}
        >
      {letter}
    </span>
    );
}

export default function AnimatedWord({ text="" }) {
    return (
        <h1>
            {text.split("").map((char, index) => (
                <Letter key={index} letter={char} />
            ))}
        </h1>
    );
}
