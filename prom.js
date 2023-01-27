const express=require('express')

const axios = require('axios');

const app=express();

const url = 'https://api.github.com/users/toxicanthakur';
const makeApiCall= () =>{
    return axios.get(url);
} 
// Using promise
makeApiCall()
    .then(response => {
        console.log("Promise resolved: " + response);
        console.log("Name: " + response.data.name);
        console.log("Email: " + response.data.email);
        console.log("Repos: " + response.data.public_repos);
    })
    .catch(error => {
        console.log("Promise rejected: " + error);
    });
    
 app.get('/',(req,res) =>{
    res.send("hii");

 });

 app.listen(4000);
  
      
