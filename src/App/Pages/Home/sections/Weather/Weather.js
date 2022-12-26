import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import WeatherCards from './WeatherCards/WeatherCards';


export default function Weather () {

    let locations = useSelector(state => state.weatherReducer.countries_weather);

    let [ current_page, set_current_page ] = useState(1);
    let items_per_page = 15;
    
    let page_cant = Math.ceil(locations.length / items_per_page);
    let last_item = items_per_page * current_page;
    let first_item = last_item - items_per_page
    
    let items_to_render = locations.slice(first_item, last_item);

    let pagination = (page) => { set_current_page(page) };
    
    return (
        <WeatherCards
            locations={items_to_render}
            pagination={pagination}
            pages={page_cant}
            page={current_page}
        />
    )
};