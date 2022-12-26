import React from "react";

// style
import s from './NotFoundCard.module.css';

// img
import img from '../../../img/duda.png';

export default function NotFoundCard () {
    return (
        <div className={s.container}>
            <img className={s.container_img} src={img} alt='not found'/>
            <div className={s.container_items}>
                <div className={s.container_items_txt}>Sorry!</div>
                <div className={s.container_items_txt}>we could not find what you are looking for</div>
            </div>
        </div>
    )
};