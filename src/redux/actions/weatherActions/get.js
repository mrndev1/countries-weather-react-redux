import axios from "axios";

const url = 'https://api.openweathermap.org/data/2.5/';
const key = '&appid=e550f87a5c33912d17a88e55617881eb';

export const GET_ALL_COUNTRIES_WEATHER = 'GET_ALL_COUNTRIES_WEATHER';
export const GET_SPECIFIC_WEATHER_LOCATION = 'GET_SPECIFIC_WEATHER_LOCATION';
export const LOADING = 'LOADING';


export const get_all_countries_weather = () => {
    return async dispatch => {
        dispatch({ type: LOADING });
        let countries = [
            'argentina', 'chile', 'new zealand', 'england', 'united states',
            'canada', 'australia', 'italia', 'france', 'holand', 'portugal', 'mexico',
            'scottland', 'ireland', 'fiji', 'switserland', 'germany',
            'russia', 'china', 'alaska', 'noruega', 'brasil', 'ukrania', 'croacia', 
        ];

        try {
            let get_location_weather = countries.map((location) => axios.get(`${url}weather?q=${location}${key}`));
            let location_weather = await Promise.all(get_location_weather);
            let locations_weather = location_weather.map((location) => location.data);
            dispatch({ type: GET_ALL_COUNTRIES_WEATHER, payload: locations_weather });
        } catch (e) { dispatch({ type: GET_ALL_COUNTRIES_WEATHER, payload: [] }); }

    }
};

export const get_specific_weather_location = (location) => {
    return async dispatch => {
        dispatch({ type: LOADING });
        try {
            let weather = await axios.get(`${url}weather?q=${location}${key}`);
            dispatch({ type: GET_SPECIFIC_WEATHER_LOCATION, payload: [weather.data] });
        } catch (e) { dispatch({ type: GET_SPECIFIC_WEATHER_LOCATION, payload: [] }); }
    }
};