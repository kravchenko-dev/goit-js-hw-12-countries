function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/`;

    return fetch(url + searchQuery).then((res) => res.json()).catch((err) => console.log(err));
}

export default fetchCountries;
