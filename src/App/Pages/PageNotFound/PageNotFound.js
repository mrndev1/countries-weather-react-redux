import React from "react";
import { Link } from "react-router-dom";

// style
import s from './PageNotFound.module.css';

export default function PageNotFound () {
    return (
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.container_item}>PAGE NOT FOUND</div>
                <div className={s.container_item}>It seems that you went of road...</div>
                <Link to='/' className={s.container_item}>Let's go back</Link>
            </div>
        </div>
    )
};