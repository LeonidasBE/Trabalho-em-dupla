const header = document.querySelector("header");
const urlPadrao = "http://localhost:8080/api/pedido/pedidos";
const gameImages = document.querySelector('.gameImages');
gameImages.innerHTML += gameImages.innerHTML; 
gameImages.innerHTML += gameImages.innerHTML; 

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 10);
});

function listarPedidos() {
    httpGetListPedidosAsync(function(response){
        console.log('Pedidos recebidos', response);
    })
}

// function realizarPedido() {
//     const novoPedido = {
//         cliente : "teste",
//         enderecoEntrega : "endereço Teste",
//         status : "Pendente",
//         valorTotal : 10.0,
//     }

//     httpPostListPedidosAsync(novoPedido, function(response){
//         console.log('Pedido realizado', response);
//     })
// }


function realizarPedido(elemento) {
    const row = elemento.closest(".row");
    const imagem = row.querySelector("img").getAttribute("src");
    const nome = row.querySelector("h3").textContent;
    const preco = row.querySelector(".price h6").textContent;
    const descricao = row.querySelector("p").textContent;

    const novoPedido = {
        cliente: "teste",
        enderecoEntrega: "endereço Teste",
        status: "Pendente",
        nomeJogo: nome,
        imagem: imagem,
        valorTotal: preco,
        descricao: descricao,
    };

    console.log('Pedido realizado', novoPedido);

    httpPostListPedidosAsync(novoPedido, function(response) {
        console.log('Pedido realizado', response);
    });
}

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
