import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// style
import s from './CountriesCards.module.css';

// redux
import { get_all_countries } from "../../../../../../redux/actions/countriesActions/get";

// components
import Pagination from '../../../../../conponents/Pagination/Pagination';
import SearchBar from "../../../../../conponents/SearchBar/SearchBar";
import SectionLinks from "../../../../../conponents/SectionLinks/SectionLinks";
import CountryCard from '../CountryCard/CountryCard';
import NotFoundCard from "../../../../../conponents/NotFoundCard/NotFoundCard";
import Loading from "../../../../../conponents/Loading/Loading";


export default function CountriesCards ({ countries, pagination, pages, page }) {

    let dispatch = useDispatch();
    let loading = useSelector(state => state.countriesReducer.loading);

    useEffect(() => {dispatch(get_all_countries()) }, []);

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
                    : !countries.length? <NotFoundCard/>
                        : countries.map(
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