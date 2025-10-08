document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("usuario").value;
      const pass = document.getElementById("clave").value;
      const msg = document.getElementById("mensaje");

      if (user === "cenfo" && pass === "123") {
        msg.textContent = "✅ Bienvenido a Proyecto de Daniel...";
        msg.style.color = "green";
        msg.style.transform = "scale(1.1)";
        setTimeout(() => {
          window.location.href = "landing.html";
        }, 1500);
      } else {
        msg.textContent = "❌ Usuario o clave incorrectos.";
        msg.style.color = "red";
        msg.style.animation = "shake 0.3s";
        setTimeout(() => msg.style.animation = "", 300);
      }
    });
  }
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);
