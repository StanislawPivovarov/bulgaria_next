import React, { useEffect, useState } from "react";
import getCategories from "../../api/getCategories/getCategories";
import style from './Search.module.scss'
import { Row, Col } from "antd";
import SearchComponent from "@/ components/SearchComponent";
import axios from "axios";
import Head from "next/head";

const Search = ({ data }: any) => {
  return (
    <>
    <Head>
    <title>Поиск</title>
</Head>
    <div className={style.back}>
      <Row justify={"center"}>
        <Col xs={23} lg={20}>
          <h2 className={style.header}>Результаты поиска</h2>
          <SearchComponent dataFromApi={data.data} />
        </Col>
      </Row>

    </div>
    </>
  )
}

export default Search;

export async function getStaticProps() {
  const response = await axios.get(`http://127.0.0.1:1337/api/categories/?populate=*`);
  return {
    props: {
      data: response.data
    },
  };
}
