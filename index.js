//!!Carrito de compra
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//abrir y cerrar carrito
cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active")
};

//cart trabajo JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready()
};

function ready() {
    //remover item del carrito
    let removerCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removerCartButtons);
    for (let i = 0; i < removerCartButtons.length; i++) {
        let button = removerCartButtons[i];
        button.addEventListener("click", removeCartItem);
    };
    //quantity changes
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    };

    //boton agregar al carrito
    let addCart = document.getElementsByClassName("add-cart");
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i];
        button.addEventListener("click", addCartClicked);
    };

    //boton de compra
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
};

//boton de compra
function buyButtonClicked() {
    alert("Tú pedido ya esta realizado")
    let cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
};

//quantity changes
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    };
    updatetotal();
};

//agregar al carrito
function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProducts.getElementsByClassName("card-img-top")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
};

function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsName = cartItems.getElementsByClassName("cart-product-tittle");
    for (let i = 0; i < cartItemsName.length; i++) {
        if (cartItemsName[i].innerText == title) {
            alert("Haz agregado la burguer al carrito");
            return;
        };
    };
    let cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-tittle">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i> `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
};



//costo total
function updatetotal() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + price * quantity;
    };
    //si el precio es con decimales
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
};

//!VENTANAS MODALS
const clasica = document.getElementById("clasica");
const modalClasica = document.getElementById("modalClasica");
const cerrarClasica = document.getElementById("cerrarClasica");
clasica.addEventListener('click', () => {
    modalClasica.classList.add('open_close');
});
cerrarClasica.addEventListener('click', () => {
    modalClasica.classList.remove('open_close');
});


const chesse = document.getElementById("chesse");
const modalChesse = document.getElementById("modalChesse");
const cerrarChesse = document.getElementById("cerrarChesse");
chesse.addEventListener('click', () => {
    modalChesse.classList.add('open_close');
});
cerrarChesse.addEventListener('click', () => {
    modalChesse.classList.remove('open_close');
});


const mega = document.getElementById("mega");
const modalMega = document.getElementById("modalMega");
const cerrarMega = document.getElementById("cerrarMega");
mega.addEventListener('click', () => {
    modalMega.classList.add('open_close');
});
cerrarMega.addEventListener('click', () => {
    modalMega.classList.remove('open_close');
});


const premium = document.getElementById("premium");
const modalPremium = document.getElementById("modalPremium");
const cerrarPremium = document.getElementById("cerrarPremium");
premium.addEventListener('click', () => {
    modalPremium.classList.add('open_close');
});
cerrarPremium.addEventListener('click', () => {
    modalPremium.classList.remove('open_close');
});


const triple = document.getElementById("triple");
const modalTriple = document.getElementById("modalTriple");
const cerrarTriple = document.getElementById("cerrarTriple");
triple.addEventListener('click', () => {
    modalTriple.classList.add('open_close');
});
cerrarTriple.addEventListener('click', () => {
    modalTriple.classList.remove('open_close');
});

const slash = document.getElementById("slash");
const modalSlash = document.getElementById("modalSlash");
const cerrarSlash = document.getElementById("cerrarSlash");
slash.addEventListener('click', () => {
    modalSlash.classList.add('open_close');
});
cerrarSlash.addEventListener('click', () => {
    modalSlash.classList.remove('open_close');
});

const freddy = document.getElementById("freddy");
const modalFreddy = document.getElementById("modalFreddy");
const cerrarFreddy = document.getElementById("cerrarFreddy");
freddy.addEventListener('click', () => {
    modalFreddy.classList.add('open_close');
});
cerrarTriple.addEventListener('click', () => {
    modalFreddy.classList.remove('open_close');
});