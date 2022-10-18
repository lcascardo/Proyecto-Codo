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
    