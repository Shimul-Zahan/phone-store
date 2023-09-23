const searchItem = () => {
    const cart = localStorage.getItem('mobile-cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

const saveToLCS = phone => {
    const storedCart = searchItem();

    const exist = storedCart.find(cart => cart[0].id == phone[0].id);
    console.log(exist)

    if (!exist) {
        storedCart.push(phone);
        localStorage.setItem('mobile-cart', JSON.stringify(storedCart));
        alert('Products added to cart successfully!!!');
    } else {
        alert('already in queue');
    }
}

export { saveToLCS, searchItem }