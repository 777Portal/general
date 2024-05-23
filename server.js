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
  console.log(req)
  return res.sendFile('lander.html', { root: './views' });
})

app.get('/about', (req, res) =>{
    console.log(req)
    res.json({ true: false, funny: res.sessionID  });  
})

const port = 3000
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));