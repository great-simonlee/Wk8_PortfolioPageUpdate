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
            changeSEEPages(currentSEEOption);
            console.log(currentSEEOption);
        })
    }
}

// Add Paging Function with currentSeeOption
function changeSEEPages(btn) {
    if (btn === "SKILLS") {
        aboutMeSkillDiv.style.display = "block";
        aboutMeExperienceDiv.style.display = "none";
        aboutMeEducationDiv.style.display = "none";
    } else if (btn === "EXPERIENCE") {
        aboutMeSkillDiv.style.display = "none";
        aboutMeExperienceDiv.style.display = "block";
        aboutMeEducationDiv.style.display = "none";
    } else if (btn === "EDUCATION") {
        aboutMeSkillDiv.style.display = "none";
        aboutMeExperienceDiv.style.display = "none";
        aboutMeEducationDiv.style = "flex";
    }
}

setAboutMeSEEOptionClick();
