import React from "react";
import style from './Advanages.module.scss'
import kazan from '@/assets/adv/Frame 34172.svg'
import color from '@/assets/adv/Frame 34132.svg'
import image from '@/assets/adv/Frame 34171.svg'
import Image from "next/image";
const Advantages = () => {
    return (
        <div className={style.wrapper}>
            <Image width={400} height={400} src={kazan} alt="" />
            <Image width={400} height={400} src={color} alt="" />
            <Image width={400} height={400} src={image} alt="" />
        </div>
    )
}

export default Advantages;
