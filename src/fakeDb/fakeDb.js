const getItem = (key) => {
    const getData = JSON.parse(localStorage.getItem(key));
    return getData;
};
// const setItem = (id) => {
//     let productsCart = {};
//     const storedCart = getItem('shopping-cart');
//     if (storedCart) {
//         productsCart = storedCart;
//     }

//     const quantity = productsCart[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         productsCart[id] = newQuantity;
//     } else {
//         productsCart[id] = 1;
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(productsCart));
// };
// export default setItem;

// for single item
// const setItem = (id) => {
//     let quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = +quantity + 1;
//         localStorage.setItem(id, newQuantity);
//     } else {
//         quantity = 1;
//         localStorage.setItem(id, quantity);
//     }
// };
// export default setItem;

// for store an object

const setItem = (id) => {
    let shoppingCart = {};
    const storedCart = getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = storedCart;
    }

    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        console.log('new');
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    console.log(id);
};
export default setItem;
