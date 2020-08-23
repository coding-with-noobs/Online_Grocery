let send = new Object;
if (sessionStorage.getItem('fav') != null)
    send = JSON.parse(sessionStorage.getItem('fav'));
let buy = document.querySelectorAll("div.grid div.items div.cart article");
let plus, minus, quantity;
let add = document.querySelectorAll("div.grid div.items div.cart p");
let cart = document.querySelectorAll("div.items");

function hide(x, val1, val2) {
        x.style.height = val1;
        x.style.overflow = val2;
        x.style.transition = 'width 0.3s linear ';
    }
document.getElementById("index").innerHTML=Object.keys(send).length;
for (let i = 0; i < buy.length; i++) {
    plus = buy[i].lastElementChild;
    minus = buy[i].firstElementChild;
    quantity = buy[i].children[1];
    let name = cart[i].children[1].innerText;
    let rate = cart[i].children[2].firstElementChild.innerHTML;
    let productid = cart[i].lastElementChild.id;

    hide(buy[i], "0px", "hidden");
    if ((send[`${productid}`]) && (send[`${productid}`].quantity) > 0) {
        quantity.value = send[`${productid}`].quantity;
        hide(add[i], "0px", "hidden");
        hide(buy[i], "30px", "");
    }
    add[i].addEventListener('click', () => {
        quantity = buy[i].children[1];
        quantity.value=1;
        hide(add[i], "0px", "hidden");
        hide(buy[i], "30px", "");
        send[`${productid}`] = new Person(productid, name, quantity.value, rate);
        sessionStorage.setItem("fav", JSON.stringify(send));
        document.getElementById("index").innerHTML=Object.keys(send).length;
    });

    quantity = buy[i].children[1];
    quantity.addEventListener('input', () => {
        quantity = buy[i].children[1];
        send[`${productid}`].quantity = parseInt(quantity.value);
        sessionStorage.setItem("fav", JSON.stringify(send));
        document.getElementById("index").innerHTML=Object.keys(send).length;
    });
    quantity.addEventListener('blur', () => {
        quantity = buy[i].children[1];
        if (parseInt(quantity.value) < 1) {
            delete send[`${productid}`];
            hide(buy[i], "0px", "hidden");
            hide(add[i], "auto", "");
        }
        sessionStorage.setItem("fav", JSON.stringify(send));
        document.getElementById("index").innerHTML=Object.keys(send).length;
    });

    plus.addEventListener('click', () => {
        quantity = buy[i].children[1];
        quantity.value++;
        send[`${productid}`].quantity = quantity.value;
        sessionStorage.setItem("fav", JSON.stringify(send));
    });
    minus.addEventListener('click', () => {
        quantity = buy[i].children[1];
        if (quantity.value > 0)
            quantity.value--;
        send[`${productid}`].quantity = quantity.value;
        if (quantity.value < 1) {
            hide(buy[i], "0px", "hidden");
            hide(add[i], "auto", "");
            delete send[`${productid}`];
        }
        sessionStorage.setItem("fav", JSON.stringify(send));
        document.getElementById("index").innerHTML=Object.keys(send).length;
    });
}