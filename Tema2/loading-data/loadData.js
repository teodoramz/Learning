var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:5000/articles',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "Article_name": "Articol unu",
    "Article_no": 1,
    "Article_short_description": "Nimic",
    "Article_source": "random book",
    "Article_URL": "wikipedia.com",
    "Location": "Bucuresti",
    "Article_keywords": "oras petrecere informatie",
    "Article_weight": 3,
    "Article_citation": "random guy"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
});


options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol doi",
      "Article_no": 2,
      "Article_short_description": "Nimic2",
      "Article_source": "random book2",
      "Article_URL": "wikipedia.com2",
      "Location": "Bucuresti",
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 4,
      "Article_citation": "random guy2"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol trei",
      "Article_no": 3,
      "Article_short_description": "Nimic3",
      "Article_source": "random book3",
      "Article_URL": "wikipedia.com3",
      "Location": "Bucuresti",
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 1,
      "Article_citation": "random guy3"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol patru",
      "Article_no": 4,
      "Article_short_description": "Nimic4",
      "Article_source": "random book4",
      "Article_URL": "wikipedia.com4",
      "Location": "Bucuresti",
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 6,
      "Article_citation": "random guy4"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol cinci",
      "Article_no": 5,
      "Article_short_description": "Nimic5",
      "Article_source": "random book5",
      "Article_URL": "wikipedia.com5",
      "Location": "Bucuresti",
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 10,
      "Article_citation": "random guy5"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });

  options = {
    'method': 'POST',
    'url': 'http://localhost:5000/articles',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Article_name": "Articol 6",
      "Article_no": 6,
      "Article_short_description": "Nimic6",
      "Article_source": "random book6",
      "Article_URL": "wikipedia.com6",
      "Location": "Bucuresti",
      "Article_keywords": "oras petrecere informatie",
      "Article_weight": 22,
      "Article_citation": "random guy6"
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });