import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";
import fs from 'node:fs';

const data=loadData();

const season = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
};
const arr=addSeason(data.series, 5, season);
console.log(arr);

const newjson = {
    platform: data.platform,
    series: arr
};const jsonarr=JSON.stringify(newjson,null,2);
fs.writeFileSync(`C:/Users/fadis/OneDrive/Desktop/react-homework/matala2/series-homework/series-updated.json`,jsonarr);