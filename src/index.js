import fetchCountries from './js/fetchCountries.js';
import countries from './templates/countries.hbs';
import countriesList from './templates/countriesList.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';

const debounce = require('lodash.debounce');

const list = document.querySelector('.list');
const input = document.querySelector('#input');

function countryInput(event) {
    const value = event.target.value;
    if (value) {
        fetchCountries(value).then((data) => {
            if (data.length === 1) {
                list.innerHTML = countries(data[0]);
                return;
            } else if (data.length > 1 && data.length < 11) {
                list.innerHTML = countriesList(data);
                return;
            } else if (data.length >= 11) {
                PNotify.error({
                    text: 'Too many matches found, enter more specific query!',
                    delay: 2000
                });
            }
        });
    }
    list.innerHTML = '';
}

input.addEventListener('input', debounce(countryInput, 500));
