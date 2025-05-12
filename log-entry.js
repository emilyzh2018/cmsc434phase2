function goBack() {
  window.location.href = "Nutrition_Style.html";
}

function showCustomAlert(message, callback) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "flex";

  document.querySelector("#customAlert button").onclick = () => {
    closeCustomAlert();
    if (callback) callback();
  };
}

function closeCustomAlert() {
  document.getElementById("customAlert").style.display = "none";
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

  const today = new Date().toISOString().split("T")[0];
  const todayTotalCalories = logs
    .filter(log => log.time.startsWith(today))
    .reduce((sum, log) => sum + log.calories, 0);

  if (todayTotalCalories > 1350) {
    showCustomAlert("You're nearing or exceeding your daily calorie limit!", () => {
      window.location.href = "Nutrition_Style.html";
    });
  } else {
    showCustomAlert("Entry Saved!", () => {
      window.location.href = "Nutrition_Style.html";
    });
  }
});
