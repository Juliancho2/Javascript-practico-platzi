const d= document;


//Codigo cuadrado
console.group("Cuadrados");

function  perimetroCuadrado(l1){
    return `<p>El perimetro del cuadrado es: ${l1 * 4}</p>`
};

function areaCuadrado(l1){
    return `<p>El area del cuadrado es: ${l1 ** 2}</p>`
};


console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    return `<p>El perimetro del triangulo es: ${parseInt(lado1) + parseInt(lado2) + parseInt(base)}</p>`
}


function areaTriangulo(altura,base){
    return `<p>El area del triangulo es : ${(altura * base) / 2}</p>` ;
}


console.groupEnd();
//Codigo circulo
console.group("Circulo")

//Diametro
function diametroCirculo(r){
    return r* 2
};


//Circunferencia
function circunferenciaCirculo(d){
     //PI
    const PI= Math.PI;
    return Math.round(d * PI);
} 

function areaCirculo(r){
    const PI= Math.PI;
    return Math.round((r ** 2) * PI);
};



console.groupEnd();
// eventos 
d.addEventListener("click",(e)=>{
    if(e.target.matches(".container-figures button")){
        let figure= e.target.parentElement.classList[1];
        let valor=d.querySelector(`.${figure}`).querySelectorAll("input");
        switch(figure){
            case "cuadrado":
                console.log(valor);
                d.querySelector(".main-container-results").innerHTML = (perimetroCuadrado(valor[0].value));
                d.querySelector(".main-container-results").innerHTML += (areaCuadrado(valor[0].value));
                
                break;
            case "triangulo":
                d.querySelector(".main-container-results").innerHTML = (perimetroTriangulo(valor[0].value,valor[1].value,valor[2].value));
                d.querySelector(".main-container-results").innerHTML += (areaTriangulo(valor[3].value,valor[2].value));

                
                
        }

    }

})