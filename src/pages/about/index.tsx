import { Row, Col } from "antd";
import React from "react";
import style from './About.module.scss'
import logo from '../../assets/logoBig.png'
import Partners from "@/ components/Main/Partners";
import PortfolioMain from "@/ components/Main/PortfolioMain";
import Image from "next/image";
import test from "@/assets/test_partners.png"

const About = () => {
    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={24} lg={20}>
                    <h2 className={style.header}>О компании</h2>
                    <div className={style.about_wrapper}>
                        <Image width={500} height={500} className={style.logo} src={logo} alt="logo" />
                        <div className={style.about}>
                            <p>
                                Основной вид деятельности компании Графика Булгария – качественная реклама в Казани, ее производство, установка, а также создание новых площадок для вашего рекламного материала. За 23 года успешной работы наши специалисты накопили громадный опыт по изготовлению качественных печатей и штампов любой степени сложности.
                            </p>
                            <p>
                                В своей работе мы учитываем, что печатная продукция, как и логотипы, товарные знаки и т.п. кроме функционального назначения служат визитной карточкой любой организации, поэтому при соблюдении общепринятых стандартов они должны быть особыми, неповторимыми, иметь отличающиеся детали, фиксирующие внимание заказчиков, поставщиков, должностных лиц, официальных государственных и общественных структур.
                            </p>
                            <p>
                                Вторым направлением нашей работы является изготовление интерьерной рекламы. Она выпускается в различных размерах, формах, цветах и стилях, начиная от классических строго деловых – до корпоративных и авангардных.
                            </p>
                        </div>
                    </div>


                    <h2 className={style.header_partners}>Наши партнеры</h2>
                </Col>

            <Row justify={'center'}>
                <Col xs={22} lg={20}>
                    <div className={style.grid}>
                        <Image unoptimized  className={style.image} src={test} alt="" />
                        <Image unoptimized  className={style.image} src={test} alt="" />
                        <Image unoptimized className={style.image} src={test} alt="" />
                        <Image unoptimized className={style.image} src={test} alt="" />
                        <Image unoptimized className={style.image} src={test} alt="" />
                        <Image unoptimized className={style.image} src={test} alt="" />
                        <Image unoptimized className={style.image} src={test} alt="" />
                    </div>
                </Col>
            </Row>
                {/* <PortfolioMain /> */}
            </Row>

        </div>
    )
}

export default About;