
"use strict";

console.log(`Hello world!`);

const list = document.querySelector('.k__projects-list--js');

fetch('https://api.github.com/users/doneilprakapawecz/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
   const repos = resp; 
   for (const repo of repos) {
     const {description, homepage, html_url, name} = repo;
     list.innerHTML += `
      <li class="k__project">
        <div class="k__project__container">
          <img class="k__project__logo" src="assets/img/github.svg" alt="">
          <h3 class="project__title">${name}</h3>
          ${
            description ? `<p class="k__project__description">${description}</p>` : 'No description 😔'
          }
        </div>
        <div class="k__project__footer">
          ${
            homepage ? `<a class="k__project__link" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}.">Demo</a>` : ''
          }
          <a class="k__project__link k__project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer"  title="Source code: ${name}.">GitHub</a>
        </div>
      </li>
     `;
   }
  })
  .catch(err => {
    console.log(err);
  })


