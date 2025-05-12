// window.onload = function () {
//     const updates = [
//       { name: "Priya", update: "Completed 5 yoga sessions this week" },
//       { name: "Alex", update: "Reached daily steps goal 3 days in a row" },
//       { name: "Sara", update: "Logged 4 meals this week" }
//     ];
  
//     const container = document.getElementById("friends-updates");
  
//     updates.forEach(friend => {
//       const li = document.createElement("li");
//       li.textContent = `${friend.name}: ${friend.update}`;
//       li.style.marginBottom = "8px";
//       li.style.backgroundColor = "#E0D3E8";
//       li.style.padding = "10px";
//       li.style.borderRadius = "10px";
//       li.style.fontSize = "0.9em";
  
//       const btn = document.createElement("button");
//       btn.textContent = "Motivate";
//       btn.className = "small-btn";
//       btn.style.marginTop = "6px";
//       btn.onclick = () => {
//         alert(`You cheered ${friend.name} on!`);
//       };
  
//       li.appendChild(document.createElement("br"));
//       li.appendChild(btn);
//       container.appendChild(li);
//     });
//   };
  