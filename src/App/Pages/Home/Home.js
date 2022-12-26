import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

// style
import s from './Home.module.css';

// components
import Header from '../../conponents/Header/Header';

export default function Home () {
    return (
        <div className={s.container}>
            <Header/>
            <Outlet/>
            {/* more sections */}
        </div>
    )
};