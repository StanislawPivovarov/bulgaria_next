import React from "react";
import top from '../../../assets/review/top.svg'
import bottom from '../../../assets/review/bottom.svg'
import style from './Review.module.scss'
import {Rate } from "antd";
import Image from "next/image";
const Review = () => {
    return (
        <div>

            <div className={style.review}>
                {/* <Avatar className={style.icon} icon={<UserOutlined />} /> */}
                <div className={style.top_content_right_bottom}>
                    <div className={style.top_content_right}>
                        <div className={style.top_content}>
                            <Image className={style.top} src={top} alt="" />
                            <div className={style.content}>
                                <Rate className={style.rate} disabled defaultValue={3}/>
                                <p className={style.review_description}>Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю.</p>
                                <p className={style.reviewer}>Юрий</p>
                                <p className={style.date}>г. Казань, 24.02.2019 г.</p>
                            </div>
                        </div>
                        <div className={style.right_angle}>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <Image unoptimized  className={style.top} src={bottom} alt="" />
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Review;
