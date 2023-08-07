"use strict";

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};




for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt("Nechi baho berasiz?");


    if (a != null && b != null && a != "" && b != "") {
        seriesDB.series[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}
if (seriesDB.count < 5) {
    console.log("Kam serial ko'ribsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log("Siz classic tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
    console.log("Siz seria;lchi zvezda ekansiz");
} else {
    console.log("Error");
}
console.log(seriesDB);












// const thief = {
//     jacket: "Black",
// };

// // thief["age"] = 20
// const property = "age",
//     value = 30;
// thief[property] = value;

// console.log(thief);



console.log(seriesDB);