
function mostrarCampos() {
    const figura = document.getElementById("figura").value;
    const campos = document.getElementById("campos");
    const imagen = document.getElementById("imagen-figura");
    var html = "";

    switch (figura) {
        case "cubo":
            html = '<div class="input-container">Side: <input type="number" id="lado"></div>';
            imagen.src = "figcubo.png";
            break;
        case "esfera":
            html = '<div class="input-container">Radius: <input type="number" id="radio"></div>';
            imagen.src = "figesfera.png";
            break;
        case "cono":
            html = '<div class="input-container">Radius: <input type="number" id="radio"></div>' +
                '<div class="input-container">Height: <input type="number" id="altura"></div>';
            imagen.src = "figcono.png";
            break;
        case "cilindro":
            html = '<div class="input-container">Radius: <input type="number" id="radio"></div>' +
                '<div class="input-container">Height: <input type="number" id="altura"></div>';
            imagen.src = "figcilindro.png";
            break;
        case "prisma":
            html = '<div class="input-container">Large: <input type="number" id="largo"></div>' +
                '<div class="input-container">Broad: <input type="number" id="ancho"></div>' +
                '<div class="input-container">Height: <input type="number" id="altura"></div>';
            imagen.src = "figprismaRectangular.png";
            break;
        case "piramide":
            html = '<div class="input-container">Base side: <input type="number" id="ladoBase"></div>' +
                '<div class="input-container">Height: <input type="number" id="altura"></div>';
            imagen.src = "figpiramide.png";
            break;
    }
    campos.innerHTML = html;
}

function calcularVolumen() {
    const figura = document.getElementById("figura").value;
    var volumen = 0;
    var unidad = document.getElementById("unidad").value;

    switch (figura) {
        case "cubo":
            var lado = parseFloat(document.getElementById("lado").value);
            volumen = Math.pow(lado, 3);
            break;
        case "esfera":
            var radio = parseFloat(document.getElementById("radio").value);
            volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
            break;
        case "cono":
            radio = parseFloat(document.getElementById("radio").value);
            var altura = parseFloat(document.getElementById("altura").value);
            volumen = (1 / 3) * Math.PI * Math.pow(radio, 2) * altura;
            break;
        case "cilindro":
            radio = parseFloat(document.getElementById("radio").value);
            altura = parseFloat(document.getElementById("altura").value);
            volumen = Math.PI * Math.pow(radio, 2) * altura;
            break;
        case "prisma":
            var largo = parseFloat(document.getElementById("largo").value);
            var ancho = parseFloat(document.getElementById("ancho").value);
            altura = parseFloat(document.getElementById("altura").value);
            volumen = largo * ancho * altura;
            break;
        case "piramide":
            var ladoBase = parseFloat(document.getElementById("ladoBase").value);
            altura = parseFloat(document.getElementById("altura").value);
            volumen = (1 / 3) * Math.pow(ladoBase, 2) * altura;
            break;
    }

    document.getElementById("resultado").innerText = `Volume: ${volumen.toFixed(2)} ${unidad}³`;
}
