import React, {useState, useEffect, useCallback} from 'react';
import {DELAY_SEARCH} from "services/constants";

import './styles.scss';

interface SearchProps {
    onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
        },
        []
    );

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            onSearch(query);
        }, DELAY_SEARCH);

        return () => {
            clearTimeout(delayTimer);
        };
    }, [query]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                className="search-form__input"
                placeholder="Search..."
                aria-label="Search"
            />
        </form>
    );
};
