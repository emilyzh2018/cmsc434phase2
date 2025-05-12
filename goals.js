document.addEventListener("DOMContentLoaded", () => {
  const calorieInput = document.getElementById("goalCalories");
  const sugarInput = document.getElementById("goalSugar");
  const fatInput = document.getElementById("goalFat");
  const caffeineInput = document.getElementById("goalCaffeine");

  const savedGoals = JSON.parse(localStorage.getItem("nutritionGoals"));
  if (savedGoals) {
    calorieInput.value = savedGoals.calories || "";
    sugarInput.value = savedGoals.sugar || "";
    fatInput.value = savedGoals.fat || "";
    caffeineInput.value = savedGoals.caffeine || "";
  }

  document.getElementById("goalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const calorie = parseFloat(calorieInput.value);
    const sugar = parseFloat(sugarInput.value);
    const fat = parseFloat(fatInput.value);
    const caffeine = parseFloat(caffeineInput.value);

    if (calorie < 0 || sugar < 0 || fat < 0 || caffeine < 0) {
      showCustomAlert("Please enter only non-negative values.");
      return;
    }

    const newGoals = {
      calories: calorie,
      sugar: sugar,
      fat: fat,
      caffeine: caffeine,
    };

    localStorage.setItem("nutritionGoals", JSON.stringify(newGoals));
    showCustomAlert("Goals saved successfully!");
  });
});

function goBack() {
  window.location.href = "Nutrition_Style.html";
}

function showCustomAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "flex";
}

function closeCustomAlert() {
  document.getElementById("customAlert").style.display = "none";
}
