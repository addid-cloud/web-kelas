// server.js (atau json-server.js)

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/users', (req, res) => {
  const newUser = req.body;
  const users = router.db.get('users');
  users.push(newUser);
  router.db.set('users', users);
  res.status(201).json(newUser);
});

server.use(router);
server.listen(5000, () => {
  console.log('JSON-Server berjalan di port 5000');
});
