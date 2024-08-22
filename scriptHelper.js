
//require('cross-fetch/polyfill');

 function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    
   const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${image}"> `;

 }
 
 function validateInput(testInput) {
    if(testInput === ''){
        return "Empty";
    }else if(isNaN(testInput)){
        return "Not a Number";
    } else{
        return "Is a Number";
    }    
 }
 
    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //console.log("Form submitted with:", { pilot, copilot, fuelLevel, cargoLevel });
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    //const faultyItems = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");

    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);


    if(pilotValidation === 'Empty' || copilotValidation === 'Empty' || fuelValidation === 'Empty' || cargoValidation === 'Empty'){
      alert('All fields are required.');
      return;
    }

    if(pilotValidation === 'Is a Number' || copilotValidation === 'Is a Number')
    {
        alert("Pilot and co-pilot names must be strings.");
        return;
    }

    if(fuelValidation === 'Not a Number' || cargoValidation === 'Not a Number')
    {
        alert("Fuel and Cargo values must be numbers.");
        return;
    }  

    pilotStatus.innerHTML =  `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML =  `Co-pilot ${copilot} is ready for launch`;

    //const fuelNum = Number(fuelLevel);
    //const cargoNum = Number(cargoLevel);

    if(fuelLevel < 10000)
    {
    list.style.visibility = 'visible';
    fuelStatus.innerHTML = 'Fuel level too low for launch';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = 'red';
    }
    else{
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
    }

    if(cargoLevel > 10000)
    {
        list.style.visibility ='visible';
        cargoStatus.innerHTML= 'Cargo mass too heavy for launch';
        launchStatus.innerHTML ='Shuttle Not Ready for Launch';
        launchStatus.style.color= 'red';
    }
    else{
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    }

    if(fuelLevel >=10000 && cargoLevel <=10000)
    {
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color ='green';
    }
 }
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     .then( function(response) {
        return response.json();
        });
 
     return planetsReturned;
 } 
 
 function pickPlanet(planets) {
    const random = Math.floor( Math.random() * planets.length);
    return planets[random];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

//module.exports = { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch };