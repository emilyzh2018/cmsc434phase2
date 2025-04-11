function goBack() {
    window.location.href = "Nutrition_Style.html";
  }
  
  let logs = [];
  
  window.onload = function () {
    logs = JSON.parse(localStorage.getItem("nutritionLogs") || "[]").reverse();
  
    const mealFilter = document.getElementById("mealFilter");
    mealFilter.addEventListener("change", () => {
      renderEntries(mealFilter.value);
    });
  
    const showAllBtn = document.getElementById("showAllBtn");
    showAllBtn.addEventListener("click", () => {
      renderEntries(mealFilter.value, true); 
    });
  
    renderEntries("All"); 
  };
  
  function renderEntries(filter, showAll = false) {
    const container = document.getElementById("entries-container");
    container.innerHTML = "";
  
    let filteredLogs = logs;
  
    if (filter !== "All") {
      filteredLogs = logs.filter(log => log.meal === filter);
    }
  
    if (filteredLogs.length === 0) {
      container.innerHTML = "<p>No matching entries.</p>";
      return;
    }
  
    const entriesToShow = showAll ? filteredLogs : filteredLogs.slice(0, 5);

  
    entriesToShow.forEach((entry, index) => {
      const div = document.createElement("div");
      div.classList.add("summary-box");

      div.innerHTML = `
        <p><strong>${entry.meal}</strong> - ${entry.item}</p>
        <p>Qty: ${entry.quantity}, Calories: ${entry.calories}</p>
        <p>Sugar: ${entry.sugar}g, Fat: ${entry.fat}g, Caffeine: ${entry.caffeine}mg</p>
        <p style="font-size: 0.8em; color: gray;">Logged at: ${new Date(entry.time).toLocaleString()}</p>
        <button class="delete-btn" onclick="deleteEntry(${logs.length - 1 - index})">Delete</button>
      `;
      container.appendChild(div);
    });
  
   
    const showMoreBtn = document.getElementById("showAllBtn");
    if (!showAll && filteredLogs.length > 10) {
      showMoreBtn.style.display = "inline-block";
    } else {
      showMoreBtn.style.display = "none";
    }
  }
  
  function deleteEntry(originalIndex) {
    if (!confirm("Are you sure you want to delete this entry?")) return;
  
    logs.splice(logs.length - 1 - originalIndex, 1);
    localStorage.setItem("nutritionLogs", JSON.stringify([...logs].reverse()));
    renderEntries(document.getElementById("mealFilter").value);
  }
  