import React from "react";
import Marquee from "react-fast-marquee";
import style from './PortfolioCarousel.module.scss'
import test from '@/assets/test.jpeg'
import Image from "next/image";

interface Props {
    className: string;
}

const PortfolioCarousel = (props: Props) => {
    return(
        <Marquee >
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
        <div className={style.image_container}>
            <Image width={500} height={500} className={style.image} alt="" src={test} />
        </div>
    </Marquee>
    )
}

export default PortfolioCarousel;
