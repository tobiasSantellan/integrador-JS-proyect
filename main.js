// Productos render
const productos = [
    // buzos 
    {
        id: "buzo-01",
        titulo: "Buzo Blacki",
        imagen: "assets/buzo-1.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-02",
        titulo: "Buzo Grey",
        imagen: "assets/buzo-2.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-03",
        titulo: "Buzo September",
        imagen: "assets/buzo-3.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-04",
        titulo: "Buzo Ghost",
        imagen: "assets/buzo-4.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-05",
        titulo: "Buzo Butter",
        imagen: "assets/buzo-5.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    {
        id: "buzo-06",
        titulo: "Buzo Broken",
        imagen: "assets/buzo-img.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 1000
    },
    // camperas 
    {
        id: "campera-01",
        titulo: "Campera Kanyie",
        imagen: "assets/campera-1.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "campera-02",
        titulo: "Campera Brown",
        imagen: "assets/campera-2.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "campera-03",
        titulo: "Campera Mountain",
        imagen: "assets/campera-3.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "campera-04",
        titulo: "Campera Future",
        imagen: "assets/campera-4.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "campera-05",
        titulo: "Campera Air",
        imagen: "assets/campera-5.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    {
        id: "campera-06",
        titulo: "Campera Bomber",
        imagen: "assets/bomber-img.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 1000
    },
    // pantalones
    {
        id: "pantalon-01",
        titulo: "Jean Sky",
        imagen: "assets/jean-1.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Jean Solid",
        imagen: "assets/jean-2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Jean Bread",
        imagen: "assets/jean-3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Jean Star",
        imagen: "assets/jean-4.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Jean White",
        imagen: "assets/jean-5.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-06",
        titulo: "Jean Faded",
        imagen: "assets/jean-img.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    // remeras
    {
        id: "remera-01",
        titulo: "Remera Choise",
        imagen: "assets/remera-1.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-02",
        titulo: "Remera Happen",
        imagen: "assets/remera-2.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-03",
        titulo: "Remera Basic",
        imagen: "assets/remera-3.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-04",
        titulo: "Remera Crud",
        imagen: "assets/remera-4.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-05",
        titulo: "Remera LA",
        imagen: "assets/remera-5.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-06",
        titulo: "Remera Vision",
        imagen: "assets/remera-6.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 1000
    },
]


const d = document;
const header = d.querySelector(".header");

const headerScroll = () => {
     (window.scrollY > 0) ? header.style.backgroundColor = "#090909" : header.style.backgroundColor = "transparent"
    }

const init = () => {
    window.addEventListener("scroll", headerScroll)
}

init();