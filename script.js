const button = document.getElementsByName('num');
const op = document.getElementsByName('op');
const igual = document.getElementsByName('igual')[0];
const borrar = document.getElementsByName('borrar')[0];

var text = document.getElementById('ope');

var operacion = '';
var numero1;
var numero2;


button.forEach((boton) => {
    boton.addEventListener('click', () => {
        text.value += boton.innerHTML;
    })
})

op.forEach((op) => {
    op.addEventListener('click', () => {
        if (text.value != '') {
            text.value += op.innerHTML;
            operacion = op.innerHTML;
        }
    })
})

borrar.addEventListener('click', () => {
    text.value = '';
});

igual.addEventListener('click', () => {
    //console.log(text.value);
    var valor = text.value;
    switch (operacion) {
        case "+":
            calcular();
            console.log(numero1);
            console.log(valor.indexOf('+'));
            //console.log('suma');
            
            break;
        case "-":
            break;
        case "x":
            break;
        case "%":
            break;
        default: break;
    }
});

 const calcular = (op)=>{
    var valor = text.value; 
    lugar = valor.indexOf('+');
    logitud = valor.length;
    //console.log(logitud);
    for(i=0;i=lugar; i++ ){
        numero1 += valor[i];
    }
    console.log(numero1);
 }