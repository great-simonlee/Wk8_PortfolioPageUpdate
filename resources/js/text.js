"use strict";

const introContent = document.getElementById("introText");
introContent.innerHTML = `Hi! Everyone!! I am Seunghoon Simon Lee.</br></br>I'm so excited to be able to learn about web development and expand various networking through the Columbia University coding boot camp. I became interested in making business development and investment strategies by utilizing business data in various fields.</br></br>As managing various international businesses in our company's portfolio, I was able to see the distinctive busisness strategies that can save the entire company or drag the business into a unescapable trap. Nowadays, all the companies are establising their special business strategy based on their previous datasets. However, only few of them can reach the right decision by utilizing the right datasets.</br></br>So, my final goal is to develop a web-based corporate data managemenet system so that all my client will be able to survive even in an unprecedented situation in the future.`;

const skillCard = document.getElementById("aboutMeSkill");
const expCard = document.getElementById("aboutMeExperience")

// Create Skill Card
function createSkilCard(array) {
  for (let i=0; i<array.length; i++) {
    let langKey = Object.keys(aboutMeLanguage)[i];
    let langVal = Object.values(aboutMeLanguage)[i];

    createSkillEachCard(skillCard, langKey, langVal);
    document.getElementsByClassName("aboutMeSkillBarPercent")[i].style.width = langVal;
  }
}

function createSkillEachCard(loc, lang, achie) {
  loc.innerHTML += `
  <div class="aboutMeSkillCard">
    <div class="aboutMeSkillLan">
      <div class="aboutMeSkillLanTitle">${lang}</div>
      <div class="aboutMeSkillLanPercent">${achie}</div>
    </div>
    <div class="aboutMeSkillBar"> 
      <div class="aboutMeSkillBarPercent"></div>
    </div>
  </div>
  `
}

// Create Experience Card
function createExpEachCard(ob) {
  for (let i=0; i<ob.length; i++) {
    let com = Object.keys(aboutMeExperience);
    let pos = aboutMeExperience[com[i]][1];
    let loc = aboutMeExperience[com[i]][0];
    let time = aboutMeExperience[com[i]][2];

    createExpCard (expCard, com[i], pos, loc, time);

  }
}

function createExpCard (expHtml, com, pos, loc, time) {
  expHtml.innerHTML += `
  <div class="aboutMeExpCard">
            <div class="aboutMeExpTitle">
              <div class="aboutMeExpCompany">${com}</div>
              <div class="aboutMeExpPosition">${pos}</div>
              <div class="aboutMeExpLocaiton">${loc}</div>
              <div class="aboutMeExpTime">${time}</div>
            </div>
            <div class="aboutMeExpContent">
              <ul class="aboutMeExpContentUl">
              </ul>
            </div>
          </div>
  `
}

createSkilCard(Object.keys(aboutMeLanguage));
createExpEachCard(Object.keys(aboutMeExperience));

// About Me Education List Elements
const expContents = document.getElementsByClassName("aboutMeExpContentUl");

function addExpContents (array, array2) {
  for (let i=0; i<array.length;i++) {
    for (let j=0; j<Object.values(array2)[i].length; j++) {
      array[i].innerHTML += `
      <li>${Object.values(array2)[i][j]}</li>
      `
    }
  }
}

addExpContents(expContents, aboutMeExperienceContent);

// SEE Education Card
const eduDegreeCard = document.getElementById("aboutMeEduDegree");
const eduCertCard = document.getElementById("aboutMeEduCert");

function createEduCard (loc, loc2, array, arrayImg) {
  for (let i=0; i<2; i++) {
    loc.innerHTML += `
      <div class="aboutMeEduCard">
        <img src="${arrayImg[i]}" class="eduLogo"/>
        <div class="aboutMeEduContent">
          <div class="aboutMeEduDeContentUniv">${Object.keys(array)[i]}</div>
          <div class="aboutMeEduDeContentTitle">${Object.values(array)[i][0]}</div>
          <div class="aboutMeEduContentTime">${Object.values(array)[i][1]}</div>
        </div>
      </div>
  `
  }

  for (let i=2; i<4; i++) {
    loc2.innerHTML += `
      <div class="aboutMeEduCard">
        <img src="${arrayImg[i]}" class="eduLogo"/>
        <div class="aboutMeEduContent">
          <div class="aboutMeEduCeContentUniv">${Object.keys(array)[i]}</div>
          <div class="aboutMeEduCeContentTitle">${Object.values(array)[i][0]}</div>
          <div class="aboutMeEduContentTime">${Object.values(array)[i][1]}</div>
        </div>
      </div>
  `
  }
}

createEduCard(eduDegreeCard, eduCertCard, aboutMeEducation, aboutMeEduImg);

// Portfolio Page
const pfSection = document.getElementById("pfSection");

function createPFCard(loc, img, project, projectLan) {
  for (let i=0; i<img.length;i++) {
    loc.innerHTML += `
    <div class="pfCard">
      <img src="${img[i]}" class="pfImg"/>
      <div class="pfTitle" style="visibility: hidden;">
        <div class="pfTItleBg"></div>
        <div class="pfProject">${project[i]}</div>
        <div class="pfLang">${projectLan[i]}</div>
        <a href="#portfolioBody" class="pfAnchor"><button type="button" class="pfBtn">LEARN MORE</button></a>
      </div>
    </div>
    `
  }
}

createPFCard(pfSection, pfImg, Object.keys(pfTitle), Object.values(pfTitle));

// pf Links (Only for first, second, and third webapps)
// This part will be re-written when I have enough number of projects
const pfFirstCard = document.getElementsByClassName("pfAnchor")[0];
pfFirstCard.href = Object.values(pfWebpage)[0];
pfFirstCard.target = "_blank";

const pfSecondCard = document.getElementsByClassName("pfAnchor")[1];
pfSecondCard.href = Object.values(pfWebpage)[1];
pfSecondCard.target = "_blank";
