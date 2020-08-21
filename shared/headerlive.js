let ca = document.querySelector('#cartmenu section div.extr');
var favourite, prop, str;
favourite = JSON.parse(sessionStorage.getItem('fav'));

document.getElementById('carticon').addEventListener('click', () => {
    favourite = JSON.parse(sessionStorage.getItem('fav'));
    ca.innerHTML = "";
    prop = Object.getOwnPropertyNames(favourite);
    for (let i = 0; i < prop.length; i++) {
        str = document.createElement('div');
        str.innerHTML = "<h2>" + favourite[prop[i]].name + "</h2><h4>" + favourite[prop[i]].quantity + " &#10006; <span class='price'>Rs." + favourite[prop[i]].rate +
            "</span> = <span class='price total'>Rs." + favourite[prop[i]].quantity * favourite[prop[i]].rate + "</span></h4>";
        ca.append(str);
    }
});