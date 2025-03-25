document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('calcular-btn').addEventListener('click', calcular);
});

function calcular() {

    const raio = parseFloat(document.getElementById('raio').value);
    
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio (número positivo).");
        return;
    }
    
    const comprimento = 2 * Math.PI * raio;
    const area = Math.PI * Math.pow(raio, 2);
    const volume = (3/4) * Math.PI * Math.pow(raio, 3);
   
    document.getElementById('comprimento').textContent = comprimento.toFixed(4);
    document.getElementById('area').textContent = area.toFixed(4);
    document.getElementById('volume').textContent = volume.toFixed(4);
  
    document.getElementById('resultado').style.display = 'block';
}