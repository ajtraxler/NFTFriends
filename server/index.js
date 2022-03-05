//expres
const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/router.js')
//need to hve sessions so you can tell apart users
//authentication:
const cookieParser = require('cookie-parser')
const session = require('express-session');
const SQLLiteStore = require('connect-sqlite3')(session);


const app = Express();
app.use(
    session({
        store: new SQLLiteStore,
        name: 'sessionId',
        saveUninitialized: false,
        resave: false,
        secret: 'secret-message',//save into env long run
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, //1 day
            sameSite: true,
            httpOnly: false,
            secure: false,
        },
    })
);

app.use(cookieParser());

app.use(cors()); //how do u decide whaat corss to allow
app.use(Express.json()); //body parssesr
app.use(morgan('short'));
app.use(router);

app.listen(3000, () => console.log('listening port 3000'))
