// data.js is the source of the products 
import bcrypt from 'bcryptjs';


const data = {  
    users: [{
        name: 'Basir',
        email: 'admin@basir.com',
        password: bcrypt.hashSync('1234', 8 ),
        isAdmin: true
    },
    {
        name: 'jonson',
        email: 'jonson@basir.com',
        password: bcrypt.hashSync('1234', 8 ),
        isAdmin: false
    },
    ],    //data is our object
    products: [      //defining products array
        {            //products obejct
            
            name: 'Cold shoulders Top',
            category:'Tops',
            image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 70,
            countInStock: 10,
            brand: 'Shoppers Stop',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality products',
        },
        {
            
            name: 'Top & Skirt',
            category:'Top & skirt',
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 67,
            countInStock: 5,
            brand: 'Vero-Moda',
            rating: 4,
            numReviews: 13,
            description: 'High quality products',
        },
        {
            
            name: 'Jeans',
            category:'Jeans',
            image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 96,
            countInStock: 40,
            brand: 'Spykar',
            rating: 4.5,
            numReviews: 11,
            description: 'High quality products',
        },
        {
            
            name: 'Shirts',
            category:'Formal Shirts',
            image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 170,
            countInStock: 17,
            brand: 'xyz',
            rating: 3.5,
            numReviews: 10,
            description: 'Good quality products',
        },
        {
            
            name: 'Ruffle Top',
            category:'Top',
            image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 90,
            countInStock: 107,
            brand: 'Mitaha',
            rating: 4.5,
            numReviews: 10,
            description: 'Think.Feel.Looks',
        },
    ],
}

export default data