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
agregarPrenda("PantalonJuan", "pantalon", "L", 55000, 8);

// Mostrar el inventario
function mostrarInventario() {
    console.log("Inventario actual:");
    inventario.forEach(function(prenda, index) {
        console.log("Prenda #" + (index + 1) + ": " + prenda[0] + " - " + prenda[1] + " - Talle: " + prenda[2] + " - Precio: $" + prenda[3] + " - Cantidad: " + prenda[4]);
    });
}
//mostrarInventario();
//comentar que no salia por no llamar funcion
//Atender pedido

function realizarPedido(nombrePrenda,cantidad) {
    let prenda = inventario.find(prenda => prenda[0] === nombrePrenda);
    if(prenda) { 
        if (prenda[4] >= cantidad) {
            prenda[4] -= cantidad;

            let subtotal = prenda[3]*cantidad;
            console.log("Has agregado " ,cantidad ,"unidades de ", nombrePrenda , "al carrito. Subtotal: $",subtotal );
            
            return{nombre: nombrePrenda, cantidad, subtotal};
        }else {
            console.log("No hay suficiente stock de : ", nombrePrenda );
            return null;
        } 
    }else{ 
        console.log("La prenda" ,nombrePrenda, "no esta disponible");
        return null;   
    }
}

realizarPedido("VestidoLoli",3);
realizarPedido("Jean123",6);
realizarPedido("Pollera666",2);

mostrarInventario();

//teniamos mal ubicado el llamado de mostrar inventario, si lo haces antes, te muestra inventario viejo.
let carrito = [];
let pedido1 = realizarPedido("VestidoLoli",3);
if(pedido1) carrito.push(pedido1);

let pedido2 = realizarPedido("Pollera666",5);
if(pedido2) carrito.push(pedido2);

mostrarInventario();
function generarResumenPedido (carrito){
    if(carrito.length === 0){
        console.log("No has realizado ningún pedido");
        return;
    }
    





//console.log(carrito);no va
//este if se fija el stock inicial menos los pedidos realizados
console.log("Resumen de tu pedido: ");
let total = carrito.reduce((acumulador,item) =>{
    console.log(item.cantidad, "x", item.nombre, "- Subtotal: $",item.subtotal);
    return  acumulador + item.subtotal;
} ,0);
console.log("Total a pagar: $", total);

}


generarResumenPedido(carrito);
//mostrar prendas agotadas y avisar reposicion

function mostrarPrendasAgotadas(){
        console.log("Prendas agotadas: ");
        inventario.forEach(prenda => {
            if(prenda[4] === 0){
                console.log(prenda[0] ,"(" ,prenda[1],", Talle",prenda[2],") esta agotada");
            }
            
        });
}
mostrarPrendasAgotadas();
//Cuales reponer
function reponerInventario(nombrePrenda,cantidad){
    let prenda = inventario.find(prenda => prenda[0] === nombrePrenda);
    if(prenda) {
        prenda[4] += cantidad;
        console.log("Se han repuesto "+ cantidad+" unidades de "+nombrePrenda);

    }else{
        console.log("la prenda "+nombrePrenda+" aun no esta disponible en el inventario");
    }
}
reponerInventario("Pollera666",15);
mostrarInventario();