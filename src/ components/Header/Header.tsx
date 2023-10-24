import React, { useState } from "react";
import style from './Header.module.scss'
import { Button, Col, Divider, Drawer, Row } from "antd";
import logo from '../../assets/logo.svg'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.header}>
            <Row style={{ height: "100%" }} justify={'center'}>
                <Col xs={22} lg={20}>
                    <div className={style.header_content}>
                        <div className={style.logo_content}>
                            <Link className={style.logo} href="/" type="link">
                            <Image  className={style.logo} src={logo} alt="logo" />
                            </Link>
 
                            <Button type="link" onClick={showDrawer} className={style.menu_button}><MenuOutlined style={{ fontSize: 20 }} /></Button>
                        </div>

                        <div>
                            <ul className={style.contact_ul}>
                                <li className={style.contact_li}>
                                    <Link className={style.contact_link} href="tel:88432777633">
                                        <AiFillPhone style={{ marginRight: 10 }} />
                                        +7 (843) 277-76-33
                                    </Link>
                                </li>
                                <li className={style.contact_li}>
                                    <Link className={style.contact_link} href="mailto:1@gbkzn.ru">
                                        <MdEmail style={{ marginRight: 10 }} />
                                        1@gbkzn.ru
                                    </Link>
                                </li>
                                <li className={style.contact_li}>
                                    <Link className={style.contact_link} href="/#">
                                        <FaMapMarkerAlt style={{ marginRight: 10 }} />
                                        г. Казань, Оренбургский тракт д.20
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
            <Drawer title="Меню" height={"100vh"} placement="top" onClose={onClose} open={open}>
                <div className={style.drawer_content}>
                    <Link onClick={()=> setOpen(false)} href="/search" type="link">Поиск</Link>
                    <Divider style={{ background: "transparent", margin: "8px 0" }} />
                    <Link onClick={()=> setOpen(false)} href="/sales" type="link">Акции</Link>
                    <Link onClick={()=> setOpen(false)} href="/portfolio" type="link">Портфолио</Link>
                    <Link onClick={()=> setOpen(false)} href="/reviews" type="link">Отзывы</Link>
                    <Link onClick={()=> setOpen(false)} href="/about" type="link">О нас</Link>
                    <Link onClick={()=> setOpen(false)} href="/contacts" type="link">Контакты</Link>
                    <Link onClick={()=> setOpen(false)} href="/glossary"type="link">Словарь</Link>
                    <Divider style={{ background: "transparent", margin: "8px 0" }} />
                    <Link onClick={()=> setOpen(false)} href="/1" type="link">Печати и штампы</Link>
                    <Link onClick={()=> setOpen(false)} href="/2" type="link">Лазерная гравировка</Link>
                    <Link onClick={()=> setOpen(false)} href="/3"type="link">Полиграфия</Link>
                    <Link onClick={()=> setOpen(false)} href="/4" type="link">Собственное производство</Link>
                </div>
            </Drawer>

        </div>
    )
}

export default Header;
