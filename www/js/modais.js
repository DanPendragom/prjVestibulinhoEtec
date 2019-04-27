// This is a JavaScript file
//Modal 1
  var modal = document.getElementById('ManuModal');
  // Para Abrir o Modal 
  var opc2 = document.getElementById('opc2');
  // Para Fechar o Modal 
  var FechaBtn = document.getElementsByClassName('FecharBtn')[0];

  /* Evento para Abrir */
  opc2.addEventListener('click',AbrirModal);
  /* Evento Para fechar */
  FecharBtn.addEventListener('click',FecharModal)
  /* Se Clicar Fora do modal */
  window.addEventListener('click',CliqueFora);

  function AbrirModal(){
    modal.style.display = 'block';
  }
  function FecharModal(){
    modal.style.display =  'none';
  }
  function CliqueFora(e){
    if(e.target == opc2){
    modal.style.display = 'none';
    }
  }
