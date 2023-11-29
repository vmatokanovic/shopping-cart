'use strict';

const btnToggleShipping = document.querySelector('.btn--toggle-form');
const btnSignIn = document.querySelector('.sign-in__btn');
const btnToggleForm = document.querySelector('.btn--toggle-form');
const formShippingTax = document.querySelector('.shipping-tax__form ');
const iconPlus = document.querySelector('.plus-icon');
const iconUser = document.querySelector('.user-icon');
const h3 = document.querySelector('.h3-estimate-shipping-tax');
const countriesSelect = document.querySelector('#countries');

///////////////////////////////////////

let formVisible = false;

const toggleForm = function () {
  if (!formVisible) {
    formShippingTax.classList.remove('hidden');
    iconPlus.src = 'img/green-rotated-plus-icon.png';
    h3.style.color = '#008421';
  } else {
    formShippingTax.classList.add('hidden');
    iconPlus.src = 'img/plus-icon.png';
    h3.style.color = '#2f2f2f';
  }
  formVisible = !formVisible;
};

btnToggleShipping.addEventListener('click', toggleForm);

btnSignIn.addEventListener('mouseover', () => {
  iconUser.style.fill = '#e0872c';
});

btnSignIn.addEventListener('mouseout', () => {
  iconUser.style.fill = '#F5F5F5';
});

btnToggleForm.addEventListener('mouseover', () => {
  if (!formVisible) {
    iconPlus.src = 'img/green-plus-icon.png';
  }
});

btnToggleForm.addEventListener('mouseout', () => {
  if (!formVisible) {
    iconPlus.src = 'img/plus-icon.png';
  }
});

const renderCountry = function (data) {
  const html = `
  <option value="${data}">${data}</option>
  `;
  countriesSelect.insertAdjacentHTML('beforeend', html);
};

const getCountryData = function () {
  fetch(`https://restcountries.com/v3.1/all`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      const newData = data.map(value => value.name.common).sort();
      newData.forEach(value => {
        renderCountry(value);
      });
    });
};

getCountryData();
