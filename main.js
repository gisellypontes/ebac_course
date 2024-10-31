document.getElementById('form-campo').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('numA').value);
    const num2 = parseFloat(document.getElementById('numB').value);

    if (num2 > num1) {
        alert('Sucesso: Formulário válido.');
    } else {
        alert('Erro: O número B deve ser maior que o número A.');
    }
});