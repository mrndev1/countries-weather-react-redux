import React from "react";
import { Link } from "react-router-dom";

// style
import s from './SectionLinks.module.css';

export default function SectionLinks () {
    return (
        <ul className={s.container}>
            <li className={s.container_item}>
                <Link className="link" to='/Home'>COUNTRIES</Link>
            </li>
            <li className={s.container_item}>
                <Link className="link" to='/Home/weather'>WEATHER</Link>
            </li>
        </ul>
    )
};