import React, {useRef, useState} from "react";
import '../css/Projects.scss';
import {Button, Container} from "react-bootstrap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";
import FrontendBlock from "./FrontendBlock.tsx";
import BackendBlock from "./BackendBlock.tsx";
import MeroBlock from "./MeroBlock.tsx";

export default function Project(){
    const [chosenBtn, setChosenBtn] = useState<string>("Frontend");
    const projectsRef = useRef<HTMLHeadingElement | null>(null)

    useGSAP(() => {
        if (!projectsRef.current) return;

        const split = SplitText.create(projectsRef.current, { type: "chars, words" });

        split.chars.forEach((char: HTMLElement) => {
            char.style.cursor = "pointer";

            char.addEventListener("mouseenter", () => {
                gsap.to(char, {
                    color: "#4ecdc4",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            char.addEventListener("mouseleave", () => {
                gsap.to(char, {
                    color: "transparent",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        return () => {
            split.revert();
        };
    }, []);

    const renderContent = () => {
        switch (chosenBtn) {
            case "Frontend":
                return (
                    <FrontendBlock/>
                );
            case "Backend":
                return (
                    <BackendBlock/>
                );
            case "Мероприятия":
                return (
                    <MeroBlock/>
                );
            default:
                return null;
        }
    };

    return(
        <div className="projects">
            <Container>
                <h2 className="projects__name" ref={projectsRef}>Проекты</h2>
                <div className="projects__btns">
                    {["Frontend", "Backend", "Мероприятия"].map((btn) => (
                        <Button
                            key={btn}
                            className={`projects__btns-item ${chosenBtn === btn ? "active" : ""}`}
                            onClick={() => setChosenBtn(btn)}
                        >
                            {btn}
                        </Button>
                    ))}
                </div>

                {renderContent()}
            </Container>
        </div>
    )
}