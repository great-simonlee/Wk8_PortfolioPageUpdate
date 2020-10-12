"use strict";

const introContent = document.getElementById("introText")
introContent.innerHTML = `Hi! Everyone!! I am Seunghoon Simon Lee.</br></br>I'm so excited to be able to learn about web development and expand various networking through the Columbia University coding boot camp. I became interested in making business development and investment strategies by utilizing business data in various fields.</br></br>As managing various international businesses in our company's portfolio, I was able to see the distinctive busisness strategies that can save the entire company or drag the business into a unescapable trap. Nowadays, all the companies are establising their special business strategy based on their previous datasets. However, only few of them can reach the right decision by utilizing the right datasets.</br></br>So, my final goal is to develop a web-based corporate data managemenet system so that all my client will be able to survive even in an unprecedented situation in the future.`;


function makeAboutMeSkillBox (array) {
  len = array.length;  
  for (let i=0; i<len, i++;) {
    document.getElementById("aboutMeSkill").innerHTML = `
    <div id="aboutMeSkillCard">
      <div class="aboutMeSkillLan">
        <div class="aboutMeSkillLanTitle">${array[i]}</div>
        <div class="aboutMeSkillLanPercent">${array[i]}</div>
      </div>
      <div class="aboutMeSkillBar">
        <div class="aboutMeSkillBarPercent"></div>
      </div>
    </div>
    `
  }
}

console.log(Object.keys(aboutMeLanguage));
console.log(Object.values(aboutMeLanguage))