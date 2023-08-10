var toogleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light")

    const isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/eudnv.png" : "../img/eu.jpeg";

    document.querySelector("#profile img").setAttribute("src",srcValue)

    console.log(isLight)

}