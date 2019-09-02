export const insertElement = (el, path) => {
  fetch(path)
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      document.getElementById(el).innerHTML = body;
    });
};