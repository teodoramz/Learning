// am trisat un pic, m-am jucat in postman

//codul este generat cu ajutorul postman, am observat
//ca are si nodejs cand foloseam curl in php




var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'http://localhost:5000/articles/634db7d821c7a244d887ee3d',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
