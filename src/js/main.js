"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

if('.list--js') {
  const list = document.querySelector('.list--js');
    fetch('https://api.github.com/users/doneilprakapawecz/repos').
    then(resp => resp.json())
    .then(resp => {
      const repos = resp;
      for (const repo of repos) {
        const {description,html_url, name} = repo;
        list.innerHTML += `<li class="list__repo--element">
             <a href="${html_url}"class="link"target="_blank"> ${name} </a>
             <p class="paragrath">${description ? description: "brak opisu" }</p>
         </li>`;
      }
    }).catch(err => {
      console.log(err); 
    })
   
} 


console.log(`Hello world!`);


