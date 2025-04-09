
  
  
  window.onload = function () {
    updateNutritionSummary();
  };
  
  function openLogModal() {
    document.getElementById("logModal").style.display = "block";
  }

  function closeLogModal() {
    document.getElementById("logModal").style.display = "none";
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
    closeLogModal();
    checkCalorieWarning(entry.calories);
  });

  function checkCalorieWarning(newCalories) {
    const total = 1012 + newCalories; 
    if (total > 1350) {
      alert("You're nearing your daily calorie limit!");
    }
  }

  window.onload = function () {
    updateNutritionSummary();
  };
  
  function updateNutritionSummary() {
    const goals = JSON.parse(localStorage.getItem("userGoals")) || {
      calories: 1500,
      sugar: 25,
      fat: 3,
      caffeine: 100
    };
  
    const currentIntake = {
      calories: 1012,
      sugar: 20,
      fat: 5,
      caffeine: 183
    };
  
   
    document.querySelector("#calorieLabel").innerText = `Total Calories: ${currentIntake.calories} / ${goals.calories} cal`;
    document.querySelector("#calorieBar").max = goals.calories;
    document.querySelector("#calorieBar").value = currentIntake.calories;
  

    document.querySelector("#sugarLabel").innerText = `Sugar: ${currentIntake.sugar}g / ${goals.sugar}g`;
    document.querySelector("#sugarBar").max = goals.sugar;
    document.querySelector("#sugarBar").value = currentIntake.sugar;
  

    document.querySelector("#fatLabel").innerText = `Saturated Fat: ${currentIntake.fat}g / ${goals.fat}g`;
    document.querySelector("#fatBar").max = goals.fat;
    document.querySelector("#fatBar").value = currentIntake.fat;
  
   
    document.querySelector("#caffeineLabel").innerText = `Caffeine: ${currentIntake.caffeine}mg / ${goals.caffeine}mg`;
    document.querySelector("#caffeineBar").max = goals.caffeine;
    document.querySelector("#caffeineBar").value = currentIntake.caffeine;
  }


  

  

  

