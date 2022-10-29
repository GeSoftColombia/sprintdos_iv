const productoModel = ()=> {
    
    var productos = [
        {
            id:1,
            categoriaid: 1,
            descripcion: 'Sopa de Pescado',
            nombre: 'Consume',
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/e0/ad/f8/sopa-de-mojarra-frita.jpg',
            precio: 10000
        },
        {
            id:2,
            categoriaid: 1,
            descripcion: 'Plato de papas y salchichas fritas',
            nombre: 'Salchipapas',
            imagen: 'https://larepublica.pe/resizer/uPLFKNfcK3AVHizvhZZeujwtaLI=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/MERKVIHZZJAJTLT46SMY5PBT74.jpg',
            precio: 20000
        },
        {
            id:4,
            categoriaid: 1,
            descripcion: 'Esta es la descripción de la categoria',
            nombre: 'Hamburguesa',
            imagen: 'https://www.atriumpizzayburger.com/sites/default/files/images/productos/magic.jpg',
            precio: 100000
        },
        {
            id:5,
            categoriaid: 1,
            descripcion: 'Mojarra 350gr',
            nombre: 'Pescado',
            imagen: 'https://i.ytimg.com/vi/Y0EMlGZXLRo/maxresdefault.jpg',
            precio: 100000
        },
        {
            id:6,
            categoriaid: 2,
            descripcion: 'Piña Colada',
            nombre: 'Bebida Alcoholica',
            imagen: 'https://i.ytimg.com/vi/Y0EMlGZXLRo/maxresdefault.jpg',
            precio: 100000
        }
    ]
    return productos;
}

export default productoModel;