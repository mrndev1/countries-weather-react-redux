import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import CountriesCards from './CountriesCards/CountriesCards';
import { get_regions } from '../../../../../redux/actions/countriesActions/get';


export default function Countries () {

    let dispatch = useDispatch();
    let countries_arr = useSelector(state => state.countriesReducer.countries);
    let countries = useSelector(state => state.countriesReducer.renderCountries);

    let [ current_page, set_current_page ] = useState(1);
    let items_per_page = 8;
    
    let page_cant = Math.ceil(countries.length / items_per_page);
    let last_item = items_per_page * current_page;
    let first_item = last_item - items_per_page
    
    let items_to_render = countries.slice(first_item, last_item);

    let pagination = (page) => { set_current_page(page) };
    useEffect(() => { dispatch(get_regions(countries_arr)) }, [countries_arr]);

    return (
        <CountriesCards
            countries={items_to_render}
            pagination={pagination}
            pages={page_cant}
            page={current_page}
        />
    )
};