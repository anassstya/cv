import {useRef} from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../css/About.scss';
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

export default function About(){
    const aboutRef = useRef<HTMLHeadingElement | null>(null)

    useGSAP(() => {
        if (!aboutRef.current) return;

        const split = SplitText.create(aboutRef.current, { type: "chars, words" });

        split.chars.forEach((char) => {
            const el = char as HTMLElement; // приведение типа
            el.style.cursor = "pointer";

            el.addEventListener("mouseenter", () => {
                gsap.to(el, {
                    color: "#ff6b6b",
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


    return(
        <div className="main" id="about">
            <Container >
                <h2 className="main__name" ref={aboutRef}>Обо мне</h2>
                <Row>
                    <Col sm={6}>
                        <div className="main__block">
                            <div>
                                <h3 className="main__heading">Место проживания</h3>
                                <p className="main__text">Санкт-Петербург</p>
                            </div>
                        </div>
                        <div className="main__block">
                            <div>
                                <h3 className="main__heading">Образование</h3>
                                <p className="main__text"><span  className="main__text-spn">НИУ ИТМО, бакалавриат 2023 - 2027</span></p>
                                <p className="main__text">Факультет технологического менеджмента и инноваций</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="main__block">
                            <div>
                                <h3 className="main__heading">Гражданство</h3>
                                <p className="main__text">Российская Федерация</p>
                            </div>
                        </div>
                        <div className="main__block">
                            <div>
                                <h3 className="main__heading">Курсы</h3>
                                <p className="main__text" > <span  className="main__text-spn">Нетология 2022 - 2024</span></p>
                                <p className="main__text">"Frontend-разработчик с нуля до middle"</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h3 className="main__heading">Хобби</h3>
                    <Row className="justify-content-center flex-wrap gap-3 main__hobbies">
                        <Col xs="auto" className="main__hobbies-item">
                            <p className="main__text">Спорт</p>
                        </Col>
                        <Col xs="auto" className="main__hobbies-item">
                            <p className="main__text">Путешествия</p>
                        </Col>
                        <Col xs="auto" className="main__hobbies-item">
                            <p className="main__text">Съемка видео</p>
                        </Col>
                        <Col xs="auto" className="main__hobbies-item">
                            <p className="main__text">Чтение</p>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <p className="main__text">
                        Меня вдохновляет создавать продукты, которые одинаково хорошо работают и на клиенте, и на сервере.
                        Для меня full-stack — это возможность видеть весь путь создания приложения: от идеи и интерфейса
                        до логики, базы данных и развертывания.
                    </p>

                    <p className="main__text">
                        Я дисциплинированный и ответственный человек: аккуратно подхожу к архитектуре, продумываю структуру проектов
                        и стараюсь писать чистый, понятный код. Мне нравится интегрировать фронтенд и бэкенд так, чтобы всё работало
                        надёжно, быстро и удобно для пользователя.
                    </p>

                    <p className="main__text">
                        Постоянно развиваюсь и изучаю новые технологии. В работе использую JavaScript/TypeScript на фронтенде и Go на бэкенде,
                        а также активно работаю с базами данных и REST API. Full-stack подход помогает мне видеть продукт целиком и создавать
                        продуманные решения от интерфейса до серверной логики.
                    </p>
                </Row>
            </Container>
        </div>

    )
}