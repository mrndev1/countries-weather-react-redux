import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

// style
import s from './Home.module.css';

// components
import Header from '../../conponents/Header/Header';
import { get_all_countries } from '../../../redux/actions/countriesActions/get';
import { get_all_countries_weather } from '../../../redux/actions/weatherActions/get';


export default function Home () {

    let dispatch = useDispatch();
    useEffect(
        ()=> {
            dispatch(get_all_countries());
            dispatch(get_all_countries_weather());
    }, []);

    return (
        <div className={s.container}>
            <Header/>
            <Outlet/>
            {/* more sections */}
        </div>
    )
};