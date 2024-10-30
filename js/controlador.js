const contenedorProductos = document.getElementById('productos');

catalogo.forEach(prenda => {
    const variantePorDefecto = prenda.caracteristicas[0];

    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    // Contenedor de la imagen
    const imagenDiv = document.createElement('div');
    imagenDiv.classList.add("divImg")
    const image = document.createElement('img');
    image.setAttribute('src', variantePorDefecto.imagen); 
    image.setAttribute('alt', prenda.nombre);
    image.classList.add("imagen")
    imagenDiv.appendChild(image);

    const text = document.createElement('h3')
    text.textContent =  prenda.nombre;

    const textP = document.createElement('p')
    textP.textContent = "$" + prenda.precio;

    // Contenedor de los selectores
    const selectoresDiv = document.createElement('div');
    selectoresDiv.classList.add('divSelect');

    // Selector de color
    const colorSelect = document.createElement('select');
    colorSelect.setAttribute('id', 'color');
    colorSelect.classList.add('selector')

    const coloresUnicos = new Set();
    prenda.caracteristicas.forEach(variante => {
        coloresUnicos.add(variante.color);
    });

    coloresUnicos.forEach(color => {
        const optionColor = document.createElement('option');
        optionColor.setAttribute('value', color);
        optionColor.textContent = color;
        colorSelect.appendChild(optionColor);
    });

    // Selector de talla
    const tallaSelect = document.createElement('select');
    tallaSelect.setAttribute('id', 'talla');
    tallaSelect.classList.add('selector')

    // Función para manejar el cambio de color
    colorSelect.addEventListener('change', () => {
        tallaSelect.innerHTML = '';
        const selectedColor = colorSelect.value;

        const caracteristicasFiltradas = prenda.caracteristicas.filter(variante => variante.color === selectedColor);

        caracteristicasFiltradas.forEach(variante => {
            const optionTalla = document.createElement('option');
            optionTalla.setAttribute('value', variante.talla);
            optionTalla.textContent = variante.talla;
            tallaSelect.appendChild(optionTalla);
        });
    });

    // Disparar el evento de cambio de color para inicializar el select de talla con el primer color
    colorSelect.dispatchEvent(new Event('change'));

    // Boton para agregar al carrito
    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Agregar al carrito';
    botonAgregar.classList.add("agregar");
    botonAgregar.onclick = () => {
        const selectedColor = colorSelect.value;
        const selectedTalla = tallaSelect.value;
        const varianteSeleccionada = prenda.caracteristicas.find(variante => variante.color === selectedColor && variante.talla === selectedTalla);
        agregarAlCarrito(prenda.precio, varianteSeleccionada, prenda.id, varianteSeleccionada.existencias);
    };

    selectoresDiv.appendChild(colorSelect);
    selectoresDiv.appendChild(tallaSelect);
    selectoresDiv.appendChild(botonAgregar);

    productoDiv.appendChild(imagenDiv);
    productoDiv.appendChild(text);
    productoDiv.appendChild(textP);
    productoDiv.appendChild(selectoresDiv);

    contenedorProductos.appendChild(productoDiv);

    //console.log(contenedorProductos)

    colorSelect.addEventListener('change', () => {
        const selectedColor = colorSelect.value;
        const varianteSeleccionada = prenda.caracteristicas.find(variante => variante.color === selectedColor);
        image.setAttribute('src', varianteSeleccionada.imagen);
    });
});


function agregarAlCarrito(precio, variante, idPrenda, existencias) {
    console.log("Se agregó al carrito:", variante, "ID Prenda:", idPrenda, "Existencias", existencias);

    const contenedorCarrito = document.getElementById("carrito");

    const elementosEnCarrito = contenedorCarrito.querySelectorAll('.itemCarrito');
    let elementoExistente = null;

    elementosEnCarrito.forEach(item => {
        const descripcion = item.querySelector('.descripcion').textContent;
        const cantidadInput = item.querySelector('.cantidad');
        const cantidad = parseInt(cantidadInput.value);

        if (descripcion === `Color: ${variante.color} \nTalla: ${variante.talla}`) {
            elementoExistente = item;

            const nuevaCantidad = cantidad + 1;
            if (nuevaCantidad <= existencias) { // Validar existencias
                const nuevoPrecio = nuevaCantidad * precio;
                cantidadInput.value = nuevaCantidad;
                item.querySelector('.precio').textContent = `Precio: $${nuevoPrecio.toFixed(2)}`;
            } else {
                alert(`¡No hay suficientes existencias disponibles para agregar de este producto!`);
            }
        }
    });

    if (!elementoExistente) {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('itemCarrito');

        // Imagen
        const imagenCarrito = document.createElement('img');
        imagenCarrito.classList.add('carritoImg');
        imagenCarrito.setAttribute('src', variante.imagen);
        imagenCarrito.classList.add('imagenCar');

        // Descripción
        const descripcionCarrito = document.createElement('div');
        descripcionCarrito.classList.add('descripcion');
        descripcionCarrito.textContent = `Color: ${variante.color} \nTalla: ${variante.talla}`;

        // Cantidad
        const cantidadLabel = document.createElement('label');
        cantidadLabel.textContent = 'Cantidad: ';
        const cantidadInput = document.createElement('input');
        cantidadInput.classList.add("cantidad");
        cantidadInput.setAttribute('type', 'number');
        cantidadInput.setAttribute('name', 'cant');
        cantidadInput.setAttribute('value', '1');
        cantidadInput.setAttribute('min', '0');

        cantidadInput.addEventListener('input', () => {
            const nuevaCantidad = parseInt(cantidadInput.value);
            const nuevoPrecio = nuevaCantidad * precio;
            itemCarrito.querySelector('.precio').textContent = `Precio: $${nuevoPrecio.toFixed(2)}`;
            actualizarTotalCarrito();
        });

        // Precio
        const precioCarrito = document.createElement('div');
        precioCarrito.classList.add('precio');
        precioCarrito.textContent = `Precio: $${precio.toFixed(2)}`;

        // Botón eliminar
        const botonEliminar = document.createElement('input');
        botonEliminar.setAttribute('type', 'button');
        botonEliminar.setAttribute('value', 'Eliminar');
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener('click', () => {
            contenedorCarrito.removeChild(itemCarrito);
            actualizarTotalCarrito();       
        });

        itemCarrito.appendChild(imagenCarrito);
        itemCarrito.appendChild(descripcionCarrito);
        itemCarrito.appendChild(cantidadLabel);
        itemCarrito.appendChild(cantidadInput);
        itemCarrito.appendChild(precioCarrito);
        itemCarrito.appendChild(botonEliminar);

        contenedorCarrito.appendChild(itemCarrito);
        actualizarTotalCarrito();  
    }
}


function actualizarTotalCarrito() {
    const contenedorCarrito = document.getElementById("carrito");
    const elementosEnCarrito = contenedorCarrito.querySelectorAll('.itemCarrito');
    let total = 0;
    elementosEnCarrito.forEach(item => {
        const precioUnitario = parseFloat(item.querySelector('.precio').textContent.split('$')[1]);
        const cantidad = parseInt(item.querySelector('.cantidad').value);
        total += precioUnitario * cantidad;
    });
    const totalCarrito = document.getElementById('totalCarrito');
    console.log(totalCarrito)
    totalCarrito.textContent= `Total: $${total.toFixed(2)}`;
}

