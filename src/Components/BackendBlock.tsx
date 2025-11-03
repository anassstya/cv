import React from "react";
import '../css/Projects.scss';
import cat from '../assets/cat.png'
export default function BackendBlock(){
    return(
        <div id="backend">
            <div>
                <ul className="projects__block">
                    <li className="projects__block-item">Go (Golang)</li>
                    <li className="projects__block-item">PostgreSQL</li>
                    <li className="projects__block-item">MongoDB</li>
                    <li className="projects__block-item">Алгоритмы и структуры данных</li>
                </ul>
                <p className="projects__txt text-center">На данный момент только учусь. Но скоро тут появятся новые проекты.</p>
                <img className="projects__img" src={cat} alt=""/>
            </div>
        </div>
    )
}