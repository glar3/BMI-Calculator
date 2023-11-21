document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  // const ageInput = document.getElementById("age");
  const bmiDisplay = document.getElementById("BMI");
  const status = document.getElementById("status");
  const calculateButton = document.querySelector(".calculate");

  // const child = "child";
  // const adult = "adult";

  // // const childORAdult = function (age) {
  // //   return age >= 20 ? adult : child;
  // // };

  const bmiStatus = function (calculatedBMI) {
    // if (adult) {
    return calculatedBMI < 16
      ? "Severely Underweight"
      : calculatedBMI >= 16 && calculatedBMI < 18.5
      ? "Underweight"
      : calculatedBMI >= 18.5 && calculatedBMI < 25
      ? "Normal"
      : calculatedBMI >= 25 && calculatedBMI < 30
      ? "Overweight"
      : calculatedBMI >= 30 && calculatedBMI < 35
      ? "Moderately Obese"
      : calculatedBMI >= 35 && calculatedBMI < 40
      ? "Severely Obese"
      : "Morbidly Obese";
    // } else if (child) {
    // }
  };

  const statusColor = function (status) {
    return status === "Severely Underweight" || status === "Underweight"
      ? "#ffff00"
      : status === "Normal"
      ? "#40916c"
      : status === "Overweight"
      ? "#f08700"
      : status === "Moderately Obese" ||
        status === "Severely Obese" ||
        status === "Morbidly Obese"
      ? "#e63946"
      : "#003049";
  };

  const resetButton = function () {
    calculateButton.style.boxShadow =
      "5px 5px 10px #b9b9b9, inset 0px 0px 0px #b9b9b9,-5px -5px 10px #d9d9d9, inset 0px 0px 0px #d9d9d9";
  };

  calculateButton.addEventListener("click", function () {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    if (height !== "" && weight !== "") {
      const bmi = weight / Math.pow(height, 2);
      bmiDisplay.style.fontSize = "30px";
      bmiDisplay.style.color = "#32313d";
      bmiDisplay.textContent = bmi.toFixed(1);
      status.textContent = bmiStatus(bmi);
      status.style.fontSize = "16px";
      status.style.color = statusColor(bmiStatus(bmi));
    } else {
      bmiDisplay.textContent = "Fill out all required fields";
      bmiDisplay.style.textAlign = "center";
      bmiDisplay.style.fontSize = "16px";
      bmiDisplay.style.color = "#800e13";
    }
    calculateButton.style.boxShadow =
      "0px 0px 0px #b9b9b9, inset 5px 5px 10px #b9b9b9,0px 0px 0px #d9d9d9, inset -5px -5px 10px #d9d9d9";

    setTimeout(resetButton, 1000);
  });
});
