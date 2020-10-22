"use strict";

// SEE Options Click
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


// Add Hover Effects on Projects Portfolio
const pfCardEvent = document.getElementsByClassName("pfImg");
const pfCardContent = document.getElementsByClassName("pfTitle");

function addpfCardHoverEvent (pfCardDiv) {
    for (let i=0; i<pfCardDiv.length; i++) {
        pfCardDiv[i].addEventListener("mouseenter", () => {pfCardContent[i].style.visibility = "visible"})
        pfCardDiv[i].addEventListener("mouseenter", () => {pfCardDiv[i].style.visibility = "hidden"})

        pfCardContent[i].addEventListener("mouseleave", () => {pfCardContent[i].style.visibility = "hidden"})
        pfCardContent[i].addEventListener("mouseleave", () => {pfCardDiv[i].style.visibility = "visible"})
    }
}


addpfCardHoverEvent(pfCardEvent);
