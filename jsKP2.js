//faz os produtos aparecerem na tabela
function atualizarProd(){
    document.getElementById('corpo_prod').innerHTML = "";
      for(var a = 0; a < produtos.length; a++){
        var n2 = "<tr><td>"+produtos[a]['serial']+"</td><td>"+produtos[a]['nome']+"</td><td>"+produtos[a]['preco']+"</td><td><button id='b3' onclick='removeProduto("+a+")'>remover</button></td></tr>"
        document.getElementById('corpo_prod').innerHTML += n2;
      }
  }


//remover um produto
function removeProduto(n10){
  produtos.splice(n10, 1)
  atualizarProd();
}
  window.onload = function(){
    atualizarProd();
  }


//adicionar um produto
function adic_prod(){
  var p = document.getElementById('input_serial');
    if(p === null){
      var pr = "<tr><td><input id='input_serial' type='text'></td> <td><input id='input_nome_prod' type='text'></td> <td><input id='input_preco' type='text'></td> </tr>"
      document.getElementById('corpo_prod').innerHTML += pr;
        }else{
            var vserial = document.getElementById('input_serial').value;
            var vnome_prod = document.getElementById('input_nome_prod').value;
            var vpreco = document.getElementById('input_preco').value;
            produtos.push({nome: vnome_prod, serial: vserial, preco: vpreco})
            atualizarProd();
          }
    }


//editar um produto
function edit_prod(){
  var editar_prod = document.getElementById('teste_serial');
  var recebe_serial = document.getElementById('input_edita_prod').value;
      if(editar_prod === null){
        document.getElementById('corpo_prod').innerHTML = "";
        for(i in produtos){
            if(recebe_serial == produtos[i]['serial']){
                var pro = "<tr><td><input id='teste_serial'value="+produtos[i]['serial']+" type='text' disabled></td> <td><input id='teste_nome_prod'value="+produtos[i]['nome']+"  type='text'></td> <td><input id='teste_preco'value="+produtos[i]['preco']+"  type='text'></td> </tr>"
                document.getElementById('corpo_prod').innerHTML += pro;
            }else{
                var n11 = "<tr><td>"+produtos[i]['serial']+"</td><td>"+produtos[i]['nome']+"</td><td>"+produtos[i]['preco']+"</td><td><button id='b3' onclick='removeProduto("+i+")'>remover</button></td></tr>"
                document.getElementById('corpo_prod').innerHTML += n11;
            }
        }
  }else{
      var vserial = document.getElementById('teste_serial').value;
      var vnome_prod = document.getElementById('teste_nome_prod').value;
      var vpreco = document.getElementById('teste_preco').value;
      for(i in produtos){
        if(produtos[i]['serial']==recebe_serial){
          produtos[i]['nome']=vnome_prod;
          produtos[i]['preco']=vpreco;
          atualizarProd();
          return
      }
    }
    atualizarProd();
}
}
