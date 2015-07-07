# Guardian News API NodeJS Module

This module can be used to query the Guardian's API. This module provides a thin wrapper around request.js to Guardian's API. All functions return promises. To learn more about the API, and which parameters can be passed to each function you can use the [API explorer](http://open-platform.theguardian.com/explore/) or the [documentation](http://open-platform.theguardian.com/documentation/).

# Examples


## Searching Content

```javascript
var guardian = require('guardian-news');

guardian.config({
  apiKey : 'API-KEY'
});

guardian.content({
  q : 'clowns',
  fromDate : '2010-01-19'
}).then(function(response){
  console.log(response);
}, function(err){
  console.log(err);
});
```

## Searching Sections
```javascript
guardian.sections({
  q : 'sports'
}).then(function(response){
  
});
```

## Searching Tags
```javascript
guardian.sections({
  q : 'sports/tennis',
  page : 2
}).then(function(response){
  
});
```

