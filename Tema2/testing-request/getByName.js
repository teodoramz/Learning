// am trisat un pic, m-am jucat in postman

//codul este generat cu ajutorul postman, am observat
//ca are si nodejs cand foloseam curl in php



var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://localhost:5000/articles/Articol123',
  'headers': {
    'Content-Type': 'application/json'
  }

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  //console.log(response.body);
  console.log(JSON.parse(response.body));
});
