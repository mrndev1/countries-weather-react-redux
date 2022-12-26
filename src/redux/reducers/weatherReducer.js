import { GET_ALL_COUNTRIES_WEATHER, GET_SPECIFIC_WEATHER_LOCATION } from "../actions/weatherActions/get";


let istate = { countries_weather: [] };
const weatherReducer = (state = istate, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES_WEATHER: return { ...state, countries_weather: action.payload };
        case GET_SPECIFIC_WEATHER_LOCATION: return { ...state, countries_weather: action.payload };
        default: return { ...state };
    }
};
export default weatherReducer;