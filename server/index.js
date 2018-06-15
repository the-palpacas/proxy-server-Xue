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
  request(`http://localhost:5000/${req.params.id}/style.css`, 
    (error, response) => {
      error
      ? console.log('====== shop product stylesheet ',error)
      : res.send(response.body);
  })
})

app.get('/:id/reviews/stylesheet', (req, res) => {
  res.set('Content-Type', 'text/css');
  request(`http://localhost:3001/${req.params.id}/dist/styles.css`, 
    (error, response) => {
      error 
      ? console.log('====== review',error)
      : res.send(response.body);
    }
  )
});

app.get('/:id/buying/stylesheet', (req, res) => {
  res.set('Content-Type', 'text/css');
  request(`http://localhost:8000/${req.params.id}/dist/styles.css`,
    (error, response) => {
      error
      ? console.log('======= buying', error)
      : res.send(response.body);
    }
  );
});

app.get('/:id/Shop', (req, res) => {
  request(`http://localhost:5000/${req.params.id}/dist/bundleShopProducts.js`, 
    (error, response) => {
      error
      ? console.log('====== shop product ',error)
      : res.send(response.body);
  })
});

app.get('/:id/shopproducts', (req, res) => {
  request(`http://localhost:5000/${req.params.id}/shopproducts`,
    (error, response) => {
      error 
      ? console.log('====== shop product data',error)
      : res.send(response.body);
    }
  )
})

app.get('/:id/Review', (req, res) => {
  request(`http://localhost:3001/${req.params.id}/dist/main.js`, 
    (error, response) => {
      error 
      ? console.log('====== review',error)
      : res.send(response.body);
    }
  )
});



app.get('/:id/reviews', (req, res) => {
  request(`http://localhost:3001/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? console.log('======= review', error)
      : res.send(response.body);
    }
  );
});

app.post('/:id/reviews', (req, res) => {
  request(`http://localhost:3001/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? console.log('======= review data', error)
      : res.send(response.body);
    }
  );
});

app.put(`/:id/reviews`, (req, res) => {
  request(`http://localhost:3001/${req.params.id}/reviews`,
    (error, response) => {
      error
      ? console.log('======= review data', error)
      : res.send(response.body);
    }
  )
});

app.get('/:id/buying', (req, res) => {
  request(`http://localhost:8000/${req.params.id}/dist/buying.js`,
    (error, response) => {
      error
      ? console.log('======= buying', error)
      : res.send(response.body);
    }
  );
});

app.get('/:id/details', (req, res) => {
  request(`http://localhost:8000/${req.params.id}/details`,
    (error, response) => {
      error
      ? console.log('======= buying data', error)
      : res.send(response.body);
    }
  );
})


app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});


// app.use('/shop/', proxy({
//   target: 'http://localhost:5000', 
//   changeOrigin: true,
//   // pathRewrite: {'^/:id/shopproducts': '/:id'}
// }))