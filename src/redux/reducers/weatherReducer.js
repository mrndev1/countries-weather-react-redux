import { GET_ALL_COUNTRIES_WEATHER, GET_SPECIFIC_WEATHER_LOCATION, LOADING } from "../actions/weatherActions/get";


let istate = { countries_weather: [], loading: false };
const weatherReducer = (state = istate, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES_WEATHER: return { ...state, countries_weather: action.payload, loading: false };
        case GET_SPECIFIC_WEATHER_LOCATION: return { ...state, countries_weather: action.payload, loading: false };
        case LOADING: return { ...state, loading: true }
        default: return { ...state };
    }
};
export default weatherReducer;