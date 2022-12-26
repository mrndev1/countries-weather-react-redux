import { FILTER_BY_REGION } from "../actions/countriesActions/filter";
import { GET_ALL_COUNTRIES, GET_COUNTRY_OR_COUNTRIES, GET_REGIONS, LOADING } from "../actions/countriesActions/get";


let istate = { countries: [], renderCountries: [], regions: [], searched: [], loading: false };
const countriesReducer = (state = istate, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES: return { ...state, countries: action.payload, renderCountries: action.payload, loading: false };
        case GET_COUNTRY_OR_COUNTRIES: return { ...state, renderCountries: action.payload, loading: false };
        case GET_REGIONS: return { ...state, regions: action.payload };
        case FILTER_BY_REGION: return { ...state, renderCountries: action.payload };
        case LOADING: return { ...state, loading: true };
        default: return { ...state };
    }
};
export default countriesReducer;