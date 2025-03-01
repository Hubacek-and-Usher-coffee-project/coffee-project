"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div><h2>' + coffee.name + '</div></h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(roastSelection.value === "all"){
            filteredCoffees.push(coffee)

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

let userInput = document.getElementById("search");

userInput.addEventListener('keyup', function () {
    let searchBoxInput = userInput.value.toLowerCase(); // convert searchBoxInput to lowercase
    let filteredCoffees = [];
    for(let i = 0; i < coffees.length; i++){
        if(coffees[i].name.toLowerCase().includes(searchBoxInput)) // convert coffee name to lowercase and compare
            filteredCoffees.push(coffees[i])
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
})
//                   ^ We are rendering coffee here

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// let newCoffeeInput = document.getElementById("submit");
// newCoffeeInput.addEventListener("click", function (e){
//     let newCoffee = document.getElementById("newCoffee").value
//     newCoffee.push(coffees)
// })



// 1st TODO: You need to make a querySelector for getting the search bar.

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);


// 2nd TODO: You need to create and event listener that listens for when
// --> the user has put something in the search bar.
roastSelection.addEventListener('input', updateCoffees);
submitButton.addEventListener('click', updateCoffees);

let addCoffeeButton = document.querySelector('#add-coffee-button');
addCoffeeButton.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form submission
    let newCoffeeName = document.querySelector('#new-coffee-name').value;
    let newCoffeeRoast = document.querySelector('#new-coffee-roast').value;
    let newCoffee = {id: coffees.length + 1, name: newCoffeeName, roast: newCoffeeRoast};
    coffees.push(newCoffee);
    updateCoffees(e);
    tbody.innerHTML = renderCoffees(coffees);
});
