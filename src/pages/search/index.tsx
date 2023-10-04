import React, { useEffect, useState } from "react";
import getCategories from "../../api/getCategories/getCategories";
import style from './Search.module.scss'
import { Row, Col } from "antd";
import SearchComponent from "@/ components/SearchComponent";
import axios from "axios";

const Search = ({ data }: any) => {
  // const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const data = await getCategories();
  //             setData(data);
  //         } catch (error) {

  //         }
  //     };

  //     fetchData();
  // }, [setData]);
  
  console.log('fefe', data)
  return (
    <div className={style.back}>
      <Row justify={"center"}>
        <Col xs={23} lg={20}>
          <h2 className={style.header}>Результаты поиска</h2>
          <SearchComponent dataFromApi={data.data} />
        </Col>
      </Row>

    </div>
  )
}

export default Search;

export async function getStaticProps() {
  const response = await axios.get(`http://127.0.0.1:1337/api/categories/?populate=*`);
  console.log(response.data.data)
  return {
    props: {
      data: response.data
    },
  };
}
