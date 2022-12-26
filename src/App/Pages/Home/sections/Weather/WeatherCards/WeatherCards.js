import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// style
import s from './WeatherCards.module.css';

// redux
import { get_all_countries_weather } from "../../../../../../redux/actions/weatherActions/get";

// components
import Loading from '../../../../../conponents/Loading/Loading';
import Pagination from "../../../../../conponents/Pagination/Pagination";
import SearchBar from "../../../../../conponents/SearchBar/SearchBar";
import SectionLinks from "../../../../../conponents/SectionLinks/SectionLinks";
import WeatherCard from '../WeatherCard/WeatherCard';
import NotFoundCard from "../../../../../conponents/NotFoundCard/NotFoundCard";


export default function WeatherCards ({ locations, pagination, pages, page }) {

    let dispatch = useDispatch();
    let loading = useSelector(state => state.weatherReducer.loading);

    useEffect(() => {dispatch(get_all_countries_weather())}, []);

    return (
        <section className={s.container}>
            
            <div className={s.list}>
                <Pagination pagination={pagination} page={page} pages={pages}/>
                <SearchBar/>
                <SectionLinks/>
            </div>

            <div className={s.list_cards}>
                {
                    loading? <Loading/>
                    : !locations.length? <NotFoundCard/>
                        : locations.map(
                            (location, index) => {
                                return <WeatherCard key={index}
                                    location={location.name} temp={location.main.temp}
                                    temp_max={location.main.temp_max} temp_min={location.main.temp_min}
                                    icon={location.weather[0].icon}
                                />
                            }
                        )
                }
            </div>
        </section>
    )
};