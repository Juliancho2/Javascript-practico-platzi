
// function saludar(name,lastname,nickname){
// return console.log(`Mi nombre es ${name} ${lastname} pero prefiero que me digas ${nickname}`);
// };


// saludar("julian","moreno","juliancho");
let respuesta;
const prompt = () => {
     respuesta = parseInt(prompt("Dime cuanto es el resultado de 2 + 2 "));
}

prompt();

if(respuesta === 4)console.log("Felicitaciones");
else prompt();





