

function pegaPrecoItem (item) {

    var elementoPreco = item.querySelector('.preco-item');
    return Number(elementoPreco.textContent);
    
}

// Decremento de ítens  
var botoesDecrementa = document.querySelectorAll('.item a:first-of-type');
console.log(botoesDecrementa)
 
for (let botao of botoesDecrementa) {
botao.addEventListener('click', function(){

        var item = botao.closest('.item');
        var input = item.querySelector(".quantidade");
        
        if (input.value > 0) {

            input.value--;    
            var precoItem = pegaPrecoItem(item);
            calculaTotalPedido(-precoItem);

        }
    })   
}


// Incremento de ítens
var botoesIncrementa = document.querySelectorAll(".item a:nth-of-type(2)");
console.log(botoesIncrementa)

for (let botao of botoesIncrementa) {
    botao.addEventListener('click', function(){;
    
        var item = botao.closest('.item');
        var input = item.querySelector(".quantidade");

        input.value++;        

        var precoItem = pegaPrecoItem(item);
        calculaTotalPedido(precoItem);
    })
}

function calculaTotalPedido (valor) {

    var elementoTotal = document.querySelector('#total');
    
    elementoTotal.textContent = Number(elementoTotal.textContent) + valor
    
}

// Validação do pedido
var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function(event) {

    var contador = 0
    var inputs = formPedido.querySelectorAll('input.quantidade')
    
    for (let input of inputs) {

        if (input.value > 0) {
            contador++
        }
    }

        if (contador == 0) {

        alert("Escolha ao menos um item para enviar o pedido.")
        event.preventDefault()

        }
})