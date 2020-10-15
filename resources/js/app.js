"use strict";

var currentSEEOption;
const aboutMeSEEBtn = document.getElementsByClassName("aboutMeSEEBtn");
const aboutMeSkillDiv = document.getElementById("aboutMeSkill");
const aboutMeExperienceDiv = document.getElementById("aboutMeExperience");
const aboutMeEducationDiv = document.getElementById("aboutMeEducation");

function setAboutMeSEEOptionClick () {
    for (let i=0; i<aboutMeSEEBtn.length; i++) {
        aboutMeSEEBtn[i].addEventListener("click", (e) => {
            currentSEEOption = e.target.innerText;
            console.log(currentSEEOption);
        })
    }
}

// Add Paging Function with currentSeeOption

setAboutMeSEEOptionClick();

// function setCurrentSEEOption () {
//     document.getElementById("aboutMeSkill").addEventListener("click", changeCurrentSEEOption(currentSEEOption))
// }

// function changeCurrentSEEOption(button) {
//   currentSEEOption = button.
// }

// for (i=0, i<BtnLength)
// console.log(document.getElementsByClassName("aboutMeSEEBtn"))