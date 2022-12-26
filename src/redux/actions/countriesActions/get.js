import axios from "axios";
const URL = 'https://restcountries.com/v3.1/';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_OR_COUNTRIES = 'GET_COUNTRY_OR_COUNTRIES';
export const GET_REGIONS = 'GET_REGIONS';
export const LOADING = 'LOADING';

export const get_all_countries = () => {
    return async dispatch => {
        console.log('hi')
        dispatch({ type: LOADING });
        try {
            let countries = await axios.get(`${URL}/all`);
            dispatch({ type: GET_ALL_COUNTRIES, payload: countries.data });
        } catch (e) { dispatch({ type: GET_ALL_COUNTRIES, payload: [] }); };
    }
};

export const get_specific_location = (input) => {
    return async dispatch => {
        dispatch({ type: LOADING });
        try {
            let country_or_countries = await axios.get(`${URL}/name/${input}`);
            dispatch({ type: GET_COUNTRY_OR_COUNTRIES, payload: country_or_countries.data });
        } catch (e) { dispatch({ type: GET_COUNTRY_OR_COUNTRIES, payload: [] }); };
    }
};

export const get_regions = (countries) => {
    return dispatch => {
        let get_regions = countries.map(country => country.region);
        let regions = get_regions.filter((region, index) => get_regions.indexOf(region) === index);
        dispatch({ type: GET_REGIONS, payload: regions });
    }
};