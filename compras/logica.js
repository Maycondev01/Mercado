var produtos = [];
var valorTotal = 0;

function adicionarProduto() {
    event.preventDefault();

    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outLista = document.getElementById("outLista");
    var outTotal = document.getElementById("outTotal");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    if (produto == "" || preco == 0 || isNaN(preco)) {
        alert("Por favor, insira o produto e preço!");
        inProduto.focus();
        return;
    }

    produtos.push({ produto: produto, preco: preco });

    var lista = "";
    valorTotal = valorTotal + preco;

    for (var i = 0; i < produtos.length; i++) {
        var item = produtos[i];
        lista += (i + 1) + ". " + item.produto + " - R$: " + item.preco.toFixed(2) + "\n";
    }

    outLista.textContent = lista;
    outTotal.textContent = valorTotal.toFixed(2);

    inProduto.value = "";
    inPreco.value = "";
    inProduto.focus();
}

function preferenciaProduto() {
    event.preventDefault();

    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outLista = document.getElementById("outLista");
    var outTotal = document.getElementById("outTotal");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    if (produto == "" || preco == 0 || isNaN(preco)) {
        alert("Por favor, insira o produto e preço!");
        inProduto.focus();
        return;
    }

    produtos.unshift({ produto: produto, preco: preco });

    var lista = "";
    valorTotal = valorTotal + preco;

    for (var i = 0; i < produtos.length; i++) {
        var item = produtos[i];
        lista += (i + 1) + ". " + item.produto + " - R$: " + item.preco.toFixed(2) + "\n";
    }

    outLista.textContent = lista;
    outTotal.textContent = valorTotal.toFixed(2);

    inProduto.value = "";
    inPreco.value = "";
    inProduto.focus();
}

function excluir() {
    if (produtos.length < 0) {
        alert("Não tem nenhum produto registrado!");
        inProduto.focus();
        return;
    }

    var outLista = document.getElementById("outLista");
    var outTotal = document.getElementById("outTotal");

    var removido = produtos.pop();

    var lista = "";


    for (var i = 0; i < produtos.length; i++) {
        var item = produtos[i];
        lista += (i + 1) + ". " + item.produto + " - R$: " + item.preco.toFixed(2) + "\n";
    }

    valorTotal = valorTotal - removido.preco;

    outLista.textContent = lista;
    outTotal.textContent = valorTotal.toFixed(2);
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

var btPrefere = document.getElementById("btPrefere");
btPrefere.addEventListener("click", preferenciaProduto);

var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluir);