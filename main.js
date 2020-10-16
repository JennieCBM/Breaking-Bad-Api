const lista = document.getElementById('lista');
const card = document.getElementById('card');
const name = document.querySelector('h2');


fetch('https://www.breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data => {
    for (const  dato of data) {
        /* const img = dato.img; */
        const elem = document.createElement('p');
        elem.innerText = dato.name;
        lista.appendChild(elem);
        elem.addEventListener('click', (e)=>{
            name.innerText = dato.name;
            card.children[0].src = `${dato.img}`;
            card.children[1].innerText = `Nickname: ${dato.nickname}`;
            card.children[2].innerText = `Birthday: ${dato.birthday}`;
            card.children[3].innerText = `Occupation: ${dato.occupation}`;
        })
    }
})
.catch(error => {
    let h3 = document.querySelector('h3');
    h3.innerText = "";
    name.innerText = "Disculpa, datos no disponibles";
    name.style.gridColumnStart = "1";
})

