console.log("JavaScript is successfully connected!");

// Toggle functionality
let toggleMenu = document.querySelector('.menu-toggle');
let headElement = document.querySelector('header');

toggleMenu.onclick = function(){
    headElement.classList.toggle('active');   
}

// Dropdown functionality
let dropdownMenu1 = document.querySelector('.menu-dropdown1');
let dropdownElement1 = document.querySelector('.dropdown1');

dropdownMenu1.onclick = function(){
    dropdownElement1.classList.toggle('active-dropdown');   
}

let dropdownMenu2 = document.querySelector('.menu-dropdown2');
let dropdownElement2 = document.querySelector('.dropdown2');

dropdownMenu2.onclick = function(){
    dropdownElement2.classList.toggle('active-dropdown');   
}

// Looping for plant article
function generatePlantContent() {
    const container = document.getElementById('content');

    dataPlants.forEach(plant => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h2 class="plant-title"><span class="number">${plant.id}. </span>${plant.title}</h2>
            <img class="plant-picture" src="${plant.picture}" alt="${plant.title}">
            <figcaption class="picture-caption"><em>${plant.title}</em></figcaption>
            <p class="plant-detail">${plant.description}</p>
        `;
        container.appendChild(section);
    });
}

// Looping for related article card 
function generateRelatedArticles() {
    const container = document.getElementById('related');

    dataRelatedArticles.forEach(article => {
        const divs = document.createElement('div');
        divs.classList.add('card');
        divs.innerHTML = `
            <img class="thumbnail" src="${article.picture}" alt="${article.title}">
            <h3 class="small-card-title">${article.title}</h3>
        `;
        container.appendChild(divs);
    });
}

// Looping for other article card
function generateNewsCard() {
    const container = document.getElementById('other');

    dataOtherArticles.forEach(article => {
        const divs = document.createElement('div');
        divs.classList.add('card');
        divs.innerHTML = `
            <img class="thumbnail" src="${article.picture}" alt="${article.title}">
            <h3 class="small-card-title">${article.title}</h3>
        `;
        container.appendChild(divs);
    });
}

// Calling functions
document.addEventListener('DOMContentLoaded', function () {
    generatePlantContent();
    generateRelatedArticles(); 
    generateNewsCard();
});

// Data
const dataPlants = [
    { id: 2, title: 'Kalanchoe', picture: "assets/images/plant2.jpeg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "" },
    { id: 3, title: 'Phalaenopsis orchid', picture: "assets/images/plant3.jpeg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "" },
    { id: 4, title: 'Chrysanthemums', picture: "assets/images/plant4.jpeg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "" },
    { id: 5, title: 'Croton plant', picture: "assets/images/plant5.jpeg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "" },
    { id: 6, title: 'Asters', picture: "assets/images/plant6.jpeg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "" },
];

const dataRelatedArticles = [
    { id: 2, title: 'Growing Mums: How To Care For The Classic Fall Flower', picture: "assets/images/plantThumbnail2.jpeg", category: "" },
    { id: 3, title: 'Orchid Growing Tips: How To Take Care Of Orchid Plants Indoors', picture: "assets/images/plantThumbnail3.jpeg", category: "" },
    { id: 4, title: 'Give Thanks With These Plants - Plants That Symbolize Gratitude', picture: "assets/images/plantThumbnail4.jpeg", category: "" },
    { id: 5, title: 'How To Store Rhubarb & Preserve Post-Harvest', picture: "assets/images/plantThumbnail5.jpeg", category: "" },
    { id: 6, title: 'Best Plants For Mental Health, According To Research', picture: "assets/images/plantThumbnail6.jpeg", category: "" },
    { id: 7, title: 'Growing Mums: How To Care For The Classic Fall Flower', picture: "assets/images/plantThumbnail2.jpeg", category: "" },
    { id: 8, title: 'Orchid Growing Tips: How To Take Care Of Orchid Plants Indoors', picture: "assets/images/plantThumbnail3.jpeg", category: "" },
    { id: 9, title: 'Give Thanks With These Plants - Plants That Symbolize Gratitude', picture: "assets/images/plantThumbnail4.jpeg", category: "" },
    { id: 10, title: 'How To Store Rhubarb & Preserve Post-Harvest', picture: "assets/images/plantThumbnail5.jpeg", category: "" },
];

const dataOtherArticles = [
    { id: 2, title: 'What To Do With Pentas In The Winter', picture: "assets/images/plantThumbnail8.jpeg" },
    { id: 3, title: 'What To Do With Gerbera Daisies In Winter', picture: "assets/images/plantThumbnail9.jpeg" },
    { id: 4, title: 'Can Plants Clean Soil: Learn About Plants That Clean Contaminated Soil', picture: "assets/images/plantThumbnail10.jpeg" },
];