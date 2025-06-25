import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import style from './Dictionary.module.scss'
import Head from 'next/head';
import axios from 'axios';
import { LinkOutlined } from '@ant-design/icons';

interface WordData {
  attributes: any
}

interface AllWordsDictionaryProps {
  data: WordData[];
}

const AllWordsDictionary: React.FC<AllWordsDictionaryProps> = ({ data }) => {

  console.log(data)

  const [selectedItem, setSelectedItem] = useState<WordData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWordClick = (wordData: WordData) => {
    console.log(wordData)
    setSelectedItem(wordData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Создаем объект, где каждой букве соответствует массив слов и их определений
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  const wordsByLetter: Record<string, WordData[]> = data?.reduce((result: any, wordData: any) => {
    const firstLetter = wordData.attributes.word[0].toUpperCase();
    result[firstLetter] = result[firstLetter] || [];
    result[firstLetter].push(wordData);
    return result;
  }, {});

  // Сортируем буквы с учетом их юникодных кодов
  const sortedLetters = Object.keys(wordsByLetter).sort(collator.compare);

  return (
    <>
      <Head>
        <title>Словарь</title>
      </Head>
      <div className={style.back}>
        <Row justify="center">
          <Col xs={20} lg={20}>
            <h1 className={style.header}>Словарь</h1>
            <div className={style.wrapper}>
              {sortedLetters.map((letter) => (
                <div className={style.letter_wrapper} key={letter}>
                  <h2 className={style.letter}>{letter}</h2>
                  {wordsByLetter[letter].map((wordData, index) => (
                    <div
                      className={style.word}
                      key={index}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleWordClick(wordData)}
                    >
                      {wordData.attributes.word}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Modal footer={false} open={isModalOpen} onCancel={closeModal}>
              {selectedItem && (
                <div className={style.modal_definition}>
                  <h2>{selectedItem.attributes.word}</h2>
                  <p>{selectedItem.attributes.definition}</p>
                  <div className={style.link_item}>Товар: <Button className={style.item_btn}>{selectedItem.attributes.directions.data[0].attributes.name} <LinkOutlined/></Button></div>
                </div>
              )}
            </Modal>
          </Col>
        </Row>
      </div>
    </>
  );
};

// Пример использования компонента



// Сортируем буквы с учетом их юникодных кодов


const Dictionary = ({ data }: any) => {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  console.log(data)

  return <AllWordsDictionary data={data} />;
};

export default Dictionary;

export async function getStaticProps() {
  const response = await axios.get(`http://127.0.0.1:1337/api/glossaries/?populate=*`);
  return {
    props: {
      data: response.data.data
    }
  }
}