let catalogo = [
    {
        id: 1,
        precio: 200,
        nombre: "Sudadera Skateboarding Frog",
        caracteristicas: [
            { color: 'verde claro', talla: 'M', existencias: '4', imagen: 'https://i.pinimg.com/564x/c5/ea/94/c5ea947bff0479953327b780167e7a85.jpg' },
            { color: 'blanco y negro', talla: 'L', existencias: '4', imagen: 'https://i.pinimg.com/564x/bf/da/76/bfda76ca3833569494ca9cf433bc25f3.jpg' },
            { color: 'blanco y negro', talla: 'XL', existencias: '4', imagen: 'https://i.pinimg.com/564x/bf/da/76/bfda76ca3833569494ca9cf433bc25f3.jpg' }
        ]
    },

    {
        id: 2,
        precio: 220,
        nombre: "Sueter Dinosaurios",
        caracteristicas: [
            { color: 'lila', talla: 'L', existencias: '6', imagen: 'https://i.pinimg.com/564x/b8/dc/b6/b8dcb631d91d28260253d7afbdc3c691.jpg' },
            { color: 'lila', talla: 'XXL', existencias: '6', imagen: 'https://i.pinimg.com/564x/b8/dc/b6/b8dcb631d91d28260253d7afbdc3c691.jpg' },
            { color: 'lila', talla: 'S', existencias: '6', imagen: 'https://i.pinimg.com/564x/b8/dc/b6/b8dcb631d91d28260253d7afbdc3c691.jpg' }
        ]
    },

    {
        id: 3,
        precio: 300,
        nombre: "Vestido de tirantes estampado floral",
        caracteristicas: [
            { color: 'negro', talla: 'L', existencias: '6', imagen: 'https://i.pinimg.com/564x/a6/a0/7c/a6a07cdf381a3e2ec1d51ace83d1d471.jpg' },
            { color: 'negro', talla: 'S', existencias: '6', imagen: 'https://i.pinimg.com/564x/a6/a0/7c/a6a07cdf381a3e2ec1d51ace83d1d471.jpg' },
            { color: 'azul', talla: 'L', existencias: '6', imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwOCCD5iZ_-q2XZkfq4T38PChVlCBhRsSHvXpswcK5llbjPj4q' },
            { color: 'azul', talla: 'Ch', existencias: '6', imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwOCCD5iZ_-q2XZkfq4T38PChVlCBhRsSHvXpswcK5llbjPj4q' }
        ]
    },

    {
        id: 4,
        precio: 200,
        nombre: "Frog Hoodie",
        caracteristicas: [
            { color: 'verde', talla: 'L', existencias: '3', imagen: 'https://m.media-amazon.com/images/I/61g9VVSpdcL._AC_SX569_.jpg' },
            { color: 'verde', talla: 'S', existencias: '6', imagen: 'https://i.pinimg.com/564x/a6/a0/7c/a6a07cdf381a3e2ec1d51ace83d1d471.jpg' },
            { color: 'amarrillo', talla: 'L', existencias: '6', imagen: 'https://m.media-amazon.com/images/I/61bw9FPQOXL._AC_SX569_.jpg' },
            { color: 'gris', talla: 'Ch', existencias: '3', imagen: 'https://m.media-amazon.com/images/I/61hcdRE4NEL._AC_SX569_.jpg' }
        ]
    },
    {
        id: 5,
        precio: 500,
        nombre: "Rompevientos color combinado",
        caracteristicas: [
            { color: 'Negro y verde', talla: 'L', existencias: '7', imagen: 'https://i.pinimg.com/564x/e3/ee/af/e3eeaf1774dfc40916b6f92f55d096a5.jpg' },
            { color: 'Negro y verde', talla: 'M', existencias: '7', imagen: 'https://i.pinimg.com/564x/e3/ee/af/e3eeaf1774dfc40916b6f92f55d096a5.jpg' },
            { color: 'Negro y verde', talla: 'XL', existencias: '7', imagen: 'https://i.pinimg.com/564x/e3/ee/af/e3eeaf1774dfc40916b6f92f55d096a5.jpg' },
        ]
    },
    {
        id: 6,
        precio: 550,
        nombre: "Plus Drop Shoulder Teddy ",
        caracteristicas: [
            { color: 'sepia', talla: 'L', existencias: '7', imagen: 'https://i.pinimg.com/564x/42/e0/ab/42e0ab8df0ccb6760e36600ff65b921e.jpg' },
            { color: 'sepia', talla: 'M', existencias: '7', imagen: 'https://i.pinimg.com/564x/e3/ee/af/e3eeaf1774dfc40916b6f92f55d096a5.jpg' },
            { color: 'rosa', talla: 'XL', existencias: '9', imagen: 'https://i.pinimg.com/564x/20/9e/a1/209ea1b732de2ddfed5b941060b28e13.jpg' },
        ]
    },
    {
        id: 7,
        precio: 400,
        nombre: "Student autumn winter outfit",
        caracteristicas: [
            { color: 'marrón', talla: 'L', existencias: '7', imagen: 'https://i.pinimg.com/564x/32/af/7d/32af7d8f2a4af05e4052e29c82b431e8.jpg' },
            { color: 'marrón', talla: 'XL', existencias: '7', imagen: 'https://i.pinimg.com/564x/32/af/7d/32af7d8f2a4af05e4052e29c82b431e8.jpg' },
            { color: 'marrón', talla: 'S', existencias: '7', imagen: 'https://i.pinimg.com/564x/32/af/7d/32af7d8f2a4af05e4052e29c82b431e8.jpg' },
        ]
    },
    {
        id: 8,
        precio: 500,
        nombre: "JK Woolen Horn Button Hooded Coat",
        caracteristicas: [
            { color: 'Marrón claro', talla: 'L', existencias: '7', imagen: 'https://i.pinimg.com/564x/62/9f/d4/629fd438c866ef57ff5a3fb6c8336d2d.jpg' },
            { color: 'Marrón claro', talla: 'XL', existencias: '7', imagen: 'https://i.pinimg.com/564x/62/9f/d4/629fd438c866ef57ff5a3fb6c8336d2d.jpg' },
            { color: 'Negro', talla: 'S', existencias: '7', imagen: 'https://i.pinimg.com/564x/76/0e/1b/760e1b5054d3e5e42dd67fc66b816a32.jpg' },
        ]
    },
    {
        id: 9,
        precio: 200,
        nombre: "Kawaii Cat Ear Paw Embroidery Hooded Coat",
        caracteristicas: [
            { color: 'Marrón', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/94/3b/c3/943bc3b31ee395ecd19e65e1ebba1f0f.jpg' },
            { color: 'Marrón', talla: 'XL', existencias: '7', imagen: 'https://i.pinimg.com/564x/62/9f/d4/629fd438c866ef57ff5a3fb6c8336d2d.jpg' },
            { color: 'Rosa', talla: 'S', existencias: '7', imagen: 'https://i.pinimg.com/564x/c7/ff/e6/c7ffe670b93f10e187c5ed7c28871723.jpg' },
            { color: 'Rosa', talla: 'M', existencias: '7', imagen: 'https://i.pinimg.com/564x/c7/ff/e6/c7ffe670b93f10e187c5ed7c28871723.jpg' },
        ]
    },
    {
        id: 10,
        precio: 250,
        nombre: "Spring wear students hooded thin coat",
        caracteristicas: [
            { color: 'Blanco', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/26/5f/a4/265fa4efb6df674944ffd624c9d4f63d.jpg' },
            { color: 'Blanco', talla: 'S', existencias: '10', imagen: 'https://i.pinimg.com/564x/26/5f/a4/265fa4efb6df674944ffd624c9d4f63d.jpg' },
            { color: 'Blanco', talla: 'M', existencias: '10', imagen: 'https://i.pinimg.com/564x/26/5f/a4/265fa4efb6df674944ffd624c9d4f63d.jpg' },
            { color: 'Blanco', talla: 'XL', existencias: '10', imagen: 'https://i.pinimg.com/564x/26/5f/a4/265fa4efb6df674944ffd624c9d4f63d.jpg' },
            ]
    },
    {
        id: 11,
        precio: 300,
        nombre: "Dress Flare Sleeve Medieval Vintage ",
        caracteristicas: [
            { color: 'Beige', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/a7/53/83/a7538316c060309d65689cff7296f1fd.jpg' },
            { color: 'Beige', talla: 'G', existencias: '10', imagen: 'https://i.pinimg.com/564x/a7/53/83/a7538316c060309d65689cff7296f1fd.jpg' },
            { color: 'Vino', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/33/28/26/3328268e61b1ca1ac2da86563ba10fb9.jpg' },
            { color: 'Vino', talla: 'Ch', existencias: '10', imagen: 'https://i.pinimg.com/564x/33/28/26/3328268e61b1ca1ac2da86563ba10fb9.jpg' },
            ]
    },
    {
        id: 12,
        precio: 260,
        nombre: "Victorian Long Skirt",
        caracteristicas: [
            { color: 'Verde', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/11/c8/5c/11c85c231e967d4e465d423201ad7be1.jpg' },
            { color: 'Marrón oscuro', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/736x/21/1a/95/211a95d8c539e71f493b6bae5ea65afc.jpg' },
            { color: 'Marrón oscuro', talla: 'XL', existencias: '10', imagen: 'https://i.pinimg.com/736x/21/1a/95/211a95d8c539e71f493b6bae5ea65afc.jpg' },
            { color: 'Negro', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/e6/be/d6/e6bed605503733e5826601f45f1fa55d.jpg' },
            { color: 'Negro', talla: 'XL', existencias: '10', imagen: 'https://i.pinimg.com/564x/e6/be/d6/e6bed605503733e5826601f45f1fa55d.jpg' },
            { color: 'Azul', talla: 'Ch', existencias: '10', imagen: 'https://i.pinimg.com/564x/d8/61/8d/d8618d730cfb62428e651a589a8d0c84.jpg' },
            { color: 'Azul', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/d8/61/8d/d8618d730cfb62428e651a589a8d0c84.jpg' },
            ]
    },
    {
        id: 13,
        precio: 420,
        nombre: "Falda con cuenta de perla con nudo lateral",
        caracteristicas: [
            { color: 'Rojo', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/de/87/50/de8750e300eca7c6871f547432893b65.jpg' },
            { color: 'Rojo', talla: 'XL', existencias: '10', imagen: 'https://i.pinimg.com/564x/de/87/50/de8750e300eca7c6871f547432893b65.jpg' },
            { color: 'Rojo', talla: 'CH', existencias: '10', imagen: 'https://i.pinimg.com/564x/de/87/50/de8750e300eca7c6871f547432893b65.jpg' },
            { color: 'Rojo', talla: 'XXL', existencias: '10', imagen: 'https://i.pinimg.com/564x/de/87/50/de8750e300eca7c6871f547432893b65.jpg' },
            
            ]
    },
    {
        id: 14,
        precio: 200,
        nombre: "Floral ocasional Camiseta",
        caracteristicas: [
            { color: 'Vainilla', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/0f/c3/23/0fc323f179f823f6494a681eac019a8a.jpg' },
            { color: 'Vainilla', talla: 'XLL', existencias: '10', imagen: 'https://i.pinimg.com/564x/0f/c3/23/0fc323f179f823f6494a681eac019a8a.jpg' },
            { color: 'Vainilla', talla: 'CHL', existencias: '10', imagen: 'https://i.pinimg.com/564x/0f/c3/23/0fc323f179f823f6494a681eac019a8a.jpg' },
            { color: 'Vainilla', talla: 'XXL', existencias: '10', imagen: 'https://i.pinimg.com/564x/0f/c3/23/0fc323f179f823f6494a681eac019a8a.jpg' },
            
            ]
    },
    {
        id: 15,
        precio: 300,
        nombre: "Camiseta con estampado floral con de galaxia",
        caracteristicas: [
            { color: 'Purpura', talla: 'L', existencias: '10', imagen: 'https://i.pinimg.com/564x/a8/c2/17/a8c21785ce10f77601fe742150002452.jpg'},
            { color: 'Purpura', talla: 'CH', existencias: '10', imagen: 'https://i.pinimg.com/564x/a8/c2/17/a8c21785ce10f77601fe742150002452.jpg'},
            { color: 'Purpura', talla: 'S', existencias: '10', imagen: 'https://i.pinimg.com/564x/a8/c2/17/a8c21785ce10f77601fe742150002452.jpg'},
            { color: 'Purpura', talla: 'XL', existencias: '10', imagen: 'https://i.pinimg.com/564x/a8/c2/17/a8c21785ce10f77601fe742150002452.jpg'},
           
            ]
    },
]