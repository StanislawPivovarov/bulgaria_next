import React from "react";
import style from './PrimaryHeader.module.scss'

interface Props {
    header: string;
    className: string
}

const PrimaryHeader = (props: Props) => {
    return (
        <div className={props.className && style.main}>
            <div className={style.top_content_left}>

                <div className={style.top_content}>
                    <div className={style.top}></div>
                    <div className={style.content}>
                        <h2 className={style.header}>{props.header}</h2>
                    </div>
                    <div className={style.bottom}></div>
                </div>

                <div className={style.right}></div>
            </div>

        </div>
    )

}

export default PrimaryHeader;
