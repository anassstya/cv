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
                        Меня вдохновляет создавать интерфейсы, которые не просто работают, а приносят удовольствие пользователю.
                        Для меня фронтенд — это не набор технологий, а способ превращать идеи в живые, понятные и красивые решения.
                    </p>

                    <p className="main__text">
                        Считаю себя дисциплинированным и ответственным человеком: умею справляться с трудностями,
                        не боюсь новых технологий — напротив, стремлюсь изучать их и применять на практике.
                        Я внимательна к деталям, стараюсь писать чистый и понятный код, делая акцент на качестве и структуре проекта.
                    </p>

                    <p className="main__text">
                        Быстро обучаюсь новому и умею организовывать свою работу самостоятельно.
                        Постоянно стремлюсь к развитию: сейчас активно изучаю <span className="main__text-spn">Go</span>,
                        чтобы глубже понять серверную часть и перейти в full-stack разработку.
                        Это помогает видеть процесс создания продукта целиком — от архитектуры до работы на сервере.
                    </p>
                </Row>
            </Container>
        </div>

    )
}