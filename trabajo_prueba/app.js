document.querySelector('#sumarBtn').addEventListener('click', () => {
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    
    // Error intencional: en lugar de sumar, estamos restando
  
    const resultado = num1 - num2;
    
    document.querySelector('#resultado').textContent = `Resultado: ${resultado}`;
});
