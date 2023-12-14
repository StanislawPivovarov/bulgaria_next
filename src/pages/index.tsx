import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { StyleProvider } from '@ant-design/cssinjs'
import styles from '@/styles/Home.module.css'
import { ConfigProvider } from 'antd'
import Partners from '@/ components/Main/Partners'
import PortfolioMain from '@/ components/Main/PortfolioMain'
import ProductMenu from '@/ components/Main/ProductMenu'
import Reviews from '@/ components/Main/Reviews'
import Sales from '@/ components/Main/Sales'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data, portfolio}:any) {
  // console.log(data)
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorPrimary: "#EE771C"
        },
      }}
    >
      <StyleProvider>
        <Sales />
        <ProductMenu fetchedData={data} />
        <PortfolioMain response={portfolio} />
        <Partners />
        <Reviews />
      </StyleProvider>
    </ConfigProvider>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`http://127.0.0.1:1337/api/categories/?populate=*`);
  const responsePortfolio = await axios.get(`http://127.0.0.1:1337/api/portfolios?populate[product_category][populate][0]=direction`)
  const data = response.data.data;
  const portfolio = responsePortfolio.data.data
  return {
    props: {
      data: data,
      portfolio:portfolio
    },
  };
}
