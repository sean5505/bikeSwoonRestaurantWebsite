import React from "react";
import style from './Pagination.module.css'

type Props = {
    totalItems: number ,
    itemsPerPage: number,
    currentPage : number, 
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function Pagination({totalItems, itemsPerPage, currentPage, setCurrentPage}: Props) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? style.active : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
