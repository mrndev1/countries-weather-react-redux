
export const FILTER_BY_REGION = 'FILTER_BY_REGION';

export let filter_by_region = (countries, region) => {
    return dispatch => {
        if (region === 'ALL') dispatch({ type: FILTER_BY_REGION, payload: countries })
        else {
            let countries_from_region = countries.filter(country => country.region.toUpperCase() === region);
            dispatch({ type: FILTER_BY_REGION, payload: countries_from_region });
        }
    }
};