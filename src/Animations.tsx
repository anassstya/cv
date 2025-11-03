import gsap from "gsap";

interface LetterProps {
    letter: string;
}
function Letter({ letter }: LetterProps) {
    const handleEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        gsap.to(e.currentTarget, { color: "#4ecdc4", duration: 0.3, y: -5 });
    };

    const handleLeave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        gsap.to(e.currentTarget, { color: "#ff6b6b", duration: 0.3, y: 0 });
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

interface AnimatedWordProps {
    text?: string;
}

export default function AnimatedWord({ text = "" }: AnimatedWordProps) {
    return (
        <h1>
            {text?.split("").map((char, index) => (
                <Letter key={index} letter={char} />
            )) || []}
        </h1>
    );
}