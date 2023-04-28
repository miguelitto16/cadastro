
function Validar() {
   let email = document.getElementById('email').value;
   let password = document.getElementById('senha').value;
   let confsenha = document.getElementById('confsenha').value;
   let nome = document.getElementById('nome').value;
   let tel = document.getElementById('telefone').value;
   let date = document.getElementById('dtnasc').value;
   let cpf = document.getElementById('cpf').value;
   let cep = document.getElementById('cep').value;
   let estado = document.getElementById('estado').value;
   let cidade = document.getElementById('cidade').value;
   let bairro = document.getElementById('bairro').value;
   let rua = document.getElementById('rua').value;
   let numcasa = document.getElementById('numcasa').value;

   // if((password == '' || confsenha == '') && password !== confsenha){
   //    alert("Por favor corfirme a senha ou verifique o preenchimento");
   // }
   // else {
   //    alert("Senhas conferem");
   // }

   if(!email || !password || !nome || !tel || !date || !cpf || !cep || !estado || !cidade || !bairro || !rua || !numcasa){
      alert("Campos de preenchimento obrigatorio.favor preencher");
   }
   else {
      alert("campos preenchidos com sucesso");
   }


}

