import React from "react";

// style
import s from './WeatherCards.module.css';

// components
import Pagination from "../../../../../conponents/Pagination/Pagination";
import SearchBar from "../../../../../conponents/SearchBar/SearchBar";
import SectionLinks from "../../../../../conponents/SectionLinks/SectionLinks";
import WeatherCard from '../WeatherCard/WeatherCard';

export default function WeatherCards ({ locations, pagination, pages, page }) {
    return (
        <section className={s.container}>
            
            <div className={s.list}>
                <Pagination pagination={pagination} page={page} pages={pages}/>
                <SearchBar/>
                <SectionLinks/>
            </div>

            <div className={s.list_cards}>
                {
                    locations.length && locations.map(
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