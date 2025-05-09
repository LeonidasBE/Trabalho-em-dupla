window.onload = () => {
    showGames(gameList);
};

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 10);
});

const header = document.querySelector("header");
const urlPadrao = "http://localhost:8080/api/pedido/pedidos";
const gameImages = document.querySelector('.gameImages');
gameImages.innerHTML += gameImages.innerHTML; 
gameImages.innerHTML += gameImages.innerHTML; 

function listarPedidos() {
    httpGetListPedidosAsync(function(response){
        console.log('Pedidos recebidos', response);
    })
}

const gameList = [
    {
        nome: "Hollow Knight",
        imagem: "images/hollow-knight.jpg",
        preco: 69.00,
        descricao: "Descrição descrição descrição."
    },
    {
        nome: "Hades",
        imagem: "images/hades.jpg",
        preco: 69.00,
        descricao: "Descrição descrição descrição."
    },
    {
        nome: "Celeste",
        imagem: "images/celeste.jpg",
        preco: 69.00,
        descricao: "Descrição descrição descrição."
    },
    {
        nome: "Noita",
        imagem: "images/noita.jpg",
        preco: 69.00,
        descricao: "Descrição descrição descrição."
    },
];

function showGames(list) {
    const container = document.querySelector(".sale-content");
    list.forEach((game, index) => {
        const row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `
            <img src="${game.imagem}" alt="">
            <h3>${game.nome}</h3>
            <p>${game.descricao}</p>
            <div class="in-text">
                <div class="price">
                    <h6>R$ ${game.preco}</h6>
                </div>
                <div class="s-btnn">
                    <a class="comprar-btn" data-index="${index}">Comprar</a>
                </div>
            </div>
        `;
        container.appendChild(row);
    });

    const buttons = container.querySelectorAll(".comprar-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            const index = this.getAttribute("data-index");
            realizarPedido(list[index]);
        });
    });
}

function realizarPedido(game) {
    const novoPedido = {
        cliente: "teste",
        enderecoEntrega: "endereço Teste",
        status: "Pendente",
        nomeJogo: game.nome,
        imagem: game.imagem,
        valorTotal: game.preco,
        descricao: game.descricao,
    };

    console.log("Pedido realizado", novoPedido);

    httpPostListPedidosAsync(novoPedido, function(response) {
        console.log("Pedido enviado com sucesso", response);
    });
}

// function realizarPedido(elemento) {
//     const row = elemento.closest(".row");
//     const imagem = row.querySelector("img").getAttribute("src");
//     const nome = row.querySelector("h3").textContent;
//     const preco = row.querySelector(".price h6").textContent;
//     const descricao = row.querySelector("p").textContent;

//     const novoPedido = {
//         cliente: "teste",
//         enderecoEntrega: "endereço Teste",
//         status: "Pendente",
//         nomeJogo: nome,
//         imagem: imagem,
//         valorTotal: preco,
//         descricao: descricao,
//     };

//     console.log('Pedido realizado', novoPedido);

//     httpPostListPedidosAsync(novoPedido, function(response) {
//         console.log('Pedido realizado', response);
//     });
// }

function atualizarPedido() {
    const pedidoAtualizado = {
        id : 1,
        cliente : "teste",
        enderecoEntrega : "endereço Teste 2",
        status : "Entregue",
        valorTotal : 10.0,
    }

    httpPutListPedidosAsync(pedidoAtualizado.id, pedidoAtualizado, function(response){
        console.log('Pedido atualizado', response);
    });
}

function httpGetListPedidosAsync(callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", urlPadrao, true); // true for asynchronous 
    xmlHttp.send(null);
}


function httpPostListPedidosAsync(pedidoJson, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("POST", urlPadrao, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify(pedidoJson));
}


function httpPutListPedidosAsync(id, pedidoJson, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("PUT", urlPadrao + "/" + id, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify(pedidoJson));
}
