const express = require('express')
const app = express()
const port = 8000
const product = [
        {
        id: 1,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "Chair",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        },
    {
        id: 2,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        name: "Blue sofa",
        type: "Sofa",
        price: "$2000",
        category: "chair",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
        id:3,
        image: "https://images-na.ssl-images-amazon.com/images/I/91QRnD-BsNL._SL1500_.jpg",
        name: "Royal bed",
        type: "king size bed",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
        id:4,
        image: "https://image.made-in-china.com/2f0j00cGjUlEWzawqp/Modern-New-Design-Bedroom-Sets-Wardrobe-Dressing-Table-Home-Furniture-Chest-Drawer-Bed-Classic-Bed.jpg",
        name: "Wooden design",
        type: "Wood style",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
        id:5,
        image: "https://images-na.ssl-images-amazon.com/images/I/91QRnD-BsNL._SL1500_.jpg",
        name: "Royal bed",
        type: "king size bed",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
        id: 6,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 7,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
        name: "Blue sofa",
        type: "Sofa",
        price: "$2000",
        category: "chair",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 8,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 9,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 10,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 11,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 12,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 13,
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 14,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 15,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },{
        id: 16,
        image: "https://images-na.ssl-images-amazon.com/images/I/713cLjHmqRL._SL1500_.jpg",
        name: "Scandanvanian Collection",
        type: "Keppu Regular chair",
        price: "$2000",
        category: "living room",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    }
    ]
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    return next();
});
app.get('/', (req, res) => {
    let productJson = product
    productJson.length = 10
    res.json({data: productJson})
})
app.get('/search/:text', (req, res) => {
    console.log(req.params.text);
    let productJson = product
    productJson.length = 10
    let searchProduct = product.filter(pro=>
        pro.category===req.params.text
    )
    if(searchProduct > 10)
        searchProduct.length=10
    res.json({data: searchProduct.length> 0 ? searchProduct: productJson, search: searchProduct.length> 0 ? "true" : "false"})
})
app.get('/product/:id', (req, res) => {
    let getProduct = product.filter(pro=>
        pro.id===parseInt(req.params.id)
    )[0]
    res.json({data: getProduct})
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})