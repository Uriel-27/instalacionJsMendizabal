const products = [
    {
        name: 'Camisa con Lunares',
        price: 333,
        stock: 4,
        id: 22,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6E7d9ZT5DpftLFtE8ex5XrBtNpq1Nffiza1DcZRJHQ-TotUj_bW1JdBAWjqkx38dcFQ&usqp=CAU',
        category: 'helados',
        discount: 10,
    },
    {
        name: 'Riñonera Beige',
        price: 70,
        stock: 6,
        id: 3,
        img: 'https://atopedegym.com/wp-content/uploads/2017/02/Coca-Cola.jpg',
        category: 'bebidas',
        discount: 35,
    },
    {
        name: 'Riñonera Negra',
        price: 77,
        stock: 6,
        id: 33,
        img: 'https://t2.uc.ltmcdn.com/es/posts/4/4/5/como_hacer_bombones_de_chocolate_23544_600.jpg',
        category: 'chocolates',
        discount: 45,
    },
    {
        name: 'Gorra Azul',
        price: 80,
        stock: 20,
        id: 4,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-white-chocolate-chunks-royalty-free-image-157582140-1547653961.jpg?crop=1.00xw:0.721xh;0,0.0304xh&resize=1200:*',
        category: 'chocolates',
        discount: 15,
    },
    {
        name: 'Gorra Negra',
        price: 88,
        stock: 5,
        id: 44,
        img: 'https://www.hogarmania.com/archivos/201907/chocolate-negro-xl-1280x720x80xX.jpg',
        category: 'chocolates',
        discount: 5,
    },
];

export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (producto) => producto.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 300);
    });
};

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = products.find(
            (producto) => producto.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoElegido);
        }, 1000);
    });
};