export const sliderItems = [
    {
        id: 1,
        // Comment the image below of laptop during development its a heavy image 
        // img: "https://www.pngmart.com/files/4/Macbook-PNG-Photo.png",
        img: "https://cdn2-imgix.macpaw.com/images/content/en_1633513105.png?auto=format&fm=png&ixlib=php-3.3.1&q=60&w=468",
        title: "LAPTOPS 30% OFF",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro exercitationem,perferendis a iste.",
        bg: "ebfcf5",
        link: "/laptops",
    },
    {
        id: 2,
        img: "https://www.pngmart.com/files/4/Phone-Case-Transparent-PNG.png",
        title: "PHONES 20% OFF",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro exercitationem,perferendis a iste.",
        bg: "f9f6ff",
        link: "/phones",
    },
    {
        id: 3,
        img: "https://www.pngmart.com/files/6/Sennheiser-Headphone-PNG-Transparent-Picture.png",
        title: "HEADPHONES 40% OFF",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro exercitationem,perferendis a iste.",
        bg: "e9e9e9cc",
        link: "/headphones",
    },
];

export const categories = [
    {
        id: 1,
        img: "https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg",
        title: "LAPTOPS",
        link: "/productlist/laptops",
    },
    {
        id: 2,
        img: "https://www.cnet.com/a/img/resize/55fb60ca6a8cf5035ac2b5044ef54e6f87f6be3f/2020/08/18/b7168aea-9f7e-47bb-9f31-4cb8ad92fbc7/lg-note-20-ultra-5g-iphone-11-se-google-pixel-4a-lg-velvet-6133.jpg?auto=webp&fit=crop&height=675&width=1200",
        title: "PHONES",
        link: "/productlist/phones",
    },
    {
        id: 3,
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sony-headphone-5-12-inline-5-1652371430.jpg?crop=0.667xw:1.00xh;0.167xw,0&resize=640:*",
        title: "HEADPHONES",
        link: "/productlist/headphones",
    },
];

export const allProducts = [
    // Products all here 
    // Product Id starts from zero same as index to object
    {
        id: 0,
        title: "IPHONE 13 PRO MAX",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "4 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 1,
        title: "IPHONE 13 PRO MAX 1",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 11,
        priceQuantity:11, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 32 GB",
        specs:{
            RAM: "4 GB",
            ROM: "32 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 2,
        title: "IPHONE 13 PRO MAX 2 x",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 22,
        priceQuantity:22, 
        quantity:1,
        category:"laptops",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 128 GB",
        specs:{
            RAM: "4 GB",
            ROM: "128 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 3,
        title: "IPHONE 13 PRO MAX 3",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 33,
        priceQuantity:33, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 32 GB",
        specs:{
            RAM: "4 GB",
            ROM: "32 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 4,
        title: "IPHONE 13 PRO MAX 4",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"yes",
        "Main Features": "RAM : 4 GB | ROM : 32 GB",
        specs:{
            RAM: "4 GB",
            ROM: "32 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 5,
        title: "IPHONE 13 PRO MAX 5",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"no",
        "Main Features": "RAM : 4 GB | ROM : 64 GB",
        specs:{
            RAM: "4 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 6,
        title: "IPHONE 13 PRO MAX 6",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 7,
        title: "IPHONE 13 PRO MAX 7",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
    {
        id: 8,
        title: "IPHONE 13 PRO MAX 8",
        desc: "lorem ispsum",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
        // Price and Price Quantity must be same
        price: 100,
        priceQuantity:100, 
        quantity:1,
        category:"phones",
        popular:"no",
        "Main Features": "RAM : 6 GB | ROM : 64 GB",
        specs:{
            RAM: "6 GB",
            ROM: "64 GB",
            "Dual SIM": "YES",
            Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
            "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
            "Front Camera": "10 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
        },
        colors:{
            color1: "58FF33",
            color2: "FF33F3",
            color3: "3346FF",
        },
    },
];

// Items added to cart 
export const CartItemsData=[
    // Cart Items will be added here through product buttons - update via states
];
export const totaPriceOfCartItemsData=[]; // this will recive data form the totalPrice function in Cart.jsx and then will be retrived to App.js state;

// export const popularProducts = [
// ];