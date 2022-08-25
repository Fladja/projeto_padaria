//autenticar o funcionário
function ValidaDados(){
  var usuario = document.getElementById("input_usuario").value
  var senha = document.getElementById("input_senha").value
    for(i in usuarios){
      if(usuarios[i]["username"] == usuario){
          if(usuarios[i]["password"] == senha){
            window.location.href="MenuKP.html";
            return
          }else{
            alert('usuário ou senha inválidos');
            return
          }
        }
      }
    alert('não encontrou usuário compatível');
  }


//aparecer na tabela
function atualizarFunc(){
  document.getElementById('corpo_func').innerHTML = "";
    for(var i = 0; i < usuarios.length; i++){
      var n1 = "<tr><td>"+usuarios[i]['contrato']+"</td><td>"+usuarios[i]['name']+"</td><td>"+usuarios[i]['idade']+"</td><td>"+usuarios[i]['contato']+"</td><td>"+usuarios[i]['username']+"</td><td>"+usuarios[i]['password']+"</td><td><button id='b2' onclick='removeFunc("+i+")'>remover</button></td></tr>"
      document.getElementById('corpo_func').innerHTML += n1;
    }
}


//adicionar um funcionário
function adic_func(){
  var fun = document.getElementById('input_contrato');
    if(fun === null){
      var funcio = "<tr><td><input id='input_contrato' type='text'></td> <td><input id='input_nome' type='text'></td> <td><input id='input_idade' type='text'></td> <td><input id='input_contato' type='text'></td> <td><input id='input_username' type='text'></td> <td><input id='input_password' type='password'></td></tr>"
      document.getElementById('corpo_func').innerHTML += funcio;
        }else{
            var vcontrato = document.getElementById('input_contrato').value;
            var vnome = document.getElementById('input_nome').value;
            var vidade = document.getElementById('input_idade').value;
            var vcontato = document.getElementById('input_contato').value;
            var vusername = document.getElementById('input_username').value;
            var vsenha = document.getElementById('input_password').value;
            usuarios.push({name: vnome, contrato: vcontrato, contato: vcontato, idade: vidade, username: vusername, password: vsenha})
            atualizarFunc();
          }
    }


//editar um funcionário
function edit_func(){
  var edit = document.getElementById('teste_contrato');
  var recebe_contrato = document.getElementById('input_edita').value;
      if(edit === null){
        document.getElementById('corpo_func').innerHTML = "";
        for(i in usuarios){
            if(recebe_contrato == usuarios[i]['contrato']){
                var fu = "<tr><td><input id='teste_contrato'value="+usuarios[i]['contrato']+" type='text' disabled></td> <td><input id='teste_nome'value="+usuarios[i]['name']+"  type='text'></td> <td><input id='teste_idade'value="+usuarios[i]['idade']+"  type='text'></td> <td><input id='teste_contato'value="+usuarios[i]['contato']+" type='text'></td> <td><input id='teste_username'value="+usuarios[i]['username']+" type='text'></td> <td><input id='teste_passw'value="+usuarios[i]['password']+"  type='password'></td></tr>"
                document.getElementById('corpo_func').innerHTML += fu;
            }else{
                var n10 = "<tr><td>"+usuarios[i]['contrato']+"</td><td>"+usuarios[i]['name']+"</td><td>"+usuarios[i]['idade']+"</td><td>"+usuarios[i]['contato']+"</td><td>"+usuarios[i]['username']+"</td><td>"+usuarios[i]['password']+"</td><td><button id='b2' onclick='removeFunc("+i+")'>remover</button></td></tr>"
                document.getElementById('corpo_func').innerHTML += n10;
            }
        }
  }else{
      var vcontrato = document.getElementById('teste_contrato').value;
      var vnome = document.getElementById('teste_nome').value;
      var vidade = document.getElementById('teste_idade').value;
      var vcontato = document.getElementById('teste_contato').value;
      var vusername = document.getElementById('teste_username').value;
      var vsenha = document.getElementById('teste_passw').value;
      for(i in usuarios){
        if(usuarios[i]['contrato']==recebe_contrato){
          usuarios[i]['name']=vnome;
          usuarios[i]['idade']=vidade;
          usuarios[i]['contato']=vcontato;
          usuarios[i]['username']=vusername;
          usuarios[i]['password']=vsenha;
          atualizarFunc();
          return
      }
    }
    atualizarFunc();
}
}


//remover um funcionário
function removeFunc(n3){
    usuarios.splice(n3, 1)
    atualizarFunc();
}
    window.onload = function(){
    atualizarFunc();
  }
