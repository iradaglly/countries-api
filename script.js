let row = document.querySelector("#row2")
let API_URL = 'https://restcountries.com/v3.1/all'
let selector = document.querySelector("select")

function GetCountries(API_URL) {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            data.forEach(country => {
                row.innerHTML += `<div class="col-lg-3 col-sm-12 ">
            <div class="card mt-5 mx-2">
  <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><b>Country:</b><span>${country.name.common}</span></h5>
    <p class="card-text"><b>Population:</b><span>${country.population}</span></p>
    <p class="card-text"><b>Region:</b><span>${country.region}</span></p>
    <p class="card-text"><b>Capital:</b><span>${country.capital}</span></p>
    <a href="${country.maps.googleMaps}" class="btn btn-primary">Map</a>

    `
            })
            selector.addEventListener("change", () => {
                row.innerHTML = "";

                if (this.value == "name") {
                    data.sort((a, b) => a.name.common.localeCompare(b.name.common))
                    data.forEach(country => {
                        row.innerHTML += `<div class="col-lg-3 col-sm-12 ">
                    <div class="card mt-5 mx-2">
          <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><b>Country:</b><span>${country.name.common}</span></h5>
            <p class="card-text"><b>Population:</b><span>${country.population}</span></p>
            <p class="card-text"><b>Region:</b><span>${country.region}</span></p>
            <p class="card-text"><b>Capital:</b><span>${country.capital}</span></p>
            <a href="${country.maps.googleMaps}" class="btn btn-primary">Map</a>
            `
                    })
                }
                else {
                    data.sort((a, b) => a.population - b.population)

                    data.forEach(country => {
                        row.innerHTML += `<div class="col-lg-3 col-sm-12 ">
                    <div class="card mt-5 mx-2">
          <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><b>Country:</b><span>${country.name.common}</span></h5>
            <p class="card-text"><b>Population:</b><span>${country.population}</span></p>
            <p class="card-text"><b>Region:</b><span>${country.region}</span></p>
            <p class="card-text"><b>Capital:</b><span>${country.capital}</span></p>
            <a href="${country.maps.googleMaps}" class="btn btn-primary">Map</a>
            `
                    })
                }
            })
        })

}
GetCountries(API_URL);
