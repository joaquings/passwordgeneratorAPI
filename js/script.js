const API_URL = 'https://passwordinator.onrender.com/?num=true&char=true&caps=true'
const searchBtn = document.getElementById('btnBuscar')
const contenedor = document.getElementById('contenedor')

searchBtn.addEventListener('click', async function () {
    contenedor.innerHTML = ``
    let searchQueryURL = API_URL

    try {
        const response = await fetch(searchQueryURL);
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const raw = await response.json();
        const pass = raw.data
        const passFinal = 'JaP_'+pass
        contenedor.innerHTML += `<p id=pass><em>${passFinal}</em></p>`


    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
})
