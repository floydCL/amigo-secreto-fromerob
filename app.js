let listaNombres = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        listaNombres.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaNombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaNombres[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSorteado = listaNombres[indiceAleatorio];
    let mensaje = document.getElementById("resultado");
    mensaje.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}