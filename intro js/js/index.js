//Output - Saída de dados
//1° Função de alerta
//alert('hello word!!')

//2° Função console
//console.log('um log qualquer!!!')
//console.error('um erro!!!')
//console.warn('uma advertência qualquer!!!')
//console.debug('um debug qualquer!!!')

//3° Função InnerHTML
//document.querySelector('p+p').innerHTML = 'Um texto inserido via js'

//4° Função write
//document.open();
//document.write('<h1>Bem-vindo ao JavaScript</h1>');
//document.close();

//-------------------- Eventos ----------------------

let count= 0
let btnIncrement = document.getElementById('btnIncrement')
let btnDecrement = document.getElementById('btnDecrement')
let counter = document.getElementById(counter)

console.debug(count)
console.debug(btnIncrement)
console.debug(btnDecrement)

btnIncrement.addEventListener('click', (event)=>{
    event.preventDefault(); //Previne a ação padrão do navegador
    count++;// Somar mais 1 a contagem
    //console.debug(counter);
    counter.innerText = count;
});

btnDecremenet.addEventListener('click', (event) => {
    event.preventDefault();
    count--;
    //console.debug(counter);
    counter.innerText = count;
});

//----------------------------------------------------------

let character = document.getElementById("character");
let caption = document.getElementById("caption");

character.addEventListener("mouseover", () =>{
    caption.classList.remove("d-none");
});
character.addEventListener("mouseout", () =>{
    caption.classList.add("d-none");
});

//------------------------------------------------

let blurIncrement = document.getElementById("blurIncrement");
let blurDecrement = document.getElementById("blurDecrement");
let blur = 100

blurIncrement.addEventListener('click', () =>{
    blur += 10;
    character
})