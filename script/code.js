// document.getElementById("#clearBtn").addEventListener("click", clear);

function calculateBMI() {
  console.log("reached");
  let weight = document.querySelector("#weight");
  let height = document.querySelector("#height");

  let bmi = eval(weight.value / Math.pow(height.value / 100, 2));

  if (bmi < 18.5) {
    document.querySelector("#result").innerText = "Underweight 😒";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.querySelector("#result").innerText = "Normal weight 😊👌";
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.querySelector("#result").innerText = "Overweight 😒";
  } else {
    document.querySelector("#result").innerText = "Obese 😒😒 ";
  }

  console.log("The value: " + bmi);
}

function reload() {
  // document.getElementById("height").value = "";
  // document.getElementById("weight").value = "";
  window.location.reload();
}
