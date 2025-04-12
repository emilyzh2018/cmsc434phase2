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

    const newGoals = {
      calories: parseFloat(calorieInput.value),
      sugar: parseFloat(sugarInput.value),
      fat: parseFloat(fatInput.value),
      caffeine: parseFloat(caffeineInput.value),
    };

    localStorage.setItem("nutritionGoals", JSON.stringify(newGoals));
    alert("Goals saved successfully!");
    window.location.href = "Nutrition_Style.html"; 
  });
});


function goBack() {
  window.location.href = "Nutrition_Style.html";
}
