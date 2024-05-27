window.onload = innithehehbritish()

async function innithehehbritish(){
    fetch('api/blog/list')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
        let blogs = json.blogs

        for (let blog in blogs){
            let blogJSON = blogs[blog]
            
            let blogEl = createNewBlog(blogJSON);

            getEl('blogHolder').prepend(blogEl) // cuz its from oldest to newest so we have to reverse it
        }

        function createNewBlog(json){
            holder = createEl('div');
            holder.className = 'box'

            title = createEl('h1');
            title.innerText = json.title

            line = createEl('hr');

            content = createEl('p');
            content.innerText = json.content

            holder.appendChild(title);
            holder.appendChild(line);
            holder.appendChild(content);

            return holder;
        }
        
        console.log(json)
    })
  
    .catch(function(err) {  
      console.warn('Failed to fetch page: ', err);  
    });
  }