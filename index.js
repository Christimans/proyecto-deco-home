import productos from "./productos.js";

const contenedorTarjetas = document.querySelector('#tarjetas-productos');

const generarTarjetasProductos = () => {
  const tarjetasHTML = productos.map((producto) => `
    </div>
    <div class="card-container">
  <div class="card">
    <div class="front">
    <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="back">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>Precio: $${producto.precio.toFixed(2)}</p>
    <button class="add-to-cart-button">Agregar al carrito</button>
    </div>
    <button type="submit" class="hidden"></button>
  </div>
</div>
  `).join('');

  contenedorTarjetas.innerHTML = tarjetasHTML;
};

generarTarjetasProductos();

const navegadores = document.querySelectorAll('.navegador a');
navegadores.forEach(navegador => {
  navegador.addEventListener('click', (e) => {
    e.preventDefault();
    navegadores.forEach(navegador => navegador.classList.remove('active'));
    navegador.classList.add('active');
  });
});