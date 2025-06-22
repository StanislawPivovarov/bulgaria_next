
import React, { useEffect, useState } from "react";
import style from './Dicrections.module.scss'
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import { Button, Col, Menu, Row } from "antd";
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
                    attributes: any;
                  }): any => (
                    <Link key={item.id} className={style.button_to} href={`/${data.attributes.link}/${item.attributes.slug}`}>
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
  const res = await axios.get(`http://127.0.0.1:1337/api/categories?populate=*`);
  const categories = res.data.data;

  const paths = categories.map((cat: any) => ({
    params: { slug: cat.attributes.link },
  }));

  return {
    paths,
    fallback: true, // или false
  };
}


export async function getStaticProps({ params }: any) {
  const { slug } = params;

  try {
    const res = await axios.get(
      `http://127.0.0.1:1337/api/categories?filters[link][$eq]=${slug}&populate=*`
    );

    const category = res.data.data[0];

    if (!category) {
      return { notFound: true };
    }

    return {
      props: {
        data: category, // содержит id и attributes
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { notFound: true };
  }
}
