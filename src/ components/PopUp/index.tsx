import { Button, Modal } from "antd";
import React, { useState } from "react";
import test from '../../assets/popup/56d9edc0508af5327e71c157f85c3570.jpeg'
import style from './PopUp.module.scss'
import Image from "next/image";

const PopUp = (props:any) => {

    const width = window.innerWidth
    var close
    if (width > 992){
        close = true
    }
    else (
        close = false
    )
    // console.log(close)

    return (
        <div>
            
            <Modal centered className={style.popup} footer={false} open={props.open} onOk={props.onOk} closable={close} onCancel={props.onCancel}>
                <Image width={500} height={500}  src={props.image} className={style.image} alt="" />
                <div className={style.popup_content}>
                    <h1>{props.header}</h1>
                    <p className={style.description}>{props.description}</p>
                    <div className={style.link}>
                        <p>Товар:</p>
                        <Button href={`/${props.category_id}/${props.product_category_id}`} type="default">{props.category}</Button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default PopUp;
