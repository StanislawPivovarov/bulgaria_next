import React, { useEffect, useState } from "react";
import style from './Portfolio.module.scss'
import image from '../../assets/CardPic.jpeg'
import { Button } from "antd";
import getPortfolio from "../../api/getPortfolio/getPortfolio";
import PopUp from "@/ components/PopUp";
import Image from "next/image";
import axios from "axios";

const Portfolio = ({data}:any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState<any>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // console.log(modalData)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await getPortfolio();
    //             setData(response);

    //         } catch (error) {

    //         } finally {
    //             setIsLoading(false)
    //         }

    //     };

    //     fetchData();
    // }, []);
    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className={style.back}>
            <h2 className={style.header}>
                Портфолио
            </h2>

            <div className="images">
                <div className={style.first_line} >
                    <div className="big">
                        <Button onClick={() => { setModalData(data[0]); showModal(); }} type="link" className={style.image_container}>
                            <Image width={1000} height={1000} src={data[0].attributes.image} className={style.img_big} alt="" />
                        </Button>
                    </div>
                    <div className={style.mini}>
                        <div className={style.first}>
                            {data.slice(1, 3).map((item: {
                                attributes: any; id: React.Key | null | undefined; imageUrl: string | undefined;
                            }) => (
                                <Button onClick={() => { setModalData(item); showModal(); }} key={item.id} className={style.image_container}>
                                    <Image width={500} height={500} src={item.attributes.image} className={style.img_big} alt="" />
                                </Button>
                            ))}
                        </div>
                        <div className={style.first}>
                            {data.slice(3, 5).map((item: {
                                attributes: any; id: React.Key | null | undefined; imageUrl: string | undefined;
                            }) => (
                                <Button onClick={() => { setModalData(item); showModal(); }} key={item.id} className={style.image_container}>
                                    <Image width={500} height={500} src={item.attributes.image} className={style.img_big} alt="" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={style.all_left}>
                    {data.slice(5).map((item: {
                        attributes: any; id: React.Key | null | undefined; imageUrl: string | undefined;
                    }) => (
                        <Button onClick={() => { setModalData(item); showModal(); }} key={item.id} className={style.image_container}>
                            <Image width={500} height={500} src={item.attributes.image} className={style.img_big} alt="" />
                        </Button>
                    ))}
                </div>
            </div>

            {modalData && (
                <PopUp
                    header={modalData.attributes.name}
                    image={modalData.attributes.image}
                    description={modalData.attributes.description}
                    slug={modalData.attributes.product_category.data.id}
                    category={modalData.attributes.product_category.data.attributes.name}
                    category_id={modalData.attributes.product_category.data.attributes.direction.data.id}
                    product_category_id={modalData.attributes.product_category.data.id}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel} />
            )}
        </div>


    )
}

export default Portfolio;

export async function getStaticProps() {
    const response = await axios.get(`http://127.0.0.1:1337/api/portfolios?populate[product_category][populate][0]=direction`);
    console.log(response.data.data)
    return {
      props: {
        data: response.data.data
      },
    };
  }
  