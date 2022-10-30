const productoModel = ()=> {
    
    var productos = [
        {
            id:1,
            categoriaid: 1,
            nombre: 'Consume',
            descripcion: 'Sopa de Pescado',
            imagen: '',
            precio: 10000
        },
        {
            id:2,
            categoriaid: 1,
            nombre: 'Salchipapas',
            descripcion: 'Plato de papas y salchichas fritas',
            imagen: '',
            precio: 20000
        },
        {
            id:3,
            categoriaid: 1,
            nombre: 'Hamburguesa',
            descripcion: '',
            imagen: '',
            precio: 100000
        },
        {
            id:4,
            categoriaid: 1,
            nombre: 'Pescado',
            descripcion: 'Mojarra 350gr',
            imagen: '',
            precio: 100000
        },
        {
            id:5,
            categoriaid: 1,
            nombre:"Pollo",
            descripcion: "Plato de Pollo Frito",
            precio: 25000,
            image:''
        },
        {
            id: 6,
            categoriaid: 1,
            nombre:"Pollo",
            descripcion: "Pechuga de Pollo",
            precio: 25000,
            image:''
        },
        {
            id: 7,
            categoriaid: 1,
            nombre:"Cerdo",
            descripcion: "Lomo de Cerdo",
            precio: 25000,
            image:''
        },
        {
            id: 8,
            categoriaid: 1,
            nombre:"Carne",
            descripcion: "Carne a la Plancha",
            precio: 35000,
            image:''
        },
        {
            id: 9,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Mojarra de 500gr",
            precio: 35000,
            image:''
        },
        {
            id: 10,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Mojarra Roja de 500gr",
            precio: 35000,
            image:''
        },
        {
            id: 11,
            categoriaid: 1,
            nombre:"Camarón",
            descripcion: "Ceviche de Camarón",
            precio: 50000,
            image:''
        },
        {
            id: 12,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Sierra 500gr",
            precio: 50000,
            image:''
        },
        {
            id: 13,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Róbalo 500gr",
            precio: 60000,
            image:''
        },
        {
            id: 14,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Cevivhe de Róbalo",
            precio: 50000,
            image:''
        },
        {
            id: 15,
            categoriaid: 1,
            nombre:"Pescado",
            descripcion: "Pargo 500gr",
            precio: 70000,
            image:''
        },
        {
            id: 16,
            categoriaid: 1,
            nombre:"Camarón",
            descripcion: "Camarón al ajillo",
            precio: 70000,
            image:''
        },
        {
            id: 17,
            categoriaid: 1,
            nombre:"Langosta",
            descripcion: "Langosta 500gr",
            precio: 120000,
            image:''
        },
        {
            id: 18,
            categoriaid: 1,
            nombre:"Mariscos",
            descripcion: "Cazuela de Mariscos",
            precio: 80000,
            image:''
        },
        {
            id: 19,
            categoriaid: 1,
            nombre:"Mariscos",
            descripcion: "Picada Mixta de Mariscos",
            precio: 250000,
            image:''
        },
        {
            id: 20,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Piña Colada",
            precio: 30000,
            image:''
        },
        {
            id: 21,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Margarita",
            precio: 30000,
            image:''
        },
        {
            id: 22,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Caipiroska",
            precio: 30000,
            image:''
        },
        {
            id: 23,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Daiquiri",
            precio: 30000,
            image:''
        },
        {
            id: 24,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Cuba Libre",
            precio: 30000,
            image:''
        },
        {
            id: 25,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Coco Loco",
            precio: 30000,
            image:''
        },
        {
            id: 26,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Mojito",
            precio: 30000,
            image:''
        },
        {
            id: 27,
            categoriaid: 2,
            nombre:"Bebida Alcoholica",
            descripcion: "Gintone",
            precio: 30000,
            image:''
        },
        {
            id: 28,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada de Coco",
            precio: 25000,
            image:''
        },
        {
            id: 29,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada Cerezada",
            precio: 10000,
            image:''
        },
        {
            id: 30,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Limonada Natural",
            precio: 10000,
            image:''
        },
        {
            id: 31,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Jugos Naturales",
            precio: 10000,
            image:''
        },
        {
            id: 32,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Corona",
            precio: 12000,
            image:''
        },
        {
            id: 33,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Coronita",
            precio: 10000,
            image:''
        },
        {
            id: 34,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Club Colombia",
            precio: 7000,
            image:''
        },
        {
            id: 35,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Aguila Light",
            precio: 7000,
            image:''
        },
        {
            id: 36,
            categoriaid: 2,
            nombre:"Cervezas",
            descripcion: "Aguila",
            precio: 6000,
            image:''
        },
        {
            id: 37,
            categoriaid: 2,
            nombre:"Gaseosas",
            descripcion: "Gaseosas cualquier marca",
            precio: 5000,
            image:''
        },
        {
            id: 38,
            categoriaid: 2,
            nombre:"Jugos",
            descripcion: "Agua de Coco",
            precio: 15000,
            image:''
        },
        {
            id: 39,
            categoriaid: 2,
            nombre:"Agua",
            descripcion: "Agua Natural",
            precio: 5000,
            image:''
        },
        {
            id: 40,
            categoriaid: 2,
            nombre:"Ron",
            descripcion: "Ron Medellin - Caldas - Aguardiente 750 ml",
            precio: 100000,
            image:''
        },
        {
            id: 41,
            categoriaid: 2,
            nombre:"Ron",
            descripcion: "Ron Medellin - Caldas - Aguardiente 375 ml",
            precio: 60000,
            image:''
        },
        {
            id: 42,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje una hora",
            precio: 160000,
            image:''
        },
        {
            id: 43,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje media hora",
            precio: 80000,
            image:''
        },
        {
            id: 44,
            categoriaid: 3,
            nombre:"Masaje",
            descripcion: "Masaje quince minutos",
            precio: 40000,
            image:''
        },
        {
            id: 45,
            categoriaid: 3,
            nombre:"Snorkel",
            descripcion: "Snorkel al bajo de las tortugas",
            precio: 50000,
            image:''
        },
        {
            id: 46,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas vistas al mar",
            precio: 80000,
            image:''
        },
        {
            id: 47,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas mitad",
            precio: 70000,
            image:''
        },
        {
            id: 48,
            categoriaid: 3,
            nombre:"Carpas",
            descripcion: "Carpas atrás",
            precio: 50000,
            image:''
        }
    ]
    return productos;
}

export default productoModel;