document.addEventListener("DOMContentLoaded", () => {
  const calorieBar = document.getElementById("calorieBar");
  const sugarBar = document.getElementById("sugarBar");
  const fatBar = document.getElementById("fatBar");
  const caffeineBar = document.getElementById("caffeineBar");

  const calorieLabel = document.getElementById("calorieLabel");
  const sugarLabel = document.getElementById("sugarLabel");
  const fatLabel = document.getElementById("fatLabel");
  const caffeineLabel = document.getElementById("caffeineLabel");

  const logs = JSON.parse(localStorage.getItem("nutritionLogs") || "[]");
  const goals = JSON.parse(localStorage.getItem("nutritionGoals") || "{}");

  let totals = {
    calories: 0,
    sugar: 0,
    fat: 0,
    caffeine: 0,
  };

  logs.forEach((entry) => {
    totals.calories += Number(entry.calories) || 0;
    totals.sugar += Number(entry.sugar) || 0;
    totals.fat += Number(entry.fat) || 0;
    totals.caffeine += Number(entry.caffeine) || 0;
  });

  function updateBar(bar, label, value, goal, unit) {
    bar.max = goal || 100;
    bar.value = value;
    label.innerHTML = `${label.textContent.split(":")[0]}: ${value}${unit} / ${goal}${unit}`;
    
    if (value > goal) {
      bar.style.accentColor = "#E94E77";
      bar.parentElement.classList.add("warning");
    } else {
      bar.style.accentColor = "#4A90E2";
      bar.parentElement.classList.remove("warning");
    }
  }

  updateBar(calorieBar, calorieLabel, totals.calories, goals.calories || 1500, "");
  updateBar(sugarBar, sugarLabel, totals.sugar, goals.sugar || 25, "g");
  updateBar(fatBar, fatLabel, totals.fat, goals.fat || 20, "g");
  updateBar(caffeineBar, caffeineLabel, totals.caffeine, goals.caffeine || 300, "mg");
});