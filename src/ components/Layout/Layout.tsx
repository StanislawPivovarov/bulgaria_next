import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";
import style from './Layout.module.scss'
const Layout = ({ children }: any, props:any) => {
    return (
        <div style={{ minHeight: '100vh', display: "flex", flexDirection: "column" }}>
            <Header />
            <Menu/>
            <a href="#showchat"></a>
            {children}
            <FloatButton.BackTop className={style.float_button} icon={<UpOutlined className={style.float_button_icon} />} />

            <Footer />
        </div>
    )
}

export default Layout;
