
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("results");
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    results.innerHTML = "";
    phones.forEach(phone => {
      if (phone.model.toLowerCase().includes(query)) {
        const div = document.createElement("div");
        div.innerHTML = "<strong>" + phone.model + "</strong><br>Compatibles : " + phone.compatible.join(", ");
        results.appendChild(div);
      }
    });
  });
});
