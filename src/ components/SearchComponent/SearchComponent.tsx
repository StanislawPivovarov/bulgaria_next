import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Button, Spin } from 'antd';
import style from './SearchComponent.module.scss'
import Link from 'next/link';

const   SearchComponent = ({ dataFromApi }: any) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any>([]);
    const [showResults, setShowResults] = useState(false);

    const fuse = new Fuse(dataFromApi, {
        keys: [
            'attributes.name',
            'attributes.description',
            'attributes.productCategories.data.category',
        ],
        includeScore: true,
    });

    const getSuggestions = (value: any) => {
        const results = fuse.search(value);
        return results.map(result => result.item);
    };

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setSearchTerm(value);
        setShowResults(value !== '');
    };

    // console.log(searchResults)

    useEffect(() => {
        const results: any = fuse.search(searchTerm);
        setSearchResults(results.map((result: { item: any; }) => result.item));
    }, [searchTerm, dataFromApi, fuse]);

    const getResultLabel = () => {
        const count = searchResults.length;
        if (count === 1) {
            return 'результат';
        } else if (count > 1 && count < 5) {
            return 'результата';
        } else {
            return 'результатов';
        }
    };

    const Results = () => {
        if (searchResults.length === 0) {
            if (searchTerm === '') {
                return <Spin style={{display: 'block', margin: '0 auto', paddingTop: 30}} />
            }
            else {

                return <p className={style.results_count}>По вашему запросу ничего не найдено. Попробуйте ввести похожие по смыслу слова, чтобы получить лучший результат.</p>
            }
        }
        else {
            return <p className={style.results_count}>Найдено: {searchResults.length} {getResultLabel()}</p>

        }

    }
    return (
        <div>

            <Input
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                className={style.searchBar}
                placeholder="Что хотите напечатать?"
                prefix={<SearchOutlined className={style.prefix} />} suffix={<Button onClick={() => setSearchTerm("")} type="link" ><CloseOutlined className={style.suffix} /></Button>} />

            <p>{Results()}</p>
            {showResults
                && (
                    <ul className={style.results_ul}>
                        {searchResults.map((result: any, index: React.Key | null | undefined) => (
                            <li className={style.results_list} key={index}>
                                <Button type='link' className={style.button} href={`/${result.id}`}>
                                    <div>
                                    <p className={style.result_header}>{result.attributes.name}</p>
                                    </div>
                                </Button>
                                <p className={style.result_content}>{result.attributes.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default SearchComponent;
