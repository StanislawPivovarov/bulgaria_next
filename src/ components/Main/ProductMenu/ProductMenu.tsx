import React, { useEffect, useState } from "react";
import style from './ProductMenu.module.scss'
import { Button, Col, Row, Spin } from "antd";
import ProductCard from "../ProductCard";
import getCategories from "../../../api/getCategories/getCategories";

const ProductMenu = ({ fetchedData }: any) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [isData, setIsData] = useState<any>([]);
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(fetchedData);
                setIsData(getRandomCards(fetchedData));
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getRandomCards = (categoriesData: any[] | undefined, count = 6) => {
        if (!categoriesData) return [];

        // Собираем все карточки, добавляя родительскую категорию
        const allCards = categoriesData.flatMap(category =>
            (category.attributes.product_categories.data || []).map((card: any) => ({
                ...card,
                parentCategory: category.attributes
            }))
        );

        const randomCards = [];
        while (randomCards.length < count && allCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * allCards.length);
            randomCards.push(allCards.splice(randomIndex, 1)[0]);
        }

        return randomCards;
    };

    const showData = (buttonNumber: any) => {
        if (data && data[buttonNumber - 1]) {
            //@ts-ignore
            setIsData(
                //@ts-ignore
                (data[buttonNumber - 1]?.attributes.product_categories.data || []).map((card: any) => ({
                    ...card,
                    //@ts-ignore
                    parentCategory: data[buttonNumber - 1]?.attributes
                }))
            );
            setActiveButton(buttonNumber);
        } else {
            setIsData(getRandomCards(data, 6))
            setActiveButton(0);
        }
    };

    if (isLoading) {
        return <Spin />;
    }
    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Наши услуги и продукция</h2>
                    <div className={style.button_group}>
                        <Button
                            onClick={() => showData(0)}
                            className={style.chip}
                            type={activeButton === 0 ? "primary" : "default"}
                        >
                            Наши услуги и продукция
                        </Button>
                        <Button
                            onClick={() => showData(1)}
                            className={style.chip}
                            type={activeButton === 1 ? "primary" : "default"}
                        >
                            Печати и штампы
                        </Button>
                        <Button
                            onClick={() => showData(2)}
                            className={style.chip}
                            type={activeButton === 2 ? "primary" : "default"}
                        >
                            Лазерная гравировка
                        </Button>
                        <Button
                            onClick={() => showData(3)}
                            className={style.chip}
                            type={activeButton === 3 ? "primary" : "default"}
                        >
                            Полиграфия
                        </Button>
                        <Button
                            onClick={() => showData(4)}
                            className={style.chip}
                            type={activeButton === 4 ? "primary" : "default"}
                        >
                            Собственное производство
                        </Button>
                    </div>

                    <div className={style.cards}>
                        {isData.map((item: any) => {
                            return (
                                <ProductCard data={item} key={item.id} name={item.attributes.name} description={item.attributes.description} link={`${item?.parentCategory?.link}/${item?.attributes?.slug}`} />
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductMenu;