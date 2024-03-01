const products = [
    {
        id:'1',
        name:'Cama para Gato',
        price: 12000,
        category: 'Accesorios',
        img:'./src/img/camablanca.jpg',
        stock: 10,
        description: 'Sillón para gatos, forrado en polar, estampado animal print.' 
    },
    {
        id:'2',
        name:'Collar para gato trenzado',
        price: 5000,
        category: 'Accesorios',
        img:'./src/img/collarceleste.jpg',
        stock: 15,
        description: 'Collar para gato color turqueza y rojo. Material: cordón. Realizado en técnica macramé. Cuenta con cierre y argolla para correa.' 
    },
    {
        id:'3',
        name:'Collar para gato trenzado',
        price: 5000,
        category: 'Accesorios',
        img:'./src/img/collarceleste.jpg',
        stock: 15,
        description: 'Collar para gato color lila y rosa. Material: cordón. Realizado en técnica macramé. Cuenta con cierre y argolla para correa.'
    }
]

export const getProducts =() => {
     return new Promise ((resolve) => {
         setTimeout(() => {
            resolve(products)
         },500)
     })
}