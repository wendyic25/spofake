//1. URL
let url="https://accounts.spotify.com/api/token"

//2. CONFIGURA LA PETICION
let grantType="grant_type=client_credentials"
let clientId="client_id=dd2689659ba94f02a298d48ac320a68a"
let clientSecret="client_secret=cabd8833e0144d25bfd99921bef5576f"

let datosBody=grantType+'&'+clientId+'&'+clientSecret

//3. EJECUTE EL CONSUMO A TRAVES DEL FETCH
let peticion={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:datosBody
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})//Todo ok
.then(function(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    let urlCanciones="https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb/top-tracks?market=US"

    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
        }
    }

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)

        let titulo1=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[0].name

        let imagen1=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[0].album.images[0].url

        let audio1=document.getElementById("audio1")
        audio1.src=respuesta.tracks[0].preview_url



        console.log(respuesta.tracks[1].name)
        console.log(respuesta.tracks[1].preview_url)
        console.log(respuesta.tracks[1].album.images[1].url)

        let titulo2=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[1].name

        let imagen2=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[1].album.images[1].url

        let audio=document.getElementById("audio1")
        audio1.src=respuesta.tracks[1].preview_url




        console.log(respuesta.tracks[2].name)
        console.log(respuesta.tracks[2].preview_url)
        console.log(respuesta.tracks[2].album.images[2].url)

        let titulo3=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[2].name

        let imagen3=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[2].album.images[2].url

        let audio3=document.getElementById("audio1")
        audio1.src=respuesta.tracks[2].preview_url


        console.log(respuesta.tracks[3].name)
        console.log(respuesta.tracks[3].preview_url)
        console.log(respuesta.tracks[3].album.images[3].url)

        let titulo4=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[3].name

        let imagen4=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[3].album.images[3].url

        let audio3=document.getElementById("audio1")
        audio1.src=respuesta.tracks[3].preview_url




        console.log(respuesta.tracks[4].name)
        console.log(respuesta.tracks[4].preview_url)
        console.log(respuesta.tracks[4].album.images[4].url)

        let titulo4=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[4].name

        let imagen4=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[4].album.images[4].url

        let audio4=document.getElementById("audio1")
        audio1.src=respuesta.tracks[4].preview_url



        console.log(respuesta.tracks[5].name)
        console.log(respuesta.tracks[5].preview_url)
        console.log(respuesta.tracks[5].album.images[5].url)

        let titulo5=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[5].name

        let imagen5=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[5].album.images[5].url

        let audio5=document.getElementById("audio1")
        audio1.src=respuesta.tracks[5].preview_url




        console.log(respuesta.tracks[6].name)
        console.log(respuesta.tracks[6].preview_url)
        console.log(respuesta.tracks[6].album.images[6].url)

        let titulo6=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[6].name

        let imagen6=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[6].album.images[6].url

        let audio6=document.getElementById("audio1")
        audio1.src=respuesta.tracks[6].preview_url


    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    

})//Todo ok
.catch(function(respuesta){
    console.log(respuesta)
})//Fallaste



