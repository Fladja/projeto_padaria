var final = 0;
var carrinho = []


function implementarVenda(){
  var serial = document.getElementById("input_vendas_serial").value;
  var quantidade = document.getElementById("input_vendas_quant").value;
  for(var i = 0; i < produtos.length; i++){
    var products = produtos[i]
    if(products["serial"] == serial){
        var parcial = products["preco"]*quantidade
        carrinho.push({nome:produtos[i]['nome'] , preco:produtos[i]['preco'], serial:produtos[i]['serial'], quantidade:quantidade , parcial:parcial})
        adicionar_tabela()
        final += parcial
        pFinal()
        return
      }
    }
    alert("Não encontrou o produto");
  }


//adicionar um produto no carrinho (as duas)
function adicionar_tabela(){
  var tabela = document.getElementById('corpo_vendas').innerHTML="";
  for(i in carrinho){
  var nova_linha = "<tr><td>"+carrinho[i]['serial']+"</td> <td>"+carrinho[i]['nome']+"</td> <td>"+carrinho[i]['preco']+"</td> <td>"+carrinho[i]['quantidade']+"</td> <td>"+carrinho[i]['parcial']+"</td></tr>"
  document.getElementById('corpo_vendas').innerHTML+=nova_linha;
}
}


//edita um produto do carrinho
function edit_vendas(){
  var editar_venda = document.getElementById('teste_serial_venda');
  var recebe_serial_venda = document.getElementById('input_edita_vendas').value;
      if(editar_venda === null){
        document.getElementById('corpo_vendas').innerHTML = "";
        for(i in carrinho){
            if(recebe_serial_venda == carrinho[i]['serial']){
                var ven = "<tr><td><input id='teste_serial_venda'value="+carrinho[i]['serial']+" type='text' disabled></td> <td><input id='teste_nome_venda'value="+carrinho[i]['nome']+"  type='text'></td> <td><input id='teste_preco_venda'value="+carrinho[i]['preco']+"  type='text' disabled></td> <td><input id='teste_quant_venda'value="+carrinho[i]['quantidade']+"  type='text'></td> <td><input id='teste_parcial_venda'value="+carrinho[i]['parcial']+"  type='text' disabled></td> </tr>"
                document.getElementById('corpo_vendas').innerHTML += ven;
            }else{
                var n11 = "<tr><td>"+carrinho[i]['serial']+"</td><td>"+carrinho[i]['nome']+"</td><td>"+carrinho[i]['preco']+"</td><td>"+carrinho[i]['quantidade']+"</td><td>"+carrinho[i]['parcial']+"</td><td></tr>"
                document.getElementById('corpo_vendas').innerHTML += n11;
            }
        }
  }else{
      var vserial = document.getElementById('teste_serial_venda').value;
      var vnome_prod = document.getElementById('teste_nome_venda').value;
      var vquantidade = document.getElementById('teste_quant_venda').value;
      var vparcial = document.getElementById('teste_parcial_venda').value;
      for(i in produtos){
        if(carrinho[i]['serial']==recebe_serial_venda){
          final-=carrinho[i]['parcial']
          var fi = vquantidade*carrinho[i]['preco']
          carrinho[i]['nome']=vnome_prod;
          carrinho[i]['quantidade']=vquantidade;
          carrinho[i]['parcial']=fi;
          final += fi;
          pFinal();
          adicionar_tabela();
          return
      }
    }
    adicionar_tabela();
}
}


//função remove produto
function removeVendas(){
  var remove = document.getElementById('input_remove_vendas').value
  for(i in carrinho){
    if(remove == carrinho[i]['serial']){
      final-=carrinho[i]['parcial'];
      carrinho.splice(i,1)
      pFinal()
      adicionar_tabela();
      return
    }
  }
}


//preço final
function pFinal(){
  document.getElementById("valorf").innerHTML = final;
}


//botão finalizar
function finaliza(){
 window.location.href="VendasKP.html"
}
