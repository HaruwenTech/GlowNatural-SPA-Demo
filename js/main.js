// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar iconos
  lucide.createIcons();

  // Menú móvil
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Botones "Ver más" (data-producto)
  document.querySelectorAll(".abrir-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirModal(btn.getAttribute("data-producto"));
    });
  });

  // Formulario de contacto
  const form = document.getElementById("form-contacto");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    form.reset();
  });
});

function abrirModal(producto) {
  const modal = document.getElementById("modal-producto");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");
  const precio = document.getElementById("modal-precio");
  const imagen = document.getElementById("modal-img");
  const btnAgregar = document.getElementById("btn-agregar");

  switch (producto) {
    case "serum":
      titulo.textContent = "Serum Facial Hidratante";
      descripcion.textContent = "Ideal para piel seca. Fórmula natural con vitamina C, colágeno y ácido hialurónico.";
      precio.textContent = "$4.500";
      imagen.src = "img/productos/serum_facil.jpg";
      imagen.alt = "Serum facial hidratante";
      break;
    case "labial":
      titulo.textContent = "Labial Natural Rosa";
      descripcion.textContent = "Color suave, textura cremosa, sin parabenos. Ideal para labios sensibles.";
      precio.textContent = "$3.200";
      imagen.src = "img/productos/labial_rosa.jpg";
      imagen.alt = "Labial rosa natural";
      break;
    case "crema":
      titulo.textContent = "Crema Facial Nutritiva";
      descripcion.textContent = "Manteca de karité y aceite de almendras. Nutre profundamente sin dejar grasitud.";
      precio.textContent = "$5.000";
      imagen.src = "img/productos/crema_hidratante.jpg";
      imagen.alt = "Crema facial nutritiva";
      break;
    default:
      titulo.textContent = "Producto";
      descripcion.textContent = "Descripción del producto...";
      precio.textContent = "$0.000";
      imagen.src = "";
      imagen.alt = "";
  }

  // Reset botón y contador
  btnAgregar.innerHTML = '<i data-lucide="shopping-cart" class="w-5 h-5"></i><span>Agregar al carrito</span>';
  btnAgregar.disabled = false;
  btnAgregar.classList.remove("bg-green-400","hover:bg-green-500");
  btnAgregar.classList.add("bg-rose-400","hover:bg-rose-500");

  // Mostrar modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", outsideClick);
}

function cerrarModal() {
  const modal = document.getElementById("modal-producto");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  window.removeEventListener("click", outsideClick);
}

function outsideClick(event) {
  const modal = document.getElementById("modal-producto");
  if (event.target === modal) {
    cerrarModal();
  }
}

// Agregar al carrito
document.addEventListener("click", (e) => {
  if (e.target.closest('#btn-agregar')) {
    const btn = e.target.closest('#btn-agregar');
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5"></i><span>Producto agregado</span>';
    btn.disabled = true;
    btn.classList.remove("bg-rose-400","hover:bg-rose-500");
    btn.classList.add("bg-green-400","hover:bg-green-500");
    // Actualizar contador
    const cartBtn = document.querySelector('.shopping-cart + span');
    if (cartBtn) {
      let count = parseInt(cartBtn.textContent.replace(/[\(\)]/g, '')) || 0;
      cartBtn.textContent = `(${count + 1})`;
    }
    // Cerrar después
    setTimeout(cerrarModal, 1500);
  }
});
