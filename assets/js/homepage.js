window.onload = init()

async function init(){
  fetch('assets/news.html')
  .then(function(response) {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(function(html) {
    getEl('newsContainer').innerHTML = html
  })

  .catch(function(err) {
    console.warn('Failed to fetch page: ', err);
  });
}