//expres
const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/router.js')

const app = Express();

app.use(cors()); //how do u decide whaat corss to allow
app.use(Express.json()); //body parssesr
app.use(morgan('short'));
app.use(router);

app.listen(3000, () => console.log('listening port 3000'))
