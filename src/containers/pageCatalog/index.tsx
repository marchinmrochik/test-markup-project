import {useEffect} from "react";
import {Search, Pagination, CardList} from "./components";
import {useAppSelector, useAppDispatch} from "store/hooks";
import {fetchCards, onPageChange, searchCards} from "store/reducers/cardsReducer";

import "./styles.scss";

export const PageCatalogContainer = () => {
    const dispatch = useAppDispatch();
    const {loading, error, showCards, pagination} = useAppSelector((state) => state.cards);

    useEffect(() => {
        dispatch(fetchCards())
    }, [])

    return <article className="page-catalog-container">
        { loading ? <p className="page-catalog-container__text page-catalog-container__text-loading">Loading...</p> : null }

        { error ? <p className="page-catalog-container__text page-catalog-container__text-error">Error: {error}</p> : null }

        {
            !loading && !error ? (
                <>
                    <section className="page-catalog-container__header">
                        <Pagination currentPage={pagination.currentPage}
                                    totalPages={pagination.totalPages}
                                    onPageChange={(numberPage) => dispatch(onPageChange(numberPage))}
                        />
                        <Search onSearch={(value) => dispatch(searchCards(value))}/>
                    </section>
                    <CardList items={showCards}/>
                    <section className="page-catalog-container__mobile-pagination">
                        <Pagination currentPage={pagination.currentPage}
                                    totalPages={pagination.totalPages}
                                    onPageChange={(numberPage) => dispatch(onPageChange(numberPage))}
                        />
                    </section>
                    {
                        !showCards.length ? <p className="page-catalog-container__text page-catalog-container__text-info">Nothing found</p> : null
                    }
                    { showCards.length ? <footer className="page-catalog-container__footer"/> : null }
                </>
            ) : null
        }
    </article>
}
