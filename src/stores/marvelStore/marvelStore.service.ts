import axios from 'axios';

import { CharType } from '../../models/charType';

const baseApiUrl = 'https://gateway.marvel.com:443/v1/public/characters?';
//ДЗ по 19-ajax было выполнено уже в прошлой ветке
const service = {
  getSomeData(): Promise<CharType[]> {
    return axios(`${baseApiUrl}limit=50&offset=210&apikey=7b278298a152832e44b30fbabfc1fdbd`).then((response) => response.data.data.results);
  },
};

export default service;
