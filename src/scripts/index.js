const cars = [
  {
    "id": 1,
    "model": "Volkswagen Tiguan",
    "year": 2019,
    "race": "19,855",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "34,888",
    "photo": "../src/img/cars/Volkswagen/Tiguan.png"
  },
  {
    "id": 2,
    "model": "Toyota Highlander XL",
    "year": 2014,
    "race": "69,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "27,875",
    "photo": "../src/img/cars/Toyota/highLinder_XL.png",
    tags: ['new']
  },
  {
    "id": 3,
    "model": "Lexus RX 350 LUXURY",
    "year": 2017,
    "race": "39,850",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "38,775",
    "photo": "../src/img/cars/Lexus/lexus_RX350.png"
  },
  {
    "id": 4,
    "model": "Toyota Highlander LE",
    "year": 2016,
    "race": "104,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "23,728",
    "photo": "../src/img/cars/Toyota/highlinder_LE.png"
  },
  {
    "id": 5,
    "model": "Hyundai Elantra",
    "year": 2017,
    "race": "95,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "11,788",
    "photo": "../src/img/cars/Hyundai/elantra.png"
  },
  {
    "id": 6,
    "model": "Mercedes-Benz GLE",
    "year": 2016,
    "race": "59,800",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "38,878",
    "photo": "../src/img/cars/Mercedes/mersedes-benz.png"
  },
  {
    "id": 7,
    "model": "Toyota Venza",
    "year": 2015,
    "race": "99,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "18,620",
    "photo": "../src/img/cars/Toyota/venza.png"
  },
  {
    "id": 8,
    "model": "Lexus RX 350 F-SPORT",
    "year": 2016,
    "race": "86,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "34,888",
    "photo": "../src/img/cars/Lexus/x-sport.png",
    tags: ['new']
  },
  {
    "id": 9,
    "model": "Volkswagen Tiguan",
    "year": 2019,
    "race": "19,855",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "34,888",
    "photo": "../src/img/cars/Volkswagen/Tiguan.png"
  },
  {
    "id": 10,
    "model": "Toyota Highlander XL",
    "year": 2014,
    "race": "69,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "27,875",
    "photo": "../src/img/cars/Toyota/highLinder_XL.png"
  },
  {
    "id": 11,
    "model": "Lexus RX 350 LUXURY",
    "year": 2017,
    "race": "39,850",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "38,775",
    "photo": "../src/img/cars/Lexus/lexus_RX350.png"
  },
  {
    "id": 12,
    "model": "Toyota Highlander LE",
    "year": 2016,
    "race": "104,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "23,728",
    "photo": "../src/img/cars/Toyota/highlinder_LE.png"
  },
  {
    "id": 13,
    "model": "Volkswagen Tiguan",
    "year": 2019,
    "race": "19,855",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "34,888",
    "photo": "../src/img/cars/Volkswagen/Tiguan.png",
    tags: ['new']
  },
  {
    "id": 14,
    "model": "Toyota Highlander XL",
    "year": 2014,
    "race": "69,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "27,875",
    "photo": "../src/img/cars/Toyota/highLinder_XL.png"
  },
  {
    "id": 15,
    "model": "Lexus RX 350 LUXURY",
    "year": 2017,
    "race": "39,850",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "38,775",
    "photo": "../src/img/cars/Lexus/lexus_RX350.png"
  },
  {
    "id": 16,
    "model": "Toyota Highlander LE",
    "year": 2016,
    "race": "104,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "23,728",
    "photo": "../src/img/cars/Toyota/highlinder_LE.png"
  },
  {
    "id": 17,
    "model": "Hyundai Elantra",
    "year": 2017,
    "race": "95,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "11,788",
    "photo": "../src/img/cars/Hyundai/elantra.png"
  },
  {
    "id": 18,
    "model": "Mercedes-Benz GLE",
    "year": 2016,
    "race": "59,800",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "38,878",
    "photo": "../src/img/cars/Mercedes/mersedes-benz.png"
  },
  {
    "id": 19,
    "model": "Toyota Venza",
    "year": 2015,
    "race": "99,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "18,620",
    "photo": "../src/img/cars/Toyota/venza.png"
  },
  {
    "id": 20,
    "model": "Lexus RX 350 F-SPORT",
    "year": 2016,
    "race": "86,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "34,888",
    "photo": "../src/img/cars/Lexus/x-sport.png",
    tags: ['new']
  },
  {
    "id": 21,
    "model": "Volkswagen Tiguan",
    "year": 2019,
    "race": "19,855",
    "transmission": "Automatic",
    "engines": "Diesel",
    "price": "34,888",
    "photo": "../src/img/cars/Volkswagen/Tiguan.png",
    tags: ['new']
  },
  {
    "id": 22,
    "model": "Toyota Highlander XL",
    "year": 2014,
    "race": "69,000",
    "transmission": "Automatic",
    "engines": "Gas",
    "price": "27,875",
    "photo": "../src/img/cars/Toyota/highLinder_XL.png",
    tags: ['sold']
  }
];

// Showing menu - mobile and tablet

const hamburger = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.menu--mobile');
const closeMenuBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

closeMenuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100%)';
});

function getCard({model, year, race, transmission, engines, price, photo, tags = []}) {
  const classes = tags.join(' ');
  return `<div class="custom-card ${classes} card p-0 mb-4 me-sm-4 rounded-0 shadow-sm" style="width: 18rem;">
  <img src="${photo}" class="card-img-top rounded-0" alt="${model}">
  <div class="tag-new d-flex justify-content-center align-items-center">New</div>
  <div></div>
  <div class="card-body pb-4">
    <div class="d-flex mb-2">
      <span class="custom-card__year me-2">${year}</span>
      <h5 class="card-title custom-card__title">${model}</h5>
    </div>
    <div class="d-flex align-items-center">
      <span class="d-block custom-card__description mr-2">${race} km</span>
      <span class="d-block custom-card__description mr-2">${transmission}</span>
      <span class="d-block custom-card__description mr-2">${engines}</span>
    </div>
    <span class="custom-card__price d-block mt-4">$${price}</span>
  </div>
</div>`
}

const yearSelect = document.querySelector('#year-select');
const modelSelect = document.querySelector('#model-select');

function getFilteredCars() {
  let filtered = [...cars];

  console.log({
    'year select value': yearSelect.value,
    'model select value': modelSelect.value
  });
  
  if(yearSelect.value) {
    filtered = filtered.filter(({year}) => year === +yearSelect.value);
  }

  if(modelSelect.value) {
    filtered = filtered.filter(({model}) => model === modelSelect.value);
  }

  console.log('filtered cards', filtered);

  return filtered;
}

function fillSelect(select, field) {
  const set = new Set();
  cars.forEach((car) => {
    set.add(car[field]);
  });

  set.forEach((value) => {
    select.innerHTML += `<option value="${value}">${value}</option>`;
  });
}

fillSelect(yearSelect, 'year');
fillSelect(modelSelect, 'model');

function renderCards() {
  console.log('rendering cards... fuck yourself!');
  const carsList = document.querySelector('#cars-list');
  carsList.innerHTML = '';
  getFilteredCars().forEach((car) => carsList.innerHTML += getCard(car));
}

renderCards();

yearSelect.addEventListener('change', renderCards);
modelSelect.addEventListener('change', renderCards);

// Validating email and changing input border color and showing icon  

const email = document.querySelector('#email');
const iconSuccess = document.querySelector('.subscription__icon-success');
const iconError = document.querySelector('.subscription__icon-error');
const errorText = document.querySelector('.subscription__error-text');
const btnSubscribe = document.querySelector('.btn--subscribe');

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
  if(email.value.match(regExp)) {
    email.style.borderColor = '#507a36';
    iconError.style.display = 'none';
    iconSuccess.style.display = 'block';
    errorText.style.display = 'none';
  } else {
    email.style.borderColor = '#ff2307';
    iconError.style.display = 'block';
    iconSuccess.style.display = 'none';
    errorText.style.display = 'block';
  }
}

email.addEventListener('keyup', check);