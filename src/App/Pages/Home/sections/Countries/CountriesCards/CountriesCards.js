import React from "react";

// style
import s from './CountriesCards.module.css';

// components
import Pagination from '../../../../../conponents/Pagination/Pagination';
import SearchBar from "../../../../../conponents/SearchBar/SearchBar";
import SectionLinks from "../../../../../conponents/SectionLinks/SectionLinks";
import CountryCard from '../CountryCard/CountryCard';


export default function CountriesCards ({ countries, pagination, pages, page }) {
    return (
        <section className={s.container}>

            <div className={s.list}>
                <Pagination pagination={pagination} page={page} pages={pages}/>
                <SearchBar/>
                <SectionLinks/>
            </div>

            <div className={s.list_cards}>
                {
                    countries.length && countries.map(
                        (country, index) => {
                            return <CountryCard key={index}
                                name={country.name.official} capital={country.capital}
                                region={country.region} map={country.maps.googleMaps}
                                flag={country.flags.png}
                            />
                        }
                    )
                }
            </div>
        </section>
    )
};