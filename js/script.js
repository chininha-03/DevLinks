var toogleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light")

    const isLight = html.classList.contains("light")

    console.log(isLight)

}