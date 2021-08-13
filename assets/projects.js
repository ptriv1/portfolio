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
  var description = data.description;
  document.getElementById("rotten-code").append(description);
}