export const nav = (el, path) =>{
    fetch(path)
    .then(function(response) {
        return response.text();
      })
      .then(function(body) {
        document.querySelector(el).innerHTML = body;
      });
}