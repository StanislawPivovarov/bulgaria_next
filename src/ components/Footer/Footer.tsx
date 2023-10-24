import React, { useEffect, useState } from "react";
import style from './Footer.module.scss'
import { Row, Col, Divider } from "antd";
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import axios from "axios";
import getCategories from "../../api/getCategories/getCategories";
import Link from "next/link";
import {menu} from '../../helpers/categories'
const Footer = () => {

    if (!!menu.length) {

        return (
            <div className={style.footer}>
                <Row justify={'center'}>
                    <Col xs={23} lg={20}>
                        <div className={style.footer_menu}>
                            <div className={style.bottom_menu}>
                                {
                                    menu.map((item) => (
                                        <div key={item.id} className={style.col_content}>
                                            <Link href={`/${item.id}`} className={style.directions}>{item.attributes.name}</Link>
                                            <div className={style.menu_content}>
                                                {
                                                    item.attributes.product_categories.data.map((cat: any) => (
                                                        <Link key={cat.id} href={`/${item.id}/${cat.id}`} className={style.items}>{cat.attributes.name}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                    )

                                }
                            </div>
                        </div>
                        <Divider className={style.divider} />
                        <div className={style.contact_info}>
                            <div className={style.contact_info_links} >
                                <Link className={style.contact_link} href="tel:88432777633">
                                    <AiFillPhone style={{ marginRight: 10 }} />
                                    +7 (843) 277-76-33
                                </Link>
                                <Link className={style.contact_link} href="mailto:1@gbkzn.ru">
                                    <MdEmail style={{ marginRight: 10 }} />
                                    1@gbkzn.ru
                                </Link>
                                <Link className={style.contact_link} href="/#">
                                    <FaMapMarkerAlt style={{ marginRight: 10 }} />
                                    г. Казань, Оренбургский тракт д.20
                                </Link>
                            </div>

                            <p className={style.copyright}>Графика Булгария © 2010 - 2023</p>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
    return (
        <></>
    )
}

export default Footer;
