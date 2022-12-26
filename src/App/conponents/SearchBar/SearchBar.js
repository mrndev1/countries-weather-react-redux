import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// style
import s from './SearchBar.module.css';

// redux
import { get_all_countries, get_specific_location } from '../../../redux/actions/countriesActions/get';
import { get_all_countries_weather, get_specific_weather_location } from '../../../redux/actions/weatherActions/get';


export default function SearchBar () {

    let dispatch = useDispatch();
    let location = useLocation().pathname;
    let [ input, set_input ] = useState('');

    let get_all = () => {
        location === '/Home'? dispatch(get_all_countries())
        : dispatch(get_all_countries_weather());
    };
    let handle_input = (event) => { set_input(event.target.value) };
    let handle_click = () => {
        if (input.length) {
            location === '/Home'? dispatch(get_specific_location(input))
            : dispatch(get_specific_weather_location(input));
        }
        set_input('');
    };

    let cl = useSelector(state => state.countriesReducer.loading);
    let wl = useSelector(state => state.weatherReducer.loading);

    console.log(`cl: ${cl} - wl: ${wl}`)


    return (
        <div className={s.container}>
            <button className={s.container_btn} onClick={get_all}>ALL</button>
            <input className={s.container_item} value={input} onChange={handle_input}/>
            <button className={s.container_btn} onClick={handle_click}>GET</button>
        </div>
    )
};