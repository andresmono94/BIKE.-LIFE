let cart = [];
let total = 0;

function addToCart(product, price) {
    // Agrega el producto al carrito
    cart.push({ product, price });
    total += price;

    // Muestra el carrito actualizado
    displayCart();
}

function displayCart() {
    // Limpia el carrito
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    // Muestra cada producto en el carrito
    cart.forEach((item, index) => {
        const cartItem = document.createElement("p");
        cartItem.innerText = `${item.product} - $${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });

    // Actualiza el total
    document.getElementById("totalAmount").innerText = `Total: $${total}`;
}

function clearCart() {
    cart = [];
    total = 0;
    displayCart();
}
