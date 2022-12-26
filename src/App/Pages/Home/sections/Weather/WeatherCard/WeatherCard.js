import React from "react";

// style
import s from './WeatherCard.module.css';

export default function WeatherCard ({ location, temp, temp_max, temp_min, icon }) {
    return (
        <div className={s.container}>
                <div className={s.container_item}>
                    <img className={s.container_item_img} src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""/>
                    <div className={s.container_item_txt}>{location}</div>
                </div>

                <div className={s.container_item_txt}>Temperature: {temp}</div>

                <div className={s.container_item}>
                    <div className={s.container_item_txt}>Max: {temp_max}</div>
                    <div className={s.container_item_txt}>Min: {temp_min}</div>
                </div>
        </div>
    )
};