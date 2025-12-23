import {useRef, useState} from "react";
import '../css/Projects.scss';
import {Badge, Button, Card, Container, ListGroup} from "react-bootstrap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";
import FrontendBlock from "./FrontendBlock.tsx";
import BackendBlock from "./BackendBlock.tsx";
import MeroBlock from "./MeroBlock.tsx";
import cat from "../assets/cat.png";

export default function Project(){
    const [chosenBtn, setChosenBtn] = useState<string>("Frontend");
    const projectsRef = useRef<HTMLHeadingElement | null>(null)

    useGSAP(() => {
        if (!projectsRef.current) return;

        const split = SplitText.create(projectsRef.current, { type: "chars, words" });

        split.chars.forEach((char) => {
            const el = char as HTMLElement; // приведение типа
            el.style.cursor = "pointer";

            el.addEventListener("mouseenter", () => {
                gsap.to(el, {
                    color: "#4ecdc4",
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            el.addEventListener("mouseleave", () => {
                gsap.to(el, {
                    color: "transparent",
                    duration: 0.3,
                    ease: "power2.out",
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
                <div className="projects__backend">
                    <Card className="my-5 projects__backend-item h-100 shadow-sm">
                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <Card.Title className="projects__backend-name">ToDo CLI на Go</Card.Title>
                                <Badge bg="dark">CLI · Go</Badge>
                            </div>

                            <Card.Text>
                                Консольное приложение для управления задачами с хранением в JSON.
                            </Card.Text>

                            <ListGroup variant="flush" className="mb-3 small">
                                <ListGroup.Item>✓ Добавление и удаление</ListGroup.Item>
                                <ListGroup.Item>✓ Отметка выполненных</ListGroup.Item>
                                <ListGroup.Item>✓ Фильтрация по статусу</ListGroup.Item>
                            </ListGroup>

                            <div className="mt-auto d-flex justify-content-between align-items-center">
                                <Button
                                    className="projects__backend-btn"
                                    variant="outline-dark"
                                    href="https://github.com/anassstya/toDo-CLI"
                                    target="_blank"
                                >
                                    GitHub
                                </Button>

                                <small className="text-muted">2025</small>
                            </div>

                        </Card.Body>
                    </Card>
                    <Card className=" projects__backend-item h-100 shadow-sm">
                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <Card.Title className="projects__backend-name">Calculator</Card.Title>
                                <Badge bg="dark">Go · PostgreSQL · React</Badge>
                            </div>

                            <Card.Text>
                                Веб-приложение для вычислений: фронтенд + REST API на Go и хранение результатов в PostgreSQL.
                            </Card.Text>

                            <ListGroup variant="flush" className="mb-3 small">
                                <ListGroup.Item>✓ CRUD операций над вычислениями</ListGroup.Item>
                                <ListGroup.Item>✓ Вычисление выражений (govaluate)</ListGroup.Item>
                                <ListGroup.Item>✓ Сохранение в PostgreSQL</ListGroup.Item>
                                <ListGroup.Item>✓ Разделённый фронтенд и бэкенд</ListGroup.Item>
                            </ListGroup>

                            <div className="mt-auto d-flex justify-content-between align-items-center">
                                <Button
                                    className="projects__backend-btn"
                                    variant="outline-dark"
                                    href="https://github.com/anassstya/Calculator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Button>

                                <small className="text-muted">2025</small>
                            </div>

                        </Card.Body>
                    </Card>
                    <Card className="my-5 projects__backend-item h-100 shadow-sm">
                        <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <Card.Title className="projects__backend-name">Subscriptions Service</Card.Title>
                                <Badge bg="dark">Go · PostgreSQL · Swagger · Docker Compose</Badge>
                            </div>

                            <Card.Text>
                                Веб-приложение для управления подписками: фронтенд на React, REST API на Go и хранение данных в PostgreSQL.
                            </Card.Text>

                            <ListGroup variant="flush" className="mb-3 small">
                                <ListGroup.Item>✓ CRUDL подписок</ListGroup.Item>
                                <ListGroup.Item>✓ Фильтрация и подсчет total_price</ListGroup.Item>
                                <ListGroup.Item>✓ Swagger + Docker Compose</ListGroup.Item>
                            </ListGroup>

                            <div className="mt-auto d-flex justify-content-between align-items-center">
                                <Button
                                    className="projects__backend-btn"
                                    variant="outline-dark"
                                    href="https://github.com/anassstya/subscriptions-service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Button>

                                <small className="text-muted">2025</small>
                            </div>
                        </Card.Body>
                    </Card>

                </div>
                <p className="projects__txt text-center">Скоро тут появится больше новых проектов!</p>
                <img className="projects__img" src={cat} alt=""/>
            </Container>
        </div>
    )
}