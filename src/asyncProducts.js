const products = [
    {
        id: 'prod1',
        name: 'Sérum Ácido Hialurónico Hyalu B5 La Roche-Posay',
        description: 'La Roche-Posay Hyalu B5 sérum de ácido hialurónico puro para rostro, con vitamina B5, antienvejecimiento para líneas finas y arrugas, hidratante para rellenar y reparar la piel seca, seguro para pieles sensibles. 50 ML',
        price: 45,
        stock: 10,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/1.png?alt=media&token=2c1a2ac2-a30e-4b05-9374-d983c36aa949'],
        category: 'La Roche-Posay'
    },
    {
        id: 'prod2',
        name: 'Anthelios protector solar con color SPF 40+ La Roche-Posay',
        description: 'La Roche-Posay Anthelios Protector solar con color SPF 40+ | Amplio Espectro SPF + Antioxidantes | Protector solar de dióxido de titanio y óxido de zinc | 4 tonos flexibles sin fondo blanco | Sin aceite y sin oxibenzona. 50 ML',
        price: 35,
        stock: 15,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/2.png?alt=media&token=29b392f1-8bf3-4e33-abad-18ff68d4872b'],
        category: 'La Roche-Posay'
    },
    {
        id: 'prod3',
        name: 'Limpiador facial espumoso purificante La Roche-Posay',
        description: 'La Roche-Posay Toleriane Limpiador facial espumoso purificante, lavado facial sin aceite para pieles grasas y pieles sensibles. Contiene niacinamida, no reseca la piel, sin perfume. 400 ML',
        price: 20,
        stock: 10,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/3.png?alt=media&token=0333ee23-9444-469b-be27-c994211fad41'],
        category: 'La Roche-Posay'
    },
    {
        id: 'prod4',
        name: 'Sérum Retinol B3 La Roche-Posay',
        description: 'Sérum facial de retinol puro de La Roche-Posay con vitamina B3. Suero facial antienvejecimiento para líneas, arrugas y daños solares prematuros para rejuvenecer e hidratar. Adecuado para pieles sensibles. 30 ML',
        price: 44,
        stock: 8,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/4.png?alt=media&token=c5c2e82d-6fd5-4aca-b90a-da39a9a72e39'],
        category: 'La Roche-Posay'
    },
    {
        id: 'prod5',
        name: 'CeraVe AM Loción Hidratante Facial SPF 50',
        description: 'Hidratante facial con SPF, ácido hialurónico, niacinamida y ceramidas | No Graso | Se mezcla perfectamente sin tono blanco | Protector solar no comedogénico | 89 ML',
        price: 16,
        stock: 12,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/5.png?alt=media&token=848068cd-2052-4e09-8c34-e4af8775e8a2'],
        category: 'CeraVe'
    },
    {
        id: 'prod6',
        name: 'Gel hidratante ultraligero CeraVe con ceramidas',
        description: 'Gel hidratante facial con ceramidas, niacinamida, ácido hialurónico | Sin fragancia | Sin aceite | Hidratante matificante sin peso | 52 ML',
        price: 17,
        stock: 10,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/6.png?alt=media&token=b2f85097-6ddf-4bcb-bddb-72be067b98de'],
        category: 'CeraVe'
    },
    {
        id: 'prod7',
        name: 'Loción Hidratante Intensiva CeraVe',
        description: 'Hidrourea + manteca de karité | Loción Corporal Para Piel Seca | Alivia los signos de piel extra seca | Loción hidratante no grasa para piel áspera, tensa, enrojecida y con picazón | 473 ML',
        price: 19,
        stock: 15,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/7.png?alt=media&token=f5ebc215-a902-4314-b847-a8fe5cdf3168'],
        category: 'CeraVe'
    },
    {
        id: 'prod8',
        name: 'Gel limpiador para control grasa Clinique',
        description: 'Clinique Acne Solutions con 2 % de ácido salicílico para pieles propensas al acné | 125 ML',
        price: 28,
        stock: 12,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/8.png?alt=media&token=7ba85ded-b4dc-4188-9797-db9646b94f7e'],
        category: 'Clinique'
    },
    {
        id: 'prod9',
        name: 'Suero facial corrector de líneas Clinique',
        description: 'Clinique Acne Solutions Acné + Suero facial corrector de líneas con ácido salicílico | Antienvejecimiento + Suavizado | 30 ML',
        price: 57,
        stock: 10,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/9.png?alt=media&token=6f1fb3a5-12be-438a-99b8-5e4d1940d953'],
        category: 'Clinique'
    },
    {
        id: 'prod10',
        name: 'Suero facial Clinique Smart Clinical Repair',
        description: 'Suero facial corrector de arrugas Clinique Smart Clinical Repair con ácido hialurónico, péptidos + suero retinoide avanzado | Antienvejecimiento + Hidratante | 50 ML',
        price: 22,
        stock: 15,
        img: ['https://firebasestorage.googleapis.com/v0/b/sweetskin-ecommerce.firebasestorage.app/o/10.png?alt=media&token=ba682145-0cc5-4546-a758-5a84e1c32689'],
        category: 'Clinique'
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 250)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 250)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 250);
    });
};