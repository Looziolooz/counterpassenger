    let saveEl = document.getElementById("save-el")
    let countEl = document.getElementById("count-el")
    let count = 0

    function increment() {
      count += 1
      countEl.textContent = count
      countEl.classList.add("pulse")
      setTimeout(() => countEl.classList.remove("pulse"), 500)
    }

    function save() {
      if (count === 0) return
      
      let countStr = count + " - "
      if (saveEl.textContent === "No entries yet. Start counting!") {
        saveEl.textContent = countStr
      } else {
        saveEl.textContent += countStr
      }
      
      countEl.textContent = 0
      count = 0
    }
    
    function resetHistory() {
      saveEl.textContent = "No entries yet. Start counting!"
    }

    // Add event listeners
    document.getElementById("increment-btn").addEventListener("click", increment)
    document.getElementById("save-btn").addEventListener("click", save)
    document.getElementById("reset-btn").addEventListener("click", resetHistory)