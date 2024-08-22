
// Write your JavaScript code here!

//const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", async function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = await myFetch();
      listedPlanets = listedPlanetsResponse;
        //console.log(listedPlanets);
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document,planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const pilotName = document.querySelector('input[name="pilotName"]').value;
        const copilotName = document.querySelector('input[name="copilotName"]').value;
        const fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
        const cargoMass = document.querySelector('input[name="cargoMass"]').value;
        const faultyItems = document.getElementById('faultyItems');

        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

    });

});
