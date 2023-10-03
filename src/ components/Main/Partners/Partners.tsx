import React from "react";
import style from './Partners.module.scss'
import { Col, Row } from "antd";
import test from '../../../assets/test_partners.png'
import Image from "next/image";

const Partners = () => {
    return(
        <div className={style.back}>
            <h2 className={style.header}>Наши партнеры</h2>
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
        </div>
    )
}

export default Partners;
