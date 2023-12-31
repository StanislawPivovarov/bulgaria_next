
import React, { useEffect, useState } from "react";
import style from './Dicrections.module.scss'
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import { Button, Col, Row } from "antd";
import cover from '../../assets/directions/Frame 34189.png'
import tech from '../../assets/directions/Frame-Е.png'
import getCategoriesByLink from "../../api/getGategoriesByLink/getGategoriesByLink";
import Markdown from "react-markdown";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/ components/Main/ProductCard";
import Link from "next/link";
import { it } from "node:test";
import PrimaryHeader from "@/ components/PrimaryHeader";
import PortfolioCarousel from "@/ components/PortfolioCarousel";
import getCategories from "@/api/getCategories/getCategories";
import axios from "axios";
import Footer from "@/ components/Footer";
import Menu from "@/ components/Menu";
import Head from "next/head";

const Directions = ({ data }: any) => {

  return (
    <>

      <Head>
        <title>{data?.attributes.name}</title>
      </Head>
      <div className={style.back}>
        <Row justify={'center'} style={{ paddingBottom: 50 }}>
          <Col xs={24} lg={20}>
            <div className={style.content}>
              <h2 className={style.header}>{data?.attributes.name}</h2>
              <div className={style.description_position}>
                <Image width={500} height={500} className={style.cover} src={cover} alt="" />
                <div className={style.description}>

                  <Markdown className={style.markdown}>
                    {data?.attributes.description}
                  </Markdown>

                </div>
              </div>

              <PrimaryHeader className={style.tech} header="Используемые технологии" />
              <div className={style.tech_position}>
                <Image width={500} height={500} src={tech} className={style.cover} alt="" />
                <div className={style.description}>

                  <Markdown className={style.markdown}>
                    {data?.attributes.technologies}
                  </Markdown>

                </div>
              </div>
              <PrimaryHeader className={style.tech} header="Виды продукции" />
              <div className={style.products}>
                {
                  data?.attributes.product_categories?.data.map((item: {
                    id: any;
                    attributes: { name: any; description: any };
                  }): any => (
                    <Link key={item.id} className={style.button_to} href={`/${data.id}/${item.id}`}>
                      <ProductCard
                        name={item?.attributes?.name}
                        description={item?.attributes?.description}
                      />
                    </Link>

                  ))
                }
              </div>
            </div>
            <PrimaryHeader className={style.tech} header="Примеры наших работ" />
          </Col>
          <PortfolioCarousel className={style.carousel} />
        </Row>
        <Image width={500} height={500} className={style.back_img} src={back} alt="" />
      </div>
    </>
  )
}

export default Directions;

export async function getStaticPaths() {
  try {
    const fetch = await axios.get(`http://127.0.0.1:1337/api/categories?populate=*`);
    const result = fetch.data;

    const paths = result.data.map((res: { id: any }) => ({
      params: { id: res.id.toString() },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    throw error;
  }
}


export async function getStaticProps({ params }: any) {
  try {
    const { id } = params;

    // Получите данные для конкретного направления
    const response = await axios.get(`http://127.0.0.1:1337/api/categories/${id}/?populate=*`);

    // Возвращаем данные как props для компонента Directions
    return {
      props: {
        data: response.data.data  // <-- Access response.data
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    throw error;
  }
}