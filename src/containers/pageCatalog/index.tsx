import {useEffect} from "react";
import {Search, Pagination, CardList} from "./components";
import {useAppSelector, useAppDispatch} from "store/hooks";
import {fetchCards, onPageChange, searchCards} from "store/reducers/cardsReducer";

import './styles.scss';

export const PageCatalogContainer = () => {
    const dispatch = useAppDispatch();
    const {loading, error, showCards, pagination} = useAppSelector((state) => state.cards);

    useEffect(() => {
        dispatch(fetchCards())
    }, [])

    return <div className='page-catalog-container'>
        {
            loading ? <p>Loading...</p> : null
        }

        {
            error ? <p>Error: {error}</p> : null
        }

        {
            !loading && !error ? (
                <>
                    <div className='page-catalog-container__header'>
                        <Pagination currentPage={pagination.currentPage}
                                    totalPages={pagination.totalPages}
                                    onPageChange={(numberPage) => dispatch(onPageChange(numberPage))}
                        />
                        <Search onSearch={(value) => dispatch(searchCards(value))}/>
                    </div>
                    <CardList items={showCards}/>
                    <div className='page-catalog-container__mobile-pagination'>
                        <Pagination currentPage={pagination.currentPage}
                                    totalPages={pagination.totalPages}
                                    onPageChange={(numberPage) => dispatch(onPageChange(numberPage))}
                        />
                    </div>
                </>
            ) : null
        }
        <footer className='page-catalog-container__footer'/>
    </div>
}
