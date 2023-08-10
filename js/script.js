var toogleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light")

    const isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/eudnv.png" : "../img/eu.jpeg";
    const altValue = isLight ? "Imagem de uma pessoa bonita na praia, ao lado de uma placa de turismo explicando qual é o nome dos locais por perto" : "Imagem de perfil de uma pessoa bonita na praia"

    document.querySelector("#profile img").setAttribute("src",srcValue);

    document.querySelector("#profile img").setAttribute("alt",altValue);
    
    console.log(isLight)

}