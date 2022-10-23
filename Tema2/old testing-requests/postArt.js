var request = require('request');
var options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol opt",
      "Article_no": 8,
      "Article_short_description": "Nimic8",
      "Article_source": "random book8",
      "Article_URL": "wikipedia.com",
      "Location": ["1", "2", "3", "5"],
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 33,
      "Article_citation": "random guyy8"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body));
  });