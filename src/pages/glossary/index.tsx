import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import style from './Dictionary.module.scss'
import Head from 'next/head';

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
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  const wordsByLetter: Record<string, WordData[]> = data.reduce((result: any, wordData) => {
    const firstLetter = wordData.word[0].toUpperCase();
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
                    {wordData.word}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <Modal footer={false} open={isModalOpen} onCancel={closeModal}>
            {selectedItem && (
              <div className={style.modal_definition}>
                <h2>{selectedItem.word}</h2>
                <p>{selectedItem.definition}</p>
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


const Dictionary = () => {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  const wordsData = [
    { word: 'Печать', definition: 'Процесс передачи изображения на бумагу или другую поверхность с использованием различных методов, таких как офсетная печать, цифровая печать и т. д.    ' },
    { word: 'Цветопередача', definition: 'Процесс достижения точной передачи цветов изображения на печатном материале' },
    { word: 'Разрешение', definition: 'Количество точек на дюйм (DPI), используемое для оценки качества печати и изображения' },
    { word: 'Типография', definition: 'Искусство и наука о создании и распространении текста и изображений на печатных материалах' },
    { word: 'Краска', definition: 'Печатное материал, используемое для нанесения цвета на бумагу или другие поверхности' },
    { word: 'Профиль цвета', definition: 'Спецификация, определяющая, как цвета должны отображаться на разных устройствах и в разных условиях' },
    { word: 'Плоттер', definition: 'Устройство для вывода больших изображений и графики на больших листах бумаги или других материалах' },
    { word: 'Гильотина', definition: 'Оборудование для резки бумаги или картона в нужных размерах' },
    { word: 'Офсетная печать', definition: 'Один из наиболее распространенных методов печати, при котором изображение сначала передается на резиновый барабан, а затем на печатную поверхность' },
    { word: 'Пантоны', definition: 'Система цветовых оттенков, широко используемая в полиграфии для точного определения цветов при печати' },
    { word: 'Брошюровка', definition: 'Процесс создания книги, брошюры или другой публикации путем скрепления отдельных страниц в определенном порядке' },
    { word: 'Ламинирование', definition: 'Процесс покрытия бумажных материалов пленкой для улучшения прочности и внешнего вида' },
];


    return <AllWordsDictionary data={wordsData} />;
};

export default Dictionary;
