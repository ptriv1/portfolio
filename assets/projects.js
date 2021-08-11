var requestUrl = 'https://api.github.com/users/ptriv1/repos';

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

getApi();