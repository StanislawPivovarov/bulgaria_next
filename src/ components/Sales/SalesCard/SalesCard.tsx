import React from "react";
import style from './SalesCard.module.scss'
import image from '../../../assets/sales/a91e749e34858057eb459fb78a09eef7.png'
import { Button } from "antd";
import Image from 'next/image'

const SalesCard = () => {
    return (
        <div className={style.component}>

            <div className={style.cover}>
                <Image width={500} height={500} className={style.image} src={image} alt="" />
            </div>
            <div className={style.content}>
            <h2 className={style.name}>Открытки от 2 ₽</h2>
            <p className={style.description}>Изготовление открыток к любому празднику быстро и оперативно</p>
            <Button href="#callbackwidget" className={style.button} type="primary">Заказать</Button>
            </div>


        </div>
    )
}

export default SalesCard;
