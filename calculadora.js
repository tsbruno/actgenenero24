const sumar = (numero1, numero2) => {
        return numero1 + numero2; 
}

const restar = (numero1, numero2) => {
    return numero1 - numero2; 
}


const multi = (numero1, numero2) => {
    return numero1 * numero2; 
}

const div = (numero1, numero2) => {
    return numero1 / numero2; 
}


const mostrarResultado = (numero1, numero2) => {
    return numero1 / numero2; 
}

export {
    sumar 
}





 export const sumar =(numero1, numero2) => {
    return numero1 + numero2;
}

const restar =(numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar =(numero1,numero2) => {
    return numero1 * numero2;
}

 export const dividir =(numero1,numero2) => {
    return numero1 / numero2;
}

 export const mostrarResultado =(operacion, numero1, numero2, resultado) =>{
    const respuesta = document.createElement("h3");
    respuesta.textContent = `La ${operacion} del ${numero1} y ${numero2} es ${resultado}`;
}

export {
    sumar, 
    restar, 
    multiplicar, 
    dividir, 
    mostrarResultado
}
