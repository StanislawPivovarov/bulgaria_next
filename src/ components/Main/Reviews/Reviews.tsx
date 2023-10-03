import React, { useRef } from "react";
import style from './Reviews.module.scss'
import { Button, Carousel, Col, Row } from "antd";
import Review from "../Review/Review";
import {LeftOutlined, RightOutlined } from "@ant-design/icons";

const Reviews = () => {
    const ref = useRef<any>()
    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Отзывы клиентов</h2>
                    <div className={style.container}>
                        <Button onClick={() => {ref.current.prev()}} className={style.button}><LeftOutlined className={style.icon} /></Button>
                        <Carousel className={style.carousel} dots={false} ref={ref}>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </Carousel>
                        <Button onClick={() => {ref.current.next()}} className={style.button}><RightOutlined className={style.icon} /></Button>
                    </div>


                </Col>
            </Row>
        </div>
    )
}

export default Reviews;