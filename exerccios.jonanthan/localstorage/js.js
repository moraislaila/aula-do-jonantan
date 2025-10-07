
//criando variavel que sera armazenada
//let numero = 10

//armazenar informação no localstorage
//localStorage.setItem("numero",numero)

//recuperando o dado armazenado
let num = localStorage.getItem("numero")
alert("o numero armazenado era " + num)

//vetor / lembre do push
//let nomes = ["maria" , "joao" , "fabio"]
//localStorage.setItem("nomes", JSON.stringify(nomes)) //strinhfy ele esta transformando os dados em objeto


//recuperando o vetor armazenado
let nomesArmazenados = JSON.parse(localStorage.getItem("nomes")) //json.parse faz o contrario ele transforma o objeto em um vetor
alert("vetor recuperado " +  nomesArmazenados)


//tentando recupear uma informação, caso ela não exista criamos um vetor vazio
let nomes = JSON.parse(localStorage.getItem("nomes")) || [] 


//TESTANDO
let lista = JSON.parse(localStorage.getItem("lista")) || ["vazio"] 
alert(lista)