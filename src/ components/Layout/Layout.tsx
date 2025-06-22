"use client"

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";
import style from './Layout.module.scss'
import { usePathname } from "next/navigation";
import Menu from "../Menu";
const Layout = ({ children }: any, props: any) => {
    const pathname = usePathname()

    return (
        <div style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <Header />
            <Menu />
            <a href="#showchat"></a>
            {children}
            <FloatButton.BackTop className={style.float_button} icon={<UpOutlined className={style.float_button_icon} />} />
            <Footer />
        </div>
    )
}

export default Layout;
