const db = require('./config/db'),
      express = require('./config/express');

const app = express();

const PORT_NO = 8000;

// Connect to MySQL database when the server is started

db.connect(function (err) {
    if (err) {
        console.log('Unable to connect ot MySQL');
        proccess.exit(1);
    }
    else {
        app.listen(PORT_NO, function() {
            console.log('Listening on port: ' + PORT_NO);
            console.log('http://localhost:' + PORT_NO);

        })
    }
});