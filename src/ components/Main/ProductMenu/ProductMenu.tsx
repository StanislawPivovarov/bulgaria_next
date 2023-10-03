import React, { useEffect, useState } from "react";
import style from './ProductMenu.module.scss'
import { Button, Col, Row, Spin } from "antd";
import ProductCard from "../ProductCard";
import getCategories from "../../../api/getCategories/getCategories";

const ProductMenu = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [isData, setIsData] = useState<any>([]);
    const [activeButton, setActiveButton] = useState(0); // Изменено: начальная активная кнопка - ни одна

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getCategories();
                setData(fetchedData);
                setIsData(getRandomCards(fetchedData));
            } catch (error) {
                // Обработка ошибок
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getRandomCards = (categoriesData: any[] | undefined, count = 6) => {
        //@ts-ignore
        const allCards = categoriesData.flatMap(category => category.attributes.product_categories.data);
        const randomCards = [];
        //@ts-ignore
        while (randomCards.length < count && allCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * allCards.length);
            randomCards.push(allCards.splice(randomIndex, 1)[0]);
        }

        return randomCards;
    };

    const showData = (buttonNumber: any) => {
        if (data && data[buttonNumber - 1]) {
        //@ts-ignore
            setIsData(data[buttonNumber - 1]?.attributes.product_categories.data || []);
            setActiveButton(buttonNumber);
        } else {
            setIsData(getRandomCards(data, 6)); // Изменено: отображение рандомных 6 карточек
            setActiveButton(0);
        }
    };

    if (isLoading) {
        return <Spin />;
    }

    // console.log(isData)
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
                        {isData.map((item: any) => (
                            <ProductCard key={item.id} name={item.attributes.name} description={item.attributes.description} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductMenu;