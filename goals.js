function goBack() {
    window.location.href = "Nutrition_Style.html"; 
  }
  
  document.getElementById("goalForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const goals = {
      calories: +document.getElementById("goalCalories").value,
      sugar: +document.getElementById("goalSugar").value,
      fat: +document.getElementById("goalFat").value,
      caffeine: +document.getElementById("goalCaffeine").value,
    };
  
    localStorage.setItem("nutritionGoals", JSON.stringify(goals));
  
    alert("Goals saved successfully!");
  

    setTimeout(() => {
      window.location.href = "Nutrition_Style.html";
    }, 500);
  });
  