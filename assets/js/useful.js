function getEl(id){
  return document.getElementById(id)
}

function createEl(type){
  return document.createElement(type)
}

function getTimeStamp() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString();
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

function toggleVis(elementId){ 
  let x = document.getElementById(elementId);

  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else 
  {
    x.style.display = "none";
  }
}

window.onload = init()

async function init(){
  fetch('assets/nav.html')
  .then(function(response) {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(function(html) {
    getEl('nav').innerHTML = html
  })

  .catch(function(err) {  
    console.warn('Failed to fetch page: ', err);  
  });
}