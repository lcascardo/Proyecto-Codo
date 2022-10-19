/* --------------CARGAR JUEGOS DE LA API-------------- */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0be3c1d68msha21c5e86bce2947p12f493jsn3e926c896f25',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())
	.then(data=>{
        console.log(data);
        const APP = document.getElementById("app");
        data.forEach(el => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML += `<img src="${el.thumbnail}">
            <h3>${el.title}</h3>
            <p>${el.genre}</p>
            `
            APP.appendChild(card);
            card.addEventListener("click" , ()=>{
                location.href = el.game_url;
            })
        })


        




    })
	.catch(err => console.error(err));
    

/* -----------------VALIDAR FORMULARIO----------------- */

const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit" , e=> {
    e.preventDefault();
    let warnings = "";
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
    parrafo.innerHTML = ``;
    if (nombre.value.length < 4) {
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if (!regexEmail.test(mail.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(telefono.value.length < 10) {
        warnings += `El telefono no es valido <br>`;
        entrar = true;
    }

    if(mensaje.value.length < 5) {
        warnings += `El mensaje es muy corto <br>`;
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
    else {
        parrafo.innerHTML = "Enviado";
    }
})


