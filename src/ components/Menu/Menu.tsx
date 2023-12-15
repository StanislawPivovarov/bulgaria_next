import React, { useEffect, useState } from "react";
import style from './Menu.module.scss'
import { Button, Col, Dropdown, Input, MenuProps, Row, Menu as Menue } from "antd";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Fuse from "fuse.js";
import getCategories from "../../api/getCategories/getCategories";
import Link from "next/link";
import axios from "axios";
import path from "path";
import {menu} from '../../helpers/categories'



const Menu = () => {
  const [open, setOpen] = useState(false);

  const showSearch = () => {
      setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
  };



  // const [menu, setMenu] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getCategories();
  //       setMenu(data);
  //     } catch (error) {

  //     }
  //   };

  //   fetchData();
  // }, [setMenu]);

  

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link className={style.links} href="/sales">
          Акции
        </Link>
      ),
    },
    // {
    //   key: '2',
    //   label: (
    //     <Link className={style.links} href="/portfolio">
    //       Портфолио
    //     </Link>
    //   ),
    // },
    {
      key: '3',
      label: (
        <Link className={style.links} href="/reviews">
          Отзывы
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link className={style.links} href="/about">
          О нас
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link className={style.links} href="/contacts">
          Контакты
        </Link>
      ),
    },
    {
      key: '6',
      label: (
        <Link className={style.links} href="/glossary">
          Словарь
        </Link>
      ),
    },
  ];

  return (
    <div className={style.menu}>
      <Row style={{ height: "100%" }} justify={'center'}>
        <Col xs={23} lg={23}>
          <div className={style.button_container}>
            <Dropdown overlayStyle={{ borderRadius: 0 }} menu={{ items }}>
              <Button className={style.button} type="link">
                <MenuOutlined /> Меню
              </Button>
            </Dropdown>

            {
              menu.map((items) => {
                const menuItems: MenuProps['items'] = items.attributes.product_categories.data.map((item: any) => {
                  return {
                    key: item.id,
                    label: (
                      <Link href={`/${items.id}/${item.id}`} className={style.main_buttons}>
                        {item.attributes.name}
                      </Link>
                    ),
                  }

                }

                )
                return (
                  <Dropdown key={items.id} menu={{ items: menuItems }}>
                    <Link href={`/${items.id}`} className={style.button} type="link">{items.attributes.name}</Link>
                  </Dropdown>
                )
              }
              )

            }
            <Link href="/search" className={style.button} type="link">
              <SearchOutlined />
              Поиск</Link>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Menu;
