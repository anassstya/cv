import React from "react";
import '../css/Projects.scss';
import cat from '../assets/cat.png'

export default function MeroBlock(){
    return(
        <div id="events">
            <p className="projects__txt text-center">Скоро тут появятся новые проекты.</p>
            <img className="projects__img" src={cat} alt=""/>
        </div>
    )
}