import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import style from './Dictionary.module.scss'

interface WordData {
    word: string;
    definition: string;
  }
  
  interface AllWordsDictionaryProps {
    data: WordData[];
  }
  
  const AllWordsDictionary: React.FC<AllWordsDictionaryProps> = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState<WordData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleWordClick = (wordData: WordData) => {
      setSelectedItem(wordData);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // Создаем объект, где каждой букве соответствует массив слов и их определений
    const wordsByLetter: Record<string, WordData[]> = data.reduce((result:any, wordData) => {
      const firstLetter = wordData.word[0].toUpperCase();
      result[firstLetter] = result[firstLetter] || [];
      result[firstLetter].push(wordData);
      return result;
    }, {});

    return (
        <div className={style.back}>
          <Row justify="center">
            <Col xs={20} lg={20}>
              <h1 className={style.header}>Словарь</h1>
              <div className={style.wrapper}>
                {Object.entries(wordsByLetter).map(([letter, words]) => (
                  <div className={style.letter_wrapper} key={letter}>
                    <h2 className={style.letter}>{letter}</h2>
                    {words.map((wordData, index) => (
                      <div
                        className={style.word}
                        key={index}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleWordClick(wordData)}
                      >
                        {wordData.word}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
    
              <Modal open={isModalOpen} onCancel={closeModal}>
                {selectedItem && (
                  <div>
                    <h2>{selectedItem.word}</h2>
                    <p>{selectedItem.definition}</p>
                  </div>
                )}
              </Modal>
            </Col>
          </Row>
        </div>
      );
    };

// Пример использования компонента
const wordsData = [
    { word: 'Apple', definition: 'A fruit' },
    { word: 'Airplane', definition: 'A flying vehicle' },
    { word: 'Ant', definition: 'A small insect' },
    { word: 'Banana', definition: 'A fruit' },
    { word: 'Bicycle', definition: 'A two-wheeled vehicle' },
    { word: 'Ball', definition: 'A round object' },
  
];

const Dictionary = () => {
    return <AllWordsDictionary data={wordsData} />;
};

export default Dictionary;
