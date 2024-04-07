var prods = [
    { id: 1, name: "Bife com Batata", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;
    var userName = document.getElementById("name").value;
    

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = "";

    output.innerHTML +=`Caro <strong>${userName}</strong> <br><br><br>
        Seguem os dados do seu pedido.<br><br>
        O seu pedido é: <br><br>`;

    for (var input of quantities) {
        var id = parseInt(input.id);
        var quantity = parseInt(input.value);

        if (quantity > 0) { 
            var index = id - 1;
            var totalPrice = prods[index].price * quantity;
            total += totalPrice;
            output.innerHTML += `• Prato: ${prods[index].name} - Preço Unitário: ${formatter.format(prods[index].price)} - Quantidade: ${quantity} - Subtotal: ${formatter.format(totalPrice)}<br>`;
        }
    }
        output.innerHTML += `<br><br><h2>Preço Final ${formatter.format(total)}</h2>`;
}