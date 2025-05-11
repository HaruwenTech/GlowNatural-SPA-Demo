document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ver-mas");
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Este es un producto de demostración. Más detalles próximamente.");
    });
  });

  const form = document.getElementById("form-contacto");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    form.reset();
  });
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function abrirModal(producto) {
  const modal = document.getElementById("modal-producto");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");

  if (producto === "serum") {
    titulo.textContent = "Serum Facial Hidratante";
    descripcion.textContent =
      "Ideal para piel seca. Fórmula natural con vitamina C, colágeno y ácido hialurónico.";
  }
  // Agregá más ifs según los productos

  modal.classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal-producto").classList.add("hidden");
}

function abrirModal(producto) {
  const modal = document.getElementById("modal-producto");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");
  const precio = document.getElementById("modal-precio");
  const imagen = document.getElementById("modal-img");
  const btnAgregar = document.getElementById("btn-agregar");

  if (producto === "serum") {
    titulo.textContent = "Serum Facial Hidratante";
    descripcion.textContent =
      "Ideal para piel seca. Fórmula natural con vitamina C, colágeno y ácido hialurónico.";
    precio.textContent = "$4.500";
    imagen.src = "img/productos/serum_facil.jpg";
    imagen.alt = "Serum facial hidratante";
  } else if (producto === "labial") {
    titulo.textContent = "Labial Natural Rosa";
    descripcion.textContent =
      "Color suave, textura cremosa, sin parabenos. Ideal para labios sensibles.";
    precio.textContent = "$3.200";
    imagen.src = "img/productos/labial_rosa.jpg";
    imagen.alt = "Labial rosa natural";
  } else if (producto === "crema") {
    titulo.textContent = "Crema Facial Nutritiva";
    descripcion.textContent =
      "Manteca de karité y aceite de almendras. Nutre profundamente sin dejar grasitud.";
    precio.textContent = "$5.000";
    imagen.src = "img/productos/crema_hidratante.jpg";
    imagen.alt = "Crema facial nutritiva";
  }

  btnAgregar.textContent = "Agregar al carrito";
  btnAgregar.disabled = false;

  modal.classList.remove("hidden");
}
document.getElementById('btn-agregar').addEventListener('click', () => {
  const btn = document.getElementById('btn-agregar');
  btn.textContent = 'Producto agregado';
  btn.disabled = true;
});
