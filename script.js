function calcular() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resDiv = document.getElementById('resultado-container');

    if(peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        document.getElementById('valorimc').innerText = imc;
        resDiv.classList.remove('hidden');

        let texto = "";
        if (imc  < 18.5) texto = "Abaixo do peso";
        else if (imc < 25) texto =  "Peso ideal";
        else texto =  "Sobrepeso";

        document.getElementById('classificado').document.write(resDiv)

    }
}


