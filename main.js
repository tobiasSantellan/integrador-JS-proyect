// Productos render
const productos = [
    // buzos 
    {
        id: "buzo-01",
        titulo: "Blacki",
        imagen: "assets/buzo-1.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 15000
    },
    {
        id: "buzo-02",
        titulo: "Grey",
        imagen: "assets/buzo-2.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 20000
    },
    {
        id: "buzo-03",
        titulo: "June",
        imagen: "assets/buzo-3.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 22000
    },
    {
        id: "buzo-04",
        titulo: "Ghost",
        imagen: "assets/buzo-4.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 30000
    },
    {
        id: "buzo-05",
        titulo: "Butter",
        imagen: "assets/buzo-5.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 25000
    },
    {
        id: "buzo-06",
        titulo: "Broken",
        imagen: "assets/buzo-img.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 35000
    },
    // camperas 
    {
        id: "campera-01",
        titulo: "Kanye",
        imagen: "assets/campera-1.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 40000
    },
    {
        id: "campera-02",
        titulo: "Brown",
        imagen: "assets/campera-2.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 42000
    },
    {
        id: "campera-03",
        titulo: "Mountain",
        imagen: "assets/campera-3.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 44000
    },
    {
        id: "campera-04",
        titulo: "Future",
        imagen: "assets/campera-4.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 60000
    },
    {
        id: "campera-05",
        titulo: "Air",
        imagen: "assets/campera-5.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 39000
    },
    {
        id: "campera-06",
        titulo: "Bomber",
        imagen: "assets/bomber-img.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 55000
    },
    // pantalones
    {
        id: "pantalon-01",
        titulo: "Sky",
        imagen: "assets/jean-1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 30000
    },
    {
        id: "pantalon-02",
        titulo: "Solid",
        imagen: "assets/jean-2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 29000
    },
    {
        id: "pantalon-03",
        titulo: "Bread",
        imagen: "assets/jean-3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 35000
    },
    {
        id: "pantalon-04",
        titulo: "Star",
        imagen: "assets/jean-4.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 28000
    },
    {
        id: "pantalon-05",
        titulo: "White",
        imagen: "assets/jean-5.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 33000
    },
    {
        id: "pantalon-06",
        titulo: "Faded",
        imagen: "assets/jean-img.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 37000
    },
    // remeras
    {
        id: "remera-01",
        titulo: "Chois",
        imagen: "assets/remera-1.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 14000
    },
    {
        id: "remera-02",
        titulo: "Happen",
        imagen: "assets/remera-2.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 13000
    },
    {
        id: "remera-03",
        titulo: "Basic",
        imagen: "assets/remera-3.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 11000
    },
    {
        id: "remera-04",
        titulo: "Crud",
        imagen: "assets/remera-4.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 16000
    },
    {
        id: "remera-05",
        titulo: "Acid",
        imagen: "assets/remera-5.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 12000
    },
    {
        id: "remera-06",
        titulo: "Vision",
        imagen: "assets/remera-6.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 19000
    },
]

const d = document;
const w = window;
const header = d.querySelector(".header");
const contenedorProductos = d.querySelector("#contenedor-productos");
const botonesCategorias = d.querySelectorAll(".boton-categoria");
let botonesAgregar = d.querySelectorAll(".producto-agregar");
const numerito = d.querySelector("#numerito");


const headerScroll = () => (w.scrollY > 0) ? header.style.backgroundColor = "#090909" : header.style.backgroundColor = "transparent"
    
w.addEventListener("scroll", headerScroll);


function cargarProductos (productosElegidos)  {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = d.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
     `;

     contenedorProductos.append(div)
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar () {
    botonesAgregar = d.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumeroEnCarrito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito (e)  {
    
    const idBoton = e.currentTarget.id;
    // console.log(idBoton)
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    // console.log(productoAgregado)
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    // console.log(index)
       productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1; // propiedad nueva a mi array productos
        productosEnCarrito.push(productoAgregado)
    }
    // console.log(productosEnCarrito)
    actualizarNumeroEnCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumeroEnCarrito () {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    // console.log(nuevoNumero)
    numerito.innerHTML = nuevoNumero;
}

