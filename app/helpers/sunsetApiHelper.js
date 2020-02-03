import axios from 'axios';
import { SUNRISE_SUNSET_API } from '../utils/constants';

/**
 * Consume SunsetAPI
 * 
 */
export default class SunsetApiHelper {
    static checkIsDay(coordinates = {}) {
        const { latitude, longitude } = coordinates;
        const url = `${SUNRISE_SUNSET_API}?lat=${latitude}&lng=${longitude}`;
        
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const date = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

        return axios.get(url)
            .then(res => {
                const { sunrise, sunset } = res.data.results;
                const greaterThanSunrise = Date.parse(`${date} ${sunrise}`) < Date.parse(`${date} ${currentHour}`);
                const lowerThanSunset = Date.parse(`${date} ${sunset}`) > Date.parse(`${date} ${currentHour}`);

                if (greaterThanSunrise && lowerThanSunset) {
                    return true;
                }
                return false;
            })
    }
}
