// import json server
const jsonserver = require('json-server')
// create server application
const server = jsonserver.create();
// setup path of db.json file
const router =  jsonserver.router('db.json');
// return a  middleware
const middleware = jsonserver.defaults();
// setup a port number for json server
const port = process.env.PORT || 3001;
// use in server
server.use(middleware)
server.use(router)
// listen the port
server.listen(port,()=>{
    console.log('server listening on port:'+port);
});