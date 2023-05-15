import React from "react";

import './styles.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          onPageChange,
                                                      }) => {
    const handlePageClick = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        if (totalPages === 1) {
            return null
        }

        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
            <li
                key={pageNumber}
                className={`pagination__item ${
                    pageNumber === currentPage ? 'pagination__item--active' : ''
                }`}
                onClick={() => handlePageClick(pageNumber)}
            >
                {pageNumber}
            </li>
        ));
    }


    return (
        <div className="pagination">
            <ul className="pagination__list">{renderPageNumbers()}</ul>
        </div>
    );
};
