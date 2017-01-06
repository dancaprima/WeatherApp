import axios from 'axios';

const API_KEY = 'd3bd590ff6984fbfec04dabe7e925c1f';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${API_URL}&q=${city},id`

    const req = axios.get(url)
  

    return {
        type: FETCH_WEATHER,
        payload: req  
    };
}