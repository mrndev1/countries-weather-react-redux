import React from "react";

// style
import s from './CountryCard.module.css';


export default function CountryCard ({ name, region, capital, flag, map }) {
    return (
        <div className={s.container}>
            <img className={s.container_img} src={flag} alt={`${name} flag`}/>
            <div className={s.container_items}>
                <div className={s.container_items_txt}>{name}</div>
                <div className={s.container_items_txt}>Region: {region}</div>
                <div className={s.container_items_txt}>Capital: {capital}</div>
            </div>
        </div>
    )
};