//Pegar dados formulário
 
const nome= document.getElementById("nome");
const endereco= document.getElementById("endereco");
const email= document.getElementById("email");
const telefone= document.getElementById("telefone");
const cpf= document.getElementById("cpf");
const produtos= document.getElementById("produtos");
const pagamento= document.getElementById("pagamento");
 
 
//Para "ouvir" o click do botão, usamos o addEventListener
const bntSubmit = document.getElementById("btn");
 
 const data = [];
 
bntSubmit.addEventListener('click', function (event){    
    //não deixa o formulário se comportar como, padrão, ou seja,
    //enviar os dados para a proxima página/requisiçao
    event.preventDefault();
 
    const pessoa = {
 
        nome: nome.value,
        endereco: endereco.value,
        email: email.value,
        fone: telefone.value,
        cpf: cpf.value,
        produtos: produtos.value,
        pagamento: pagamento.value,
 
    }
   
data.push(pessoa)
    console.log(pessoa)
    console.log(pessoa.favoritos)
   
})