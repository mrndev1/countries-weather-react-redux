import React from "react";

// style
import s from './Pagination.module.css';

export default function Pagination ({ pagination, page, pages }) {
    return (
        <div className={s.container}>
            <button className={s.container_item} onClick={() => pagination(page-1)} disabled={page > 1? false : true}>BACK</button>
            <div className={`${s.container_item} flex flex-justify-center flex-align-center`}>{page} - {pages}</div>
            <button className={s.container_item} onClick={() => pagination(page+1)} disabled={page < pages? false : true}>NEXT</button>
        </div>
    )
};