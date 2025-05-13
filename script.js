window.onload = () => {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("username-display").textContent = savedName;
  }
};

document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value;
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("username-display").textContent = name;
  }
});

document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");

  btn.classList.remove("animate");

  void btn.offsetWidth;

  btn.classList.add("animate");
});
