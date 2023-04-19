import axios from 'axios';

async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,flags,continents');
        const countryData = response.data;

        const countryList = document.getElementById('countriesList');
        const listOutput = countryData.map((country) => {
            const regionColor = getRegionColor(country.continents[0]);
            countryList.innerHTML += `
            <li><img src="${country.flags.png}" alt="country flag"> 
            <span class="${regionColor}">${country.name.common}</span>
            <br>Has a population of ${country.population} people</li>
            `
        })

    } catch (e) {
        console.error(e)
    }
}

void fetchCountries();

function getRegionColor(region) {
    switch (region) {
        case "Europe":
            return "europe";
        case "Asia":
            return "asia";
        case "Africa":
            return "africa";
        case "North America":
            return "northAmerica";
        case "South America":
            return "southAmerica";
        case "Oceania":
            return "oceania";
        default:
            return "";
    }
}



