const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}




document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  // Array de imágenes
  const images = [
      "img/qontigo.png",
      "img/dhl.png",
      "img/icbc_argentina.jpg",
      "img/omint.jpg"
  ];

  let currentImageIndex = 0;

  // Agrega las imágenes al contenedor de la galería
  images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.alt = "Nuestros sponsors";
      imgElement.addEventListener("click", () => openModal(image));
      galleryContainer.appendChild(imgElement);
  });

  // Función para abrir el modal con la imagen seleccionada
  function openModal(image) {
      modal.style.display = "block";
      modalImage.src = image;
      currentImageIndex = images.indexOf(image);
  }

  // Función para cerrar el modal
  window.closeModal = function () {
      modal.style.display = "none";
  };

  // Función para cambiar la imagen en el modal
  window.changeImage = function (direction) {
      currentImageIndex += direction;

      if (currentImageIndex < 0) {
          currentImageIndex = images.length - 1;
      } else if (currentImageIndex >= images.length) {
          currentImageIndex = 0;
      }

      modalImage.src = images[currentImageIndex];
  };

  // Cierra el modal si se hace clic fuera de la imagen
  window.onclick = function (event) {
      if (event.target === modal) {
          closeModal();
      }
  };
});



document.addEventListener("DOMContentLoaded", function(event) {
    // Llamar a la función cambiarTexto con el texto del primer botón al cargar la página
    cambiarTexto('texto1');
  
    // Agregar eventos click a los botones
    document.getElementById("boton1").addEventListener("click", function() {
      cambiarTexto('texto1');
    });
    
    document.getElementById("boton2").addEventListener("click", function() {
      cambiarTexto('texto2');
    });
  });
  
  function cambiarTexto(idTexto) {
    var textoNuevo;
    if (idTexto === 'texto1') {
      textoNuevo = "Nuestro objetivo con este programa de formación en pastelería es preparar pasteleros profesionales que respondan a las cualidades y exigencias actuales del mercado en el ámbito de la pastelería (a nivel nacional e internacional). Para cumplir con este objetivo el aprendizaje se basa en un 95% de técnica y práctica absoluta; eje sobre el cual se desarrollan los distintos contenidos curriculares. El propósito es formar profesionales que puedan trabajar operativamente como pasteleros en tiendas de pastelería, restaurantes o cualquier otra empresa del sector gastronómico y alimentario, además de tener las herramientas suficientes para ser un microemprendedor.";
      document.getElementById("boton1").classList.add("seleccionado");
      document.getElementById("boton2").classList.remove("seleccionado");
    } else if (idTexto === 'texto2') {
      textoNuevo = "Nuestro modelo educativo se fundamente en el desarrollo del alumno como protagonista, ya que él mismo irá descubriendo el conocimiento y se irá autosuperando en función a sus competencias y habilidades. Dentro de este proceso educativo los docentes actúan como guías, siendo su principal pilar la comunicación que se genera entre éste y el alumno. Nuestro modelo educativo valora los conocimientos, las habilidades y la actitud de cada alumno.";
      document.getElementById("boton2").classList.add("seleccionado");
      document.getElementById("boton1").classList.remove("seleccionado");
    }
    document.getElementById('texto').textContent = textoNuevo;
  }