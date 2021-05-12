window.onload = () => {

    let comprar = document.getElementById('comprar')
    let productos = document.getElementById('productos')
    let Carrito = JSON.parse(localStorage.getItem('productos')) ? JSON.parse(localStorage.getItem('productos')) : []

    function renderProductos(database){
        for (let item in database){
            let newitem =   document.createElement('li')
            newitem.innerHTML = `<img class="itemImg" src="https://via.placeholder.com/150" alt="img">
                                <p class="itemDes"> ${database[item].description}</p>
                                `

            newitem.classList = 'item';
            productos.appendChild(newitem);

        }
    }

    renderProductos(Carrito)
    comprar.addEventListener('click', ()  => {
        localStorage.clear();
    })
}