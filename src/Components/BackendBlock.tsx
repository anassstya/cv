import '../css/Projects.scss';
import {Badge, Button, Card, ListGroup} from "react-bootstrap";

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
            </div>
        </div>
    )
}