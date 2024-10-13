let inventario = [];

// Función para agregar una prenda al inventario
function agregarPrenda(nombre, tipo, talle, precio, cantidad) {
    inventario.push([nombre, tipo, talle, precio, cantidad]); // Agrupar los datos en un array
}

// Agregar prendas al inventario
agregarPrenda("Jean123", "pantalon", "L", 23000, 5);
agregarPrenda("Remera321", "remera", "M", 12000, 10);
agregarPrenda("VestidoLoli", "vestido", "S", 35000, 12);
agregarPrenda("Pollera666", "pollera", "S", 13000, 7);
agregarPrenda("Camisa777", "camisa", "XL", 43000, 24);

// Mostrar el inventario
function mostrarInventario() {
    console.log("Inventario actual:");
    inventario.forEach(function(prenda, index) {
        console.log("Prenda #" + (index + 1) + ": " + prenda[0] + " - " + prenda[1] + " - Talle: " + prenda[2] + " - Precio: $" + prenda[3] + " - Cantidad: " + prenda[4]);
    });
}