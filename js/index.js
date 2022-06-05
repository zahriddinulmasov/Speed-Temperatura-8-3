//SPEED

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const elResult = document.querySelector(".form__result");

const elFoot = document.querySelector(".foot-result");
const elBike = document.querySelector(".bike-result");
const elCar = document.querySelector(".car-result");
const elAirplane = document.querySelector(".airplane-result");

const foot = "3.6";
const bike = "20.1";
const car = "70";
const airplane = "800";

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValue = elInput.value;

  if (inputValue > 0) {
    const footTime = inputValue / foot;
    const footHour = parseInt(footTime, 10);
    const footMinute = Math.round(
      (parseFloat(footTime.toFixed(2), 10) - footHour) * 60
    );

    elFoot.textContent = `${footHour} soat-u ${footMinute} minutda`;

    const bikeTime = inputValue / bike;
    const bikeHour = parseInt(bikeTime, 10);
    const bikeMinute = Math.round(
      (parseFloat(bikeTime.toFixed(2), 10) - bikeHour) * 60
    );

    elBike.textContent = `${bikeHour} soat-u ${bikeMinute} minutda`;

    const carTime = inputValue / car;
    const carHour = parseInt(carTime, 10);
    const carMinute = Math.round(
      (parseFloat(carTime.toFixed(2), 10) - carHour) * 60
    );

    elCar.textContent = `${carHour} soat-u ${carMinute} minutda`;

    const airplaneTime = inputValue / airplane;
    const airplaneHour = parseInt(airplaneTime, 10);
    const airplaneMinute = Math.round(
      (parseFloat(airplaneTime.toFixed(2), 10) - airplaneHour) * 60
    );

    elAirplane.textContent = `${airplaneHour} soat-u ${airplaneMinute} minutda`;
  }
});

//TEMPERATURE

const elTemForm = document.querySelector(".tem__form");
const elTemInput = document.querySelector(".tem__input");
const elTemResult = document.querySelector(".tem__result");

elTemForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const temInputValue = elTemInput.value;

  elTemResult.textContent = ((temInputValue * 9) / 5 + 32).toFixed(1);

  console.log(((temInputValue * 9) / 5 + 32).toFixed(1));
});

// SPORT

const elSportForm = document.querySelector(".sport__form");
const elSportInput = document.querySelector(".sport__input");
const elSportCheck1 = document.querySelector(".sport__check1");
const elSportCheck2 = document.querySelector(".sport__check2");

const elYes = document.querySelector(".yes");
const elNo = document.querySelector(".no");

elSportForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const sportInputValue = elSportInput.value;

  if (sportInputValue >= 5 && sportInputValue <= 30) {
    elYes.classList.add("text-primary");
    elNo.classList.remove("text-danger");
  } else {
    elNo.classList.add("text-danger");
    elYes.classList.remove("text-primary");
  }

  if (elSportCheck1.checked) {
    elNo.classList.add("text-danger");
    elYes.classList.remove("text-primary");
  }

  if (elSportCheck2.checked && elSportCheck1.checked) {
    elYes.classList.add("text-primary");
    elNo.classList.remove("text-danger");
  } else if (sportInputValue <= 5 && elSportCheck2.checked) {
    elYes.classList.remove("text-primary");
    elNo.classList.add("text-danger");
  }
});
