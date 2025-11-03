import React from "react";
import '../css/Projects.scss';
import cat from '../assets/cat.png'
export default function FrontendBlock(){
    return(
        <div id="frontend">
            <ul className="projects__block">
                <li className="projects__block-item">HTML</li>
                <li className="projects__block-item">CSS (SCSS)</li>
                <li className="projects__block-item">JavaScript (ES6+)</li>
                <li className="projects__block-item">TypeScript</li>
                <li className="projects__block-item">React</li>
                <li className="projects__block-item">Redux</li>
                <li className="projects__block-item">React Router</li>
                <li className="projects__block-item">Axios / Fetch API</li>
                <li className="projects__block-item">GSAP</li>
                <li className="projects__block-item">Bootstrap</li>
                <li className="projects__block-item">Figma</li>
                <li className="projects__block-item">Vite / Webpack</li>
                <li className="projects__block-item">Jest</li>
                <li className="projects__block-item">Git / GitHub</li>
            </ul>
            <p className="projects__txt text-center">Скоро тут появятся новые проекты.</p>
            <img className="projects__img" src={cat} alt=""/>

        </div>
    )
}