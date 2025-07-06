
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const resultArea = document.getElementById("results");
  resultArea.innerHTML = "";

  if (keyword.length < 2) return;

  const found = phones.filter((p) => p.model.toLowerCase().includes(keyword));

  found.forEach((p) => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = \`
      <strong>📱 \${p.model}</strong><br/>
      Compatibles : \${p.compatibles.join(", ")}<br/>
      <img src="\${p.image}" alt="\${p.model}" />
    \`;
    resultArea.appendChild(div);
  });
});
    