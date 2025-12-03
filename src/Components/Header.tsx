import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import '../css/Header.scss';
import '../App.css';
import AnimatedWord from "../Animations.tsx";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
gsap.registerPlugin(SplitText);


import telegram from "../assets/telegram.png";
import mail from "../assets/mail.png";
import github from "../assets/github.png";
import myPhoto from "../assets/my-photo.jpg";

export default function Header(){
    const developerRef = useRef<HTMLSpanElement | null>(null);

    useGSAP(() => {
        if (!developerRef.current) return;

        const split = SplitText.create(developerRef.current, { type: "chars, words" });

        gsap.from(split.chars, {
            yPercent: "random([-50, 50])",
            rotation: "random([-20,20])",
            ease: "back.inOut",
            autoAlpha: 0,
            stagger: {
                amount: 1,
                from: "random"
            }
        });

        split.chars.forEach((char) => {
            const el = char as HTMLElement; // приведение типа

            el.style.cursor = "pointer";

            el.addEventListener("mouseenter", () => {
                gsap.to(el, {
                    color: "#4ecdc4",
                    duration: 0.3,
                    ease: "power2.out",
                });

                if (el.textContent?.toLowerCase() === "o") {
                    gsap.set(el, { rotation: 0 });
                    gsap.to(el, {
                        rotation: 360,
                        duration: 0.6,
                        ease: "back.out(2)",
                        transformOrigin: "center center",
                    });
                }
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

    return(
        <header className="header">
            <Navbar className="header__navbar">
                <Container>
                    <Navbar.Brand className="header__logo ">
                        <AnimatedWord text="Резюме"/>
                    </Navbar.Brand>
                    <Nav className="ms-auto gap-md-3 gap-sm-1">
                        <Nav.Link href="#about" className="header__item">Обо мне</Nav.Link>
                        <NavDropdown title="Проекты" align="end" className="header__item">
                            <NavDropdown.Item className="header__item text-center">Frontend</NavDropdown.Item>
                            <NavDropdown.Item className="header__item text-center">Backend</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="header__item text-center">Мероприятия</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Container>
            </Navbar>
            <Container fluid="sm">
                <div className="header__vacancy text-center">
                    <span className="header__vacancy-full">Fullstack</span>{" "}
                    <span ref={developerRef}>Developer</span>
                </div>
                <Row className="header__content gx-0  my-5">
                    <Col xs={12} md={6} className="header__info p-0">
                        <div className="header__photo">
                            <img className="header__photo-img" src={myPhoto} alt=""/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="header__info p-0">
                        <div className="header__info-cover">
                            <h1 className="header__name text-center">Анастасия Ачкасова</h1>
                            <div className="header__btns">
                                <a href="https://t.me/aanasstya" target="_blank" rel="noopener noreferrer">
                                    <Button className="header__btn">
                                        <img className="header__btn-img" src={telegram} alt="Telegram"/>
                                    </Button>
                                </a>
                                <a href="mailto:a.nasstya@mail.ru">
                                    <Button className="header__btn">
                                        <img className="header__btn-img" src={mail} alt="Mail"/>
                                    </Button>
                                </a>
                                <a href="https://github.com/anassstya?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <Button className="header__btn">
                                        <img className="header__btn-img" src={github} alt="GitHub"/>
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <svg className="header__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#ff6b6b">
                            <rect x="11" y="4" width="2" height="10" rx="1" />
                            <path d="M12 20c-.25 0-.5-.1-.7-.3l-6-6a1 1 0 0 1 1.4-1.4L12 17.1l5.3-4.8a1 1 0 0 1 1.4 1.4l-6 6c-.2.2-.45.3-.7.3z"/>
                        </svg>
                    </Col>
                </Row>
            </Container>

        </header>
    )
}