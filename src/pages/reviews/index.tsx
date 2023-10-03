import React from "react";
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import { Row, Col } from "antd";
import style from './ClientReviews.module.scss'
import Review from "@/ components/Main/Review";
import Image from "next/image";

const ClientReviews = () => {
    return (
        <>
            <div className={style.back}>
                <Row justify={'center'}>
                    <Col xs={23} lg={20}>
                        <h2 className={style.header}>Отзывы клиентов</h2>
                        <div className={style.component_wrapper}>
                            <div className={style.rev}>
                                <Review />
                            </div>
                            <div className={style.rev}>
                                <Review />
                            </div>
                            <div className={style.rev}>
                                <Review />
                            </div>
                            <div className={style.rev}>
                                <Review />
                            </div>
                            <div className={style.rev}>
                                <Review />
                            </div>
                            <div className={style.rev}>
                                <Review />
                            </div>


                        </div>
                    </Col>
                </Row>



                <Image width={500} height={500} className={style.back_img} src={back} alt="" />
            </div>
        </>
    )
}

export default ClientReviews;