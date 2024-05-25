// uhhh gits is being so weird
// express stuff
const express = require('express');
const session = require('express-session');

const app = express();

// for session stuff
app.use(session({
    secret: "sessionSecretKey", // Change this to a random secret key in config.json
    resave: true,
    saveUninitialized: true
}));

// for static stuff
app.use('/assets', express.static('assets'))

// file stuff
const fs = require('fs'); 
const { writeFile, readFile } = require('fs');

// express reqs.
app.get('/', (req, res) =>{
  let loc = req.rawHeaders[1]
  let split = loc.split('.')

  // if (split.length == 1) return res.sendFile('homepage.html', { root: './views' });

  // switch (split[0].toLowerCase()){
  //   case 'blog':
  //     return res.sendFile('blog.html', { root: './views' });
  //   case 'art':
  //     return res.sendFile('blog.html', { root: './views' });
  //   default:
  //     return res.sendFile('homepage.html', { root: './views' });
  // }

  return res.sendFile('homepage.html', { root: './views' });
})

app.get('/about', (req, res) =>{
    console.log(req)
    return res.sendFile('about.html', { root: './views' });
    // res.json({ true: false, funny: res.sessionID  });  
})

app.get('/blog', (req, res) =>{
  console.log(req)
  return res.sendFile('blog.html', { root: './views' });
  // res.json({ true: false, funny: res.sessionID  });  
})

app.get('/uc', (req, res) =>{
  console.log(req)
  return res.sendFile('underconstruction.html', { root: './views' });
  // res.json({ true: false, funny: res.sessionID  });  
})

const port = 3000
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));