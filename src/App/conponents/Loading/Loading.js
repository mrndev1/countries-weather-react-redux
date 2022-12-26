import React from "react";

// style
import s from './Loading.module.css';

// img
import img from '../../../img/loading.gif';

export default function Loading () {
    return <div className={s.container}><img className={s.container_img} src={img} alt="loading"/></div>
};