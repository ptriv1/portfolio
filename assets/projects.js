document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var requestUrl = 'https://api.github.com/users/ptriv1/repos';
var rottenUrl = 'https://api.github.com/users/jeffcela/repos';



function getProject() {
  fetch(rottenUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    createRottenSection(data);
    }
  );
}

function getApi() {
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      }
    );
  
}

getProject();

getApi();

function createRottenSection(data) {
  var descriptionSection = document.createElement("div");
  var rottenTrailersUrl = data[11].html_url;
  console.log(data[11].html_url);
  console.log(rottenTrailersUrl);
  document.getElementById("rotten-code-url").append(rottenTrailersUrl);
  document.getElementById("rotten-trailers-url").setAttribute("href", rottenTrailersUrl);
}