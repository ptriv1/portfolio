var requestUrl = 'https://api.github.com/users/ptriv1/repos';
var rottenUrl = 'https://api.github.com/users/jeffcela/repos';

function getProject() {
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
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