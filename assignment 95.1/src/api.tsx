import axios from "axios";
import type { Show } from "./models/Show";

const BASE_URL = "https://api.tvmaze.com";

// export const searchShowsapi = (query: string) => {
//     return axios
//         .get<{ show: Show }[]>(`${BASE_URL}/search/shows?q=${query}`)
//         .then((response) => {
//             const shows = response.data.map((item) => item.show);
//             const showCastArr = [];
//             for (let i = 0; i < shows.length; i++) {
//                 const showCast = axios
//                     .get(`${BASE_URL}/shows/${shows[i].id}/cast`)
//                     .then((response) => {
//                         const cast = response.data.map(
//                             (item: any) => item.person
//                         );
//                         return { show: shows[i], cast };
//                     });
//                 showCastArr.push(showCast);
//             }
//             return Promise.all(showCastArr);
//         });
// };

export const searchShowsapi = async (query: string) => {
    const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
    const shows = response.data.map((item: any) => item.show);
    const showCastsArr = [];
    for (let i = 0; i < shows.length; i++) {
        showCastsArr.push(getShowCasts(shows[i]));
    }
    console.log(showCastsArr)
    return Promise.all(showCastsArr);
};

export const getShowCasts = async (show: Show) => {
    const castResponse = await axios.get(`${BASE_URL}/shows/${show.id}/cast`);
    const casts = castResponse.data.map((item: any) => item.person);
    return { show, casts };
};

export const loadShowapi = (showid: number) => {
    return axios
        .get(`${BASE_URL}/shows/${showid}`)
        .then((response) => response.data);
};

export const loadShowCastsapi = async (showid: number) => {
    const response = await axios.get(`${BASE_URL}/shows/${showid}/cast`);
    return response.data.map((item: any) => item.person);
};
