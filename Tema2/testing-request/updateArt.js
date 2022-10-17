// am trisat un pic, m-am jucat in postman

//codul este generat cu ajutorul postman, am observat
//ca are si nodejs cand foloseam curl in php



var request = require('request');
var options = {
  'method': 'PUT',
  'url': 'http://localhost:5000/articles/634d9622478500ab688b8ebc',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_name": "Teodor EX",
    "Article_no": 17,
    "Article_short_description": "Nimic"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
