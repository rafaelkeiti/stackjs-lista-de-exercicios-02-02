const modal = document.querySelector('.modal-container')
window.idBotaoClicado = 0;
let modalImage = document.getElementById("modalImage");
function openModal(e) {
    window.idBotaoClicado = e
    if (idBotaoClicado === "button1") {
        document.querySelector('#modalTitle').textContent = "Triplo bacon burger";
        document.querySelector('#modalAutor').textContent = "por Jorge Relato";
        modalImage.src = "assets/imgs/burger.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button2") {
        document.querySelector('#modalTitle').textContent = "Pizza 4 estações";
        document.querySelector('#modalAutor').textContent = "por Fabiana Melo";
        modalImage.src = "assets/imgs/pizza.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button3") {
        document.querySelector('#modalTitle').textContent = "Espaguete ao alho";
        document.querySelector('#modalAutor').textContent = "por Júlia Kinoto";
        modalImage.src = "assets/imgs/espaguete.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button4") {
        document.querySelector('#modalTitle').textContent = "Lasanha mac n` cheese";
        document.querySelector('#modalAutor').textContent = "por Juliano Vieira";
        modalImage.src = "assets/imgs/lasanha.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button5") {
        document.querySelector('#modalTitle').textContent = "Docinhos pão-do-céu";
        document.querySelector('#modalAutor').textContent = "por Ricardo Golvea";
        modalImage.src = "assets/imgs/doce.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button6") {
        document.querySelector('#modalTitle').textContent = "Asinhas de frango ao barbecue";
        document.querySelector('#modalAutor').textContent = "por Vania Steroski";
        modalImage.src = "assets/imgs/asinhas.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button7") {
        document.querySelector('#modalTitle').textContent = "Triplo bacon burger";
        document.querySelector('#modalAutor').textContent = "por Jorge Relato";
        modalImage.src = "assets/imgs/burger.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button8") {
        document.querySelector('#modalTitle').textContent = "Pizza 4 estações";
        document.querySelector('#modalAutor').textContent = "por Fabiana Melo";
        modalImage.src = "assets/imgs/pizza.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button9") {
        document.querySelector('#modalTitle').textContent = "Espaguete ao alho";
        document.querySelector('#modalAutor').textContent = "por Júlia Kinoto";
        modalImage.src = "assets/imgs/espaguete.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button10") {
        document.querySelector('#modalTitle').textContent = "Lasanha mac n` cheese";
        document.querySelector('#modalAutor').textContent = "por Juliano Vieira";
        modalImage.src = "assets/imgs/lasanha.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button11") {
        document.querySelector('#modalTitle').textContent = "Docinhos pão-do-céu";
        document.querySelector('#modalAutor').textContent = "por Ricardo Golvea";
        modalImage.src = "assets/imgs/doce.png";
        modal.classList.add('active')

    } else if (idBotaoClicado === "button12") {
        document.querySelector('#modalTitle').textContent = "Asinhas de frango ao barbecue";
        document.querySelector('#modalAutor').textContent = "por Vania Steroski";
        modalImage.src = "assets/imgs/asinhas.png";
        modal.classList.add('active')
    }
}

function closeModal() {
    modal.classList.remove('active')
}
