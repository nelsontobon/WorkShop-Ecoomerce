window.onload = () => {

    let dataBase = [{
            description: 'Reloj de muñeca para hombres'
        },
        {
            description: 'Juguete de super heroe para niñas'
        },
        {
            description: 'Video juego de aventura para consola PS4'
        },
        {
            description: 'Camara fotográfica profesional'
        },
        {
            description: 'Libro recetas de cocina'
        },
        {
            description: 'Televisor Samsung 55 pulgadas'
        },
        {
            description: 'Ropa interior dama'
        }
    ]

    console.log(JSON.parse(localStorage.getItem('productos')))
    let Carrito = JSON.parse(localStorage.getItem('productos')) ? JSON.parse(localStorage.getItem('productos')) : []

    console.log(Carrito)

    let contPrincipal = document.getElementById('contPrincipal')
    let productos = document.getElementById('productos')
    let cantidad = document.getElementById('cant')
    let btnItem = document
    let botones = []
    let contador = 0

    function setContador(){
        cantidad.textContent = localStorage.getItem('contador')
    }
    

    function renderProductos(database){
        for (let item in database){
            let newitem =   document.createElement('li')
            newitem.innerHTML = `<img class="itemImg" src="https://via.placeholder.com/150" alt="img">
                                <p class="itemDes"> ${database[item].description}</p>
                                <input type="button" class="itemAdd" id='prod${item}' value="add to cart">`

            newitem.classList = 'item';
            productos.appendChild(newitem);
            botones[item] = document.getElementById(`prod${item}`)  
            botones[item].addEventListener('click', ()=> {
                addCar(item)
            })
        }
    }

    function addCar(item){
        Carrito.push({description: dataBase[item].description})
        localStorage.setItem('productos',JSON.stringify(Carrito))
        contador = Carrito.length
        localStorage.setItem('contador',contador)
        setContador()
    }

    // renderProductos(dataBase)
    renderProductos(dataBase)
    setContador()
    
}