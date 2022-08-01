'use strict';

const userUrl = document.querySelector('#url-input').textContent;

console.log(userUrl);

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer 2RPpm4mgkKEI3BnZpVKBhA1g6nwjg7otJqqWGUwj1fI5eeaf0Hrxm51w5JB4',
  },
  body: `{"url":"${userUrl}","domain":"tiny.one"}`,
};

fetch('https://api.tinyurl.com/create', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
