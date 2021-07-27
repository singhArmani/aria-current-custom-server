// server.js
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const nextHandle = app.getRequestHandler()

const router = new express.Router({
  strict: true,
  caseSensitive: true,
});

const appPrefix = 'custom'


// Static Predefined routes
router.get(`/${appPrefix}`, (req, res ) => {
   app.render(req, res, '/', req.params);
})
router.get(`/${appPrefix}/about`, (req, res ) => {
   app.render(req, res, '/about', req.params);
})

router.get(`/${appPrefix}/contact`, (req, res ) => {
   app.render(req, res, '/contact', req.params);
})

// Dynamic route
router.get(`/${appPrefix}/posts/:pid`, (req, res ) => {
   app.render(req, res, '/posts/[id]', req.params);
});


router.get(`*_next/*`, (req, res) => nextHandle(req, res));
router.get(`*/__nextjs_*`, (req, res) => nextHandle(req, res));
router.get(`*/api/*`, (req, res) => nextHandle(req, res));

app.prepare().then(() => {
  const server = express();

  server.use(router);
  server.listen(4000, (err) => {
     if (err) {
          throw err;
     }
     console.info(
          `> Ready on http://localhost:4000/${appPrefix}`,
    );
  });
return server;
}).catch(err =>  {
    console.error('Error occurred. ', err.message);
});
