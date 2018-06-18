const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const request = require('request');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));


app.use('/:id', express.static(path.join(__dirname, './../public')));

app.get('/:id/shopProducts/stylesheet', (req, res) => {
  res.set('Content-Type', 'text/css');
  request(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/style.css`, 
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
  })
})

app.get('/:id/reviews/stylesheet', (req, res) => {
  res.set('Content-Type', 'text/css');
  request(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/styles.css`, 
    (error, response) => {
      error 
      ? res.status(500).end()
      : res.send(response.body);
    }
  )
});

app.get('/:id/buying/stylesheet', (req, res) => {
  res.set('Content-Type', 'text/css');
  request(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/styles.css`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  );
});

app.get('/:id/Shop', (req, res) => {
  request(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/bundleShopProducts.js`, 
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
  })
});

app.get('/:id/shopproducts', (req, res) => {
  request(`http://petsy-shopproducts-env.mnfihr8sej.us-west-1.elasticbeanstalk.com/${req.params.id}/shopproducts`,
    (error, response) => {
      error 
      ? res.status(500).end()
      : res.send(response.body);
    }
  )
})

app.get('/:id/Review', (req, res) => {
  request(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/main.js`, 
    (error, response) => {
      error 
      ? res.status(500).end()
      : res.send(response.body);
    }
  )
});



app.get('/:id/reviews', (req, res) => {
  request(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  );
});

app.post('/:id/reviews', (req, res) => {
  request(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  );
});

app.put(`/:id/reviews`, (req, res) => {
  request(`http://fecpetsyreviews-env-1.z4rdkvqtp8.us-west-1.elasticbeanstalk.com/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  )
});

app.get('/:id/buying', (req, res) => {
  request(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/dist/buying.js`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  );
});

app.get('/:id/details', (req, res) => {
  request(`http://fecpetsybuying-env.ba2g3p3aep.us-west-1.elasticbeanstalk.com/${req.params.id}/details`,
    (error, response) => {
      error
      ? res.status(500).end()
      : res.send(response.body);
    }
  );
})


app.listen(port, () => {
  console.log(`server running port ${port}`);
});
