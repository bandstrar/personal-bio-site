"use strict";
// console.log("My personal bio site")

const projects = [
    {
        title: "Pet Adoption", 
        screenshot: "./images/petAdoption.jpg", 
        description: "A single page site that shows pets up for adoption and allows filtering based on the type of pet.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://bandstrar-pet-adoption.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/bandstrar/pet-adoption"
      },
    {
        title: "Cooler Project", 
        screenshot: "./images/daBomb.jpg", 
        description: "This is the bestest project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/bandstrar", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/bandstrar"
      },
    {
        title: "The Sorting Hat", 
        screenshot: "./images/sortingHat.jpg", 
        description: "A single page site that allows users to input their name and randomly assigns them a house.", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/bandstrar/sorting-hat", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/bandstrar/sorting-hat"
      }
]

const printToDom = (divId, stringToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

const createProjectCards = () => {
    let domString = ''

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
        domString += `<div class="project-info">`;
        domString +=    `<div class="project-title">${projects[i].title}</div>`
        domString +=    `<img src=${projects[i].screenshot}>`
        domString +=    `<div class="project-description">${projects[i].description}</div>`
        domString +=    `<div class="project-tech">Technologies used: ${projects[i].technologiesUsed}</div>`
        domString +=    `<div class="project-url">Check out the project <a href=${projects[i].url}>here.</a></div>`
        domString +=    `<div class="project-hub"><a href=${projects[i].githubUrl}>Github</a></div>`
        domString += `</div>`
        }
    }  
    printToDom('projectsPage', domString);
}

const init = () => {
    createProjectCards();
}

init();