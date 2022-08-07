'use strict';

const userUrl = document.querySelector('#url-input');

const urlFormId = document.querySelector('#url-form-id');
urlFormId.addEventListener('submit', (e) => {
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      apikey: 'f65bc4687bf1469b81cf2f5b9ab287ac',
    },
    body: `{"destination":"${userUrl.value}","domain":{ "fullName": "rebrand.ly"}}`,
  };

  fetch('https://api.rebrandly.com/v1/links', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});

// console.log(userUrl);
