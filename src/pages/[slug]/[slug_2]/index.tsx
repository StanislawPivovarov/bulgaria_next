import { Row, Col, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import style from './Product.module.scss'
import product from '@/assets/product/Frame 34189.png'
import image from '@/assets/CardPic.jpeg'
import todat from '@/assets/product/todat.png'
import back from '@/assets/background/427d5d07b90ff63bded756568f027851.png'
import ReactPlayer from 'react-player'
import Markdown from "react-markdown";
import { useParams } from "next/navigation";
import Image from "next/image";
import PrimaryHeader from "@/ components/PrimaryHeader";
import Advantages from "@/ components/Advantages";
import getProductsByLink from "@/api/getProductsByLink/getProductsByLink";
import getCategories from "@/api/getCategories/getCategories";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";


const Product = ({ data }: any) => {

 const [loading, setLoading] = useState(true);
 useEffect(() => {
  setLoading(false);
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }


 return (
  <>
   <Head>
    <title>{data?.name}</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
   </Head>
   <div className={style.back}>
    <Image width={500} height={500} src={back} className={style.back_img} alt="" />
    <Row justify={'center'} style={{ paddingBottom: 50 }}>
     <Col xs={24} lg={20}>
      <div className={style.content}>
       <h2 className={style.header}>{data?.name}</h2>
       <div className={style.head_content}>
        <Image width={500} height={500} className={style.cover} src={product} alt="" />
        <div className={style.description}>
         <Markdown>
          {data?.description}
         </Markdown>
        </div>
       </div>


       <PrimaryHeader className={style.blue_header} header="Примеры наших работ" />

       <div className="images">
        <div className={style.first_line} >
         <div className="big">
          <div>
           <Image width={500} height={500} src={image} className={style.img_big} alt="" />
          </div>
         </div>
         <div className={style.mini}>
          <div className={style.first}>
           <div className={style.img_wrapper}>
            <Image width={500} height={500} src={image} className={style.img_big} alt="" />
           </div>
           <div className={style.img_wrapper}>
            <Image width={500} height={500} src={image} className={style.img_big} alt="" />
           </div>
          </div>
          <div className={style.first}>
           <div className={style.img_wrapper}>
            <Image width={500} height={500} src={image} className={style.img_big} alt="" />
           </div>
           <div className={style.img_wrapper}>
            <Image width={500} height={500} src={image} className={style.img_big} alt="" />
           </div>
          </div>
         </div>

        </div>

       </div>

       <PrimaryHeader className={style.blue_header} header="Преимущества" />
       <Advantages />
       <PrimaryHeader className={style.blue_header} header="Особенности производства" />
       <div className={style.video_content}>
        <div className={style.player}>

         <ReactPlayer
          url={data?.video}
          width={"100%"}
          height={"100%"}
         />
        </div>

        <div className={style.video_description}>
         <Markdown>{data?.video_description}</Markdown>
        </div>
       </div>

       <PrimaryHeader className={style.blue_header} header="Модели товара" />
                    <div className={style.product_contents}>

                        {
                            data?.products.data.map((item: {
                                id: null | undefined | string;
                                attributes: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                            }) => (
                                <div key={item.id} className={style.product}>
                                    <Image src={todat} alt="" />
                                    <p className={style.product_name}>{item.attributes.name}</p>
                                    <p className={style.product_description}>{item.attributes.description}</p>

                                </div>
                            ))}


                    </div>

       <div className={style.feedback}>
        <p>
         Заинтересовала наша продукция? Оставьте заявку
         и мы с вами свяжемся.
        </p>
        <Button className={style.request_button} href="#callbackwidget" type="primary">Заказать звонок</Button>
       </div>

      </div>
     </Col>
    </Row>
   </div>
  </>
 );
};
export async function getStaticPaths() {
 try {
  const fetch = await axios.get(`http://127.0.0.1:1337/api/categories?populate=product_categories`);
  const result = fetch.data;

  let paths: any[] = [];

  result.data.forEach((category: any) => {
   const parentSlug = category.attributes.link;
   const productCategories = category.attributes.product_categories.data;

   paths.push(
    ...productCategories.map((sub: any) => ({
     params: {
      slug: parentSlug,                          // вместо id
      slug_2: sub.attributes.slug,               // второй slug
     },
    }))
   );
  });

  return {
   paths,
   fallback: true, // можно false, если нет SSR
  };
 } catch (error) {
  console.error("Error in getStaticPaths:", error);
  throw error;
 }
}

export async function getStaticProps({ params }: any) {
 const { slug, slug_2 } = params;
 try {
  // Найдём подкатегорию по её slug (slug_2)
  const res = await axios.get(
   `http://127.0.0.1:1337/api/product-categories?filters[slug][$eq]=${slug_2}&populate=*`
  );

  const productCategory = res.data.data[0];

  if (!productCategory) {
   return { notFound: true };
  }

  return {
   props: {
    data: productCategory.attributes,
    id: productCategory.id,
   },
  };
 } catch (error) {
  console.error("Error in getStaticProps:", error);
  return { notFound: true };
 }
}


export default Product;