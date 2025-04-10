function goBack() {
  window.location.href = "Nutrition_Style.html";
}

document.getElementById("logForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const entry = {
    meal: document.getElementById("mealType").value,
    item: document.getElementById("foodItem").value,
    quantity: +document.getElementById("quantity").value,
    calories: +document.getElementById("calories").value,
    sugar: +document.getElementById("sugar").value,
    fat: +document.getElementById("fat").value,
    caffeine: +document.getElementById("caffeine").value,
    time: new Date().toISOString()
  };


  let logs = JSON.parse(localStorage.getItem("nutritionLogs") || "[]");


  logs.push(entry);
  localStorage.setItem("nutritionLogs", JSON.stringify(logs));

  alert("Entry Saved!");
  const today = new Date().toISOString().split("T")[0];

  const todayTotalCalories = logs
    .filter(log => log.time.startsWith(today))
    .reduce((sum, log) => sum + log.calories, 0);

  if (todayTotalCalories > 1350) {
    alert("You're nearing or exceeding your daily calorie limit!");
  }


  setTimeout(() => {
    window.location.href = "Nutrition_Style.html";
  }, 500);
});
