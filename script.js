document.addEventListener("DOMContentLoaded", function () {

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const hamburgerMenuButtons = document.querySelector(".hamburger-menu-buttons-container")
    const planetsContainer = document.querySelector(".planet-content-container")
    
    let isHamburegMenuOpen = false;

    // burger menu listener 
    hamburgerMenu.addEventListener("click", function () {

        // 'enable' burger menu
        if(!isHamburegMenuOpen) {
            
            planetsContainer.style.display = "none";
            hamburgerMenuButtons.style.display = "flex";

        }else {
            planetsContainer.style.display = "flex";   
            hamburgerMenuButtons.style.display = "none";
        }         
        
        isHamburegMenuOpen = !isHamburegMenuOpen
    });

    function fetchPlanetInfo(planetName, page){

        const apiUrl = "https://planets-api.vercel.app/api/v1/planets/" + planetName
        const planetPicture = document.getElementById("planet-picture")
        const planetPicture2 = document.getElementById("planet-picture-2")
        const planetWikipedia = document.getElementById("planet-wikipedia-and-source")
        const planetInfoContainer = document.getElementById("planet-info-container")
        const planetOptionsCotainer = document.getElementById("planet-options")

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                console.log(page)

                let planetPictureSrc = data.images.planet
                let planetWikipediaHTML = `<h2 class="planet-name">${data.name}</h2>
                                           <p class="text-content">${data.overview.content}</p>
                                           <p class="text-content">Source: <a href="${data.overview.source}">Wikipedia</a> </p>`
                let planetInfoContainerHTML = `<div class="planet-info"><p class="text-content">Rotation Time</p><p class="text-content-number">${data.rotation}</p></div>
                                               <div class="planet-info"><p class="text-content">Revolution Time</p><p class="text-content-number">${data.revolution}</p></div>
                                               <div class="planet-info"><p class="text-content">Radius</p><p class="text-content-number">${data.radius}</p></div>
                                               <div class="planet-info"><p class="text-content">Average Temp</p><p class="text-content-number">${data.temperature}</p></div>`
                let planetOptionsHTML = `<div class="planet-option" data-planet-name="${data.name}" data-option="1">
                                            <p class="text-content">01</p>
                                            <p class="text-content-number">OVERVIEW</p>
                                         </div>
                                         <div class="planet-option" data-planet-name="${data.name}" data-option="2">
                                            <p class="text-content">02</p>
                                            <p class="text-content-number">INTERNAL STRUCTURE</p>
                                         </div>
                                         <div class="planet-option" data-planet-name="${data.name}" data-option="3">
                                            <p class="text-content">03</p>
                                            <p class="text-content-number">SURFACE GEOLOGY</p>
                                        </div>`;
                if(page === "1"){
                    
                    planetPicture2.style.display = "none";

                }else if(page === "2"){

                    planetPicture2.style.display = "none";
                    planetPictureSrc = data.images.internal;
                    planetWikipediaHTML = `<h2 class="planet-name">${data.name}</h2>
                                           <p class="text-content">${data.structure.content}</p>
                                           <p class="text-content">Source: <a href="${data.structure.source}">Wikipedia</a> </p>`

                }else if(page === "3"){
                        
                    planetPicture2.src = data.images.geology
                    planetPicture2.style.display = "flex";
                    planetWikipediaHTML = `<h2 class="planet-name">${data.name}</h2>
                                           <p class="text-content">${data.geology.content}</p>
                                           <p class="text-content">Source: <a href="${data.geology.source}">Wikipedia</a> </p>`
                }

                planetPicture.src = planetPictureSrc
                planetWikipedia.innerHTML = planetWikipediaHTML
                planetInfoContainer.innerHTML = planetInfoContainerHTML
                planetOptionsCotainer.innerHTML = planetOptionsHTML
            })
            .catch(error => {
                console.error("Error fetching planet data:", error);
            });    

        hamburgerMenuButtons.style.display = "none";
        planetsContainer.style.display = "flex";
    }


    const mercuryButton = document.getElementById("Mercury")
    const venusButton = document.getElementById("Venus")
    const earthButton = document.getElementById("Earth")
    const marsButton = document.getElementById("Mars")
    const jupiterButton = document.getElementById("Jupiter")
    const saturnButton = document.getElementById("Saturn")
    const uranusButton = document.getElementById("Uranus")
    const neptuneButton = document.getElementById("Neptune")

    const burgerMercuryButton = document.getElementById("burger-Mercury")
    const burgerVenusButton = document.getElementById("burger-Venus")
    const burgerEarthButton = document.getElementById("burger-Earth")
    const burgerMarsButton = document.getElementById("burger-Mars")
    const burgerJupiterButton = document.getElementById("burger-Jupiter")
    const burgerSaturnButton = document.getElementById("burger-Saturn")
    const burgerUranusButton = document.getElementById("burger-Uranus")
    const burgerNeptuneButton = document.getElementById("burger-Neptune")


    // Listeners for each button
    mercuryButton.addEventListener("click", function(){ fetchPlanetInfo("mercury", "1") });
    venusButton.addEventListener("click", function(){ fetchPlanetInfo("venus", "1") });
    earthButton.addEventListener("click", function(){ fetchPlanetInfo("earth", "1") });
    marsButton.addEventListener("click", function(){ fetchPlanetInfo("mars", "1") });
    jupiterButton.addEventListener("click", function(){ fetchPlanetInfo("jupiter", "1") });
    saturnButton.addEventListener("click", function(){ fetchPlanetInfo("saturn", "1") });
    uranusButton.addEventListener("click", function(){ fetchPlanetInfo("uranus", "1") });
    neptuneButton.addEventListener("click", function(){ fetchPlanetInfo("neptune", "1") });

    // Additional listeners for burder menu buttons 
    burgerMercuryButton.addEventListener("click", function(){ fetchPlanetInfo("mercury", "1") });
    burgerVenusButton.addEventListener("click", function(){ fetchPlanetInfo("venus", "1") });
    burgerEarthButton.addEventListener("click", function(){ fetchPlanetInfo("earth", "1") });
    burgerMarsButton.addEventListener("click", function(){ fetchPlanetInfo("mars", "1") });
    burgerJupiterButton.addEventListener("click", function(){ fetchPlanetInfo("jupiter", "1") });
    burgerSaturnButton.addEventListener("click", function(){ fetchPlanetInfo("saturn", "1") });
    burgerUranusButton.addEventListener("click", function(){ fetchPlanetInfo("uranus", "1") });
    burgerNeptuneButton.addEventListener("click", function(){ fetchPlanetInfo("neptune", "1") });

    // Listener for planet option buttons
    const planetOptionsContainer = document.getElementById('planet-options');

    planetOptionsContainer.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if ( clickedElement.classList.contains('planet-option') || clickedElement.closest('.planet-option')) {
            
            // Getting attributes from planet-option
            const planetName = clickedElement.getAttribute('data-planet-name');
            const option = clickedElement.getAttribute('data-option');

            fetchPlanetInfo(planetName, option);
        }
});

    // first load
    fetchPlanetInfo("mercury", "1") 
});