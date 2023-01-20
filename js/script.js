let modalList = [
    { title: 'Triplo bacon burger', autor: 'por Jorge Relato', src: './assets/imgs/burger.png' },
    { title: 'Pizza 4 estações', autor: 'por Fabiana Melo', src: './assets/imgs/pizza.png' },
    { title: 'Espaguete ao alho', autor: 'por Júlia Kinoto', src: './assets/imgs/espaguete.png' },
    { title: 'Lasanha mac n` cheese', autor: 'por Juliano Vieira', src: './assets/imgs/lasanha.png' },
    { title: 'Docinhos pão-do-céu', autor: 'por Ricardo Golvea', src: './assets/imgs/doce.png' },
    { title: 'Asinhas de frango ao barbecue', autor: 'por Vania Steroski', src: './assets/imgs/asinhas.png' },
    { title: 'Triplo bacon burger', autor: 'por Jorge Relato', src: './assets/imgs/burger.png' },
    { title: 'Pizza 4 estações', autor: 'por Fabiana Melo', src: './assets/imgs/pizza.png' },
    { title: 'Espaguete ao alho', autor: 'por Júlia Kinoto', src: './assets/imgs/espaguete.png' },
    { title: 'Lasanha mac n` cheese', autor: 'por Juliano Vieira', src: './assets/imgs/lasanha.png' },
    { title: 'Docinhos pão-do-céu', autor: 'por Ricardo Golvea', src: './assets/imgs/doce.png' },
    { title: 'Asinhas de frango ao barbecue', autor: 'por Vania Steroski', src: './assets/imgs/asinhas.png' }
]

let card = document.querySelector(".back-card-revenues")
let cardsHTML = modalList.map((item, index) => `
    <div class="card-revenues" onclick="receivedId(this.id)" id="${index}">
        <img src="${item.src}" alt="${item.title}">
        <span class="title-item">${item.title}</span>
        <span class="autor-item">${item.autor}</span>
    </div>
`).join('');

function showingCard() {
    card.innerHTML = cardsHTML;
}

function receivedId(e) {
    window.id = e
    pullModalData(id)
}

function pullModalData(idModal) {
    let modal = document.querySelector('.modal-container')
    let modalImage = document.querySelector('.modalImage');
    let modalTitle = document.querySelector('.modalTitle');
    let modalAutor = document.querySelector('.modalAutor');

    modalImage.setAttribute('src', modalList[idModal].src);
    modalTitle.textContent = modalList[idModal].title
    modalAutor.textContent = modalList[idModal].autor
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}

showingCard()