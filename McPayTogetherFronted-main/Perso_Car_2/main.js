const botones = document.querySelectorAll(".emoji-btn");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    // Deselecciona todos los botones en el mismo bloque
    const parent = btn.parentElement;
    parent.querySelectorAll(".emoji-btn").forEach(b => b.classList.remove("selected"));
    // Selecciona el clicado
    btn.classList.add("selected");
  });
});