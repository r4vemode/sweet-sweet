import React, {useRef, useState} from 'react';
import OrderForm from "./forms/order/OrderForm";

const Home = () => {
    const [color, setColor] = useState('black');
    const benefitsRef = useRef(null);
    const catalogRef = useRef(null);
    const galleryRef = useRef(null);

    const handleMouseEnter = () => {
        setColor('white');
    };

    const handleMouseLeave = () => {
        setColor('black');
    };

    const scrollToElement = (event, elementRef) => {
        event.preventDefault()
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div>
            <header className="header">
                <section className="header-s">
                    <div className="container">
                        <nav className={'header__nav-bar'}>
                            <ul className="header-nav__list">
                                <li className="header-nav__item">
                                    <a onClick={(e) => scrollToElement(e, benefitsRef)} href="" className="header-nav__link">О нас</a>
                                </li>
                                <li className="header-nav__item">
                                    <a onClick={(e) => scrollToElement(e, catalogRef)} href="" className="header-nav__link">Каталог</a>
                                </li>
                                <li className="header-nav__item">
                                    <a onClick={(e) => scrollToElement(e, galleryRef)} href="" className="header-nav__link">Галерея</a>
                                </li>
                            </ul>

                            <img className={'logo'} src="/images/logo.png" alt=""/>

                            <ul className="communication-list">
                                <li className="communication-item">
                                    <a href="https://instagram.com/sweets_by_elli?igshid=YzcxN2Q2NzY0OA=="
                                       target={'_blank'} className="communication-link" rel="noreferrer">
                                        <img className={'social-link'} src="/images/insta.jpg" alt=""/>
                                    </a>
                                </li>
                                <li className="communication-item">
                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Хочу+сделать+заказ"
                                       target={'_blank'} className="communication-link" rel="noreferrer">
                                        <img className={'social-link'} src="/images/wts.jpg" alt=""/>
                                    </a>
                                </li>
                                <li className="communication-item">
                                    <div className="communication-container">
                                        <a href="tel:79933189710" className="communication-text__tel"><span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none">
                        <path
                            d="M14.4455 12.5686C13.8247 11.9557 13.0498 11.9557 12.4329 12.5686C11.9624 13.0351 11.4919 13.5017 11.0293 13.9762C10.9028 14.1067 10.796 14.1343 10.6418 14.0473C10.3374 13.8813 10.0132 13.7468 9.72058 13.565C8.35648 12.707 7.21381 11.6038 6.20161 10.3623C5.69947 9.74551 5.25268 9.08521 4.94032 8.34188C4.87706 8.19163 4.88892 8.09278 5.01149 7.97021C5.482 7.51551 5.94065 7.04895 6.40326 6.58239C7.04774 5.93395 7.04774 5.17481 6.39931 4.52241C6.03159 4.15075 5.66388 3.78699 5.29617 3.41532C4.9166 3.03575 4.54098 2.65222 4.15745 2.2766C3.53669 1.67166 2.76172 1.67166 2.14492 2.28056C1.67045 2.74712 1.21575 3.22554 0.733378 3.68419C0.286589 4.10725 0.0612166 4.62522 0.0137699 5.23016C-0.061354 6.21468 0.179833 7.14385 0.519868 8.04929C1.21575 9.92343 2.2754 11.588 3.56041 13.1142C5.29617 15.1782 7.36801 16.8111 9.79175 17.9894C10.883 18.5192 12.0138 18.9264 13.2435 18.9937C14.0896 19.0411 14.825 18.8276 15.4142 18.1673C15.8175 17.7166 16.2722 17.3053 16.6992 16.8744C17.3318 16.2338 17.3358 15.4589 16.7071 14.8263C15.9559 14.0711 15.2007 13.3198 14.4455 12.5686Z"
                            fill="#333333"/>
                        <path
                            d="M13.6905 9.41851L15.1495 9.16942C14.9202 7.82905 14.2876 6.6152 13.3268 5.65045C12.3106 4.6343 11.0256 3.99377 9.6101 3.79608L9.4045 5.26297C10.4997 5.41717 11.4961 5.91141 12.2829 6.69824C13.0263 7.44157 13.5126 8.38259 13.6905 9.41851Z"
                            fill="#333333"/>
                        <path
                            d="M15.9718 3.07613C14.2875 1.39177 12.1563 0.328173 9.80374 0L9.59814 1.46689C11.6304 1.75157 13.473 2.67283 14.928 4.12391C16.3079 5.50382 17.2133 7.24748 17.5415 9.16512L19.0005 8.91603C18.617 6.69394 17.5692 4.67745 15.9718 3.07613Z"
                            fill="#333333"/>
                        </svg>
                    </span> +7 (993) 318‑97‑10</a>
                                        <a href="mailto:Sweets_by_elli@mail.ru"
                                           className="communication-text__mail"><span>
                      <img className={'mail-class'} src="/images/mail.png" alt=""/>
                    </span> Sweets_by_elli@mail.ru</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className="hero-s">
                    <div className="container">
                        <div className="hero__all-container">
                            <div className="hero-container">
                                <p className="hero__season-text">Вкус сезона</p>
                                <ul className="hero__text-list">
                                    <li className="hero__text-item"><h1 className="hero__title-text">Кондитерская
                                        студия <b>«ELLÍ»</b></h1></li>
                                    <li className="hero__text-item">
                                        <p className="hero__text">Приготовим за 3 часа в день заказа. <br/>
                                            Доставка на авто в холодильнике.</p>
                                    </li>
                                </ul>
                                <div className="hero__btn-container">
                                    <a onClick={(e) => scrollToElement(e, catalogRef)} href="" className="hero__btn">Перейти в каталог</a>
                                    <p className="hero__info-text">Более 15 <br/> видов начинок</p>
                                </div>

                            </div>
                            <img className={'hero__img'} src="/images/hero__img.jpg" alt=""/>
                        </div>


                        <div className="arrow">
                            <a onClick={(e) => scrollToElement(e, benefitsRef)} href="" className="header__arrow">
                                <img className={'header__arrow-img'} src="/images/header__arrow.png" alt=""/>
                            </a>
                        </div>

                    </div>
                </section>
            </header>

            <main className="main">
                <section ref={benefitsRef} id={'#benefits'} className="benefits-s">
                    <div className="container">
                        <h2 className="main__title">Почему выбирают нас</h2>
                        <div className="benefits__cards-container">
                            <ul className="benefits__list">
                                <li className="benefits__item">
                                    <img className={'benefits2'} src="/images/benefits2.jpg" alt=""/>
                                    <div className="benefits__card-right">
                                        <h3 className="benefits__card-title">РАБОТАЕМ НА 100% НАТУРАЛЬНЫХ
                                            ПРОДУКТАХ!</h3>
                                        <div className="benefits__card-text-container">
                                            <p className="benefits__card-text-l"><b>На выбор предоставляется свыше 15
                                                потрясающих начинок от
                                                1700₽/кг</b>, дизайн полностью подбирается индивидуально и стоимость
                                                рассчитывается под ваш
                                                бюджет.</p>
                                        </div>

                                    </div>
                                </li>
                                <li className="benefits__item">
                                    <div className="benefits__card-left">
                                        <h3 className="benefits__card-title">ОФОРМИМ ДОСТАВКУ В ЛЮБУЮ ТОЧКУ
                                            КРАСНОДАРА!</h3>
                                        <div className="benefits__card-text-container">
                                            <p className="benefits__card-text"><b>Кондитерская студия «ELLÍ» существует
                                                в сладком мире и радует своих клиентов уже более 3-х лет.</b> Торты на
                                                любое
                                                мероприятие, с поводом и без, подсластим ваше чаепитие, семейный
                                                праздник и
                                                пышный банкет.</p>
                                        </div>
                                    </div>
                                    <img className={'benefits1'} src="/images/benefits1.jpg" alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section ref={catalogRef} id={'#catalog'} className="catalog-s">

                    <div className="container">
                        <h1 className="main__title-mini">Для любых событий и дорогих вам людей</h1>
                        <ul className="catalog__relative-list">
                            <ul className="catalog-list">
                                <li className="catalog-item" id="item1">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img1.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Бенто-торт</h2>
                                                <p className="catalog__text">Мини-торт с кремовым рисунком для 2-3
                                                    гостей</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">1100₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Бенто-торт"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item" id="item2">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img2.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Торт Лев</h2>
                                                <p className="catalog__text">Торт с пряничным львенком и леденцами из
                                                    изомальта</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">4.200₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+лев"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item">
                                    <div className="catalog__card" id="item3">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img3.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Свадебный торт</h2>
                                                <p className="catalog__text">Многоярусный торт с вафельными воланами,
                                                    расписанный вручную кремом с невероятной конструкцией </p>
                                                <div className="price-container">
                                                    <p className="catalog__price">44.000₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Свадебный+торт"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="catalog-list">
                                <li className="catalog-item" id="item4">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img4.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Торт с зайкой</h2>
                                                <p className="catalog__text">Детский торт в праздничной упаковке</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">4.300₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+с+зайкой"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item" id="item5">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img5.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Торт-бомба</h2>
                                                <p className="catalog__text">Торт для юного футболиста сюрпризом
                                                    внутри</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">4.100₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт-бомба"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item" id="item6">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img6.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Медовик в виде цифры</h2>
                                                <p className="catalog__text">Нежный медовый торт для маленькой
                                                    любительницы единорогов и сезонных ягод</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">150 ₽/шт. </p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Медовик+в+виде+цифры"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="catalog-list">
                                <li className="catalog-item" id="item7">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/card-img.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Начинка вишня-шоколад в разрезе</h2>
                                                <p className="catalog__text">Разрез одной из наших начинок с насыщенными
                                                    шоколадными бисквитами, пряной вишней и сливочным кремом</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">1700₽/кг</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовала+Начинка+вишня-шоколад+в+разрезе"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item" id="item8">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img9.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Торт в стиле Гарри Поттера</h2>
                                                <p className="catalog__text">Торт со съедобными фигурками ручной работы
                                                    и акриловым топпером</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">4.800₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+в+стиле+Гарри+Поттера"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="catalog-item" id="item9">
                                    <div className="catalog__card">
                                        <div className="card-inner">
                                            <img className={'catalog-img'} src="/images/catalog-img8.jpg" alt=""/>
                                            <div className="catalog__text-container">
                                                <h2 className="catalog__title">Муссовое сердце</h2>
                                                <p className="catalog__text">Торт-сердце с декором из сезонных ягод,
                                                    покрытый шоколадным велюром</p>
                                                <div className="price-container">
                                                    <p className="catalog__price">2.200₽/шт</p>
                                                    <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовало+Муссовое+серце"
                                                       target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                        сейчас</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </ul>

                        <ul className="catalog__relative-list catalog__relative-list_mobile">
                            <li className="catalog-item" id="item1">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img1.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Бенто-торт</h2>
                                            <p className="catalog__text">Мини-торт с кремовым рисунком для 2-3
                                                гостей</p>
                                            <div className="price-container">
                                                <p className="catalog__price">1100₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Бенто-торт"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item2">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img2.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Торт Лев</h2>
                                            <p className="catalog__text">Торт с пряничным львенком и леденцами из
                                                изомальта</p>
                                            <div className="price-container">
                                                <p className="catalog__price">4.200₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+лев"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item">
                                <div className="catalog__card" id="item3">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img3.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Свадебный торт</h2>
                                            <p className="catalog__text">Многоярусный торт с вафельными воланами,
                                                расписанный вручную кремом с невероятной конструкцией </p>
                                            <div className="price-container">
                                                <p className="catalog__price">44.000₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Свадебный+торт"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item4">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img4.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Торт с зайкой</h2>
                                            <p className="catalog__text">Детский торт в праздничной упаковке</p>
                                            <div className="price-container">
                                                <p className="catalog__price">4.300₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+с+зайкой"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item5">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img5.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Торт-бомба</h2>
                                            <p className="catalog__text">Торт для юного футболиста сюрпризом внутри</p>
                                            <div className="price-container">
                                                <p className="catalog__price">4.100₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт-бомба"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item6">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img6.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Медовик в виде цифры</h2>
                                            <p className="catalog__text">Нежный медовый торт для маленькой любительницы
                                                единорогов и сезонных ягод</p>
                                            <div className="price-container">
                                                <p className="catalog__price">150 ₽/шт. </p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Медовик+в+виде+цифры"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="catalog-item" id="item7">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/card-img.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Начинка вишня-шоколад в разрезе</h2>
                                            <p className="catalog__text">Разрез одной из наших начинок с насыщенными
                                                шоколадными бисквитами, пряной вишней и сливочным кремом </p>
                                            <div className="price-container">
                                                <p className="catalog__price">1700₽/кг</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовала+Начинка+вишня-шоколад+в+разрезе"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item8">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img9.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Торт в стиле Гарри Поттера</h2>
                                            <p className="catalog__text">Торт со съедобными фигурками ручной работы и
                                                акриловым топпером</p>
                                            <div className="price-container">
                                                <p className="catalog__price">4.800₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовал+Торт+в+стиле+Гарри+Поттера"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="catalog-item" id="item9">
                                <div className="catalog__card">
                                    <div className="card-inner">
                                        <img className={'catalog-img'} src="/images/catalog-img8.jpg" alt=""/>
                                        <div className="catalog__text-container">
                                            <h2 className="catalog__title">Муссовое сердце</h2>
                                            <p className="catalog__text">Торт-сердце с декором из сезонных ягод,
                                                покрытый шоколадным велюром</p>
                                            <div className="price-container">
                                                <p className="catalog__price">2.200₽/шт</p>
                                                <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Меня+заинтересовало+Муссовое+серце"
                                                   target={'_blank'} className="catalog__btn" rel="noreferrer">Купить
                                                    сейчас</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </ul>


                        <div className="wts__btn-container">
                            <a href="https://api.whatsapp.com/send/?phone=79933189710&text=Здравствуйте!+Хочу+сделать+заказ"
                               target={"_blank"} className="whatsapp__btn" rel="noreferrer">Быстрый заказ через
                                Whatsapp</a>
                        </div>
                    </div>

                </section>

                <section className="cakes-s">

                    <div className="container">
                        <h1 className="main__title-cakes">Детские торты</h1>
                        <ul className="cakes__list">
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/dt1.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/dt2.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/dt3.jpg" alt=""/>
                            </li>
                        </ul>
                        <h1 className="main__title-cakes">Тематические торты</h1>
                        <ul className="cakes__list">
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/tt1.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/tt2.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/tt3.jpg" alt=""/>
                            </li>
                        </ul>
                        <h1 className="main__title-cakes">Свадебные торты</h1>
                        <ul className="cakes__list">
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/st1.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/st2.jpg" alt=""/>
                            </li>
                            <li className="cakes__item">
                                <img className={'cakes-img'} src="/images/st3.jpg" alt=""/>
                            </li>
                        </ul>

                    </div>
                    <div className="arrow-div">
                        <a href="https://instagram.com/sweets_by_elli?igshid=YzcxN2Q2NzY0OA==" target={'_blank'}
                           className="cakes__btn"
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave} rel="noreferrer">Вся коллекция<span
                            className={'cakes-btn-arrow'}>
                            <svg className={'arrow-right'} xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                 viewBox="0 0 190 306" fill="none">
<path d="M0.649902 267.75L117.95 153L0.649902 35.7L36.3499 0L189.35 153L36.3499 306L0.649902 267.75Z" fill={color}/>
</svg>
                        </span></a>
                    </div>

                </section>
                <section ref={galleryRef} id={"#gallery"} className="gallery-s">
                    <h1 className="main__title-mini">Сделали более 3.000 заказов за 3 года</h1>
                    <p className="gallery-text">Посмотрите фото реальных заказов из нашего instagram</p>
                    <div className="gallery-container">

                        <ul className="gallery-list">
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo2.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo3.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo4.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo5.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo6.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo7.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo8.jpg" alt=""/>
                            </li>
                            <li className="gallery-item">
                                <img className={'gallery-img'} src="/images/photo9.jpg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <section className="footer-s">
                    <div className="footer__cloud-container">

                    </div>
                    <div className="container">
                        <div className="footer__form-container">
                            <div className="footer__form-text-container">
                                <h1 className="footer-title">Чтобы сделать заказ, укажите ваш телефон</h1>
                                <p className="footer-text">Мы свяжемся с вами в течении 15 минут, чтобы уточнить ваши
                                    пожелания</p>
                                <OrderForm />
                            </div>
                        </div>
                        <div className="footer__info-container">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <div className="footer__link-container">
                                        <img src="/images/image6.png" alt=""/>
                                        <a href="mailto:zakazocake@gmail.com" target={'_blank'} className="footer-link"
                                           rel="noreferrer">zakazocake@gmail.com
                                            | <b>«ELLI SWEETS»</b></a>
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="footer__link-container">
                                        <img src="/images/image5.png" alt=""/>
                                        <p className="footer-text">г.Краснодар, ул. Кореновская 1</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Home;
