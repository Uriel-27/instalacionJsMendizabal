const products = [
    {
        name: 'Chocolate en barra',
        price: 135,
        stock: 40,
        id: 1,
        //img: 'img/logo192.png',
        img: 'https://img.freepik.com/foto-gratis/barra-chocolate-negro-aislado-sobre-fondo-blanco_517510-2741.jpg?size=626&ext=jpg',
        category: 'Chocolate negro',
    },
    {
        name: 'Chocolate en barra',
        price: 135,
        stock: 40,
        id: 11,
        img: 'https://img.freepik.com/vector-gratis/barra-chocolate-blanco-pieza-cuadrada-envolver-chocolate-blanco-dulce-realista-aislado_341509-1678.jpg',
        category: 'Chocolate blanco',
    },
    {
        name: 'Chocolate en rama',
        price: 200,
        stock: 15,
        id: 2,
        img: 'https://media.mykaramelli.com/galeria/recetas/MG_4931.jpg',
        category: 'Chocolate negro',
    },
    {
        name: 'Chocolate en rama',
        price: 200,
        stock: 15,
        id: 22,
        img: 'https://cdn.shopify.com/s/files/1/0351/3673/3229/products/chocolate-en-rama-negro-o-blanco-caja-x-1-kg-sugar-d_nq_np_801418-mla31593683457_072019-f11-ed51658d36be816e1c15946585881954-640-0_480x480.jpg?v=1599808108',
        category: 'Chocolate blanco',
    },
    {
        name: 'Huevos de pascua',
        price: 250,
        stock: 30,
        id: 3,
        img: 'https://i.pinimg.com/originals/85/e3/dc/85e3dcc46ccf86662d67ab5e4b3b7365.jpg',
        category: 'Chocolate negro',
    },
    {
        name: 'Frutos secos bañados',
        price: 90,
        stock: 24,
        id: 33,
        img: 'https://i.pinimg.com/originals/32/57/e2/3257e2ddead29ca862c8beac697e4e2a.jpg',
        category: 'Chocolate negro',
    },
    {
        name: 'Franui',
        price: 90,
        stock: 25,
        id: 4,
        img: 'https://cuk-it.com/wp-content/uploads/2021/02/thumb03-e1612618097250.jpg',
        category: 'Chocolate blanco',
    },
    {
        name: 'Coca cola y jugos',
        price: 120,
        stock: 10,
        id: 44,
        img: 'https://www.semana.com/resizer/fftjGm6wDCzylVzU4uVdzWu75X8=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/U5HGBODYHREL5CCG62CNE6SYIU.jpg',
        category: 'Bebidas',
    },
];

const product = {
    name: 'Remera Negra',
    price: 200,
    stock: 4,
    id: 1,
    img: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
    category: 'remeras',
};

export const traerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
};
