const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3223;

app.use(express.static(`${__dirname}/../build`));

app.listen(port, console.log(`You're listening to port ${port} radio!`));